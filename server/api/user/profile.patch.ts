import { defineEventHandler, readBody, getCookie, createError } from 'h3'
import connectDB from '@/server/utils/db'
import User from '@/server/models/User'
import UserUpdateLog from '@/server/models/UserUpdateLog'
import { verifyToken } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  await connectDB()

  const token = getCookie(event, 'token')
  if (!token) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized: No token provided' })
  }

  const currentUser = await verifyToken(event) // <-- यदि आपका verifyToken(event) लेता है
  if (!currentUser || !currentUser._id) {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden: Invalid token' })
  }

  const body = await readBody(event);
  const user = await User.findById(currentUser._id);

  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  const fieldsToUpdate = Object.keys(body)
  const logs = []

  for (const field of fieldsToUpdate) {
    const oldValue = user[field]
    const newValue = body[field]

    if (String(oldValue) !== String(newValue)) {
      logs.push({
        userId: user._id,
        updatedBy: currentUser._id,
        field,
        oldValue,
        newValue,
        updatedAt: new Date()
      })

      user[field] = newValue
    }
  }

  await user.save()

  if (logs.length) {
    await UserUpdateLog.insertMany(logs)
  }

  return {
    statusCode: 200,
    status: true,
    message: 'Profile updated successfully'
  }
})
