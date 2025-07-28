// server/api/dashboard.ts
import { defineEventHandler, getHeader } from 'h3'
import { verifyToken } from '~/server/utils/auth'
import connectDB from '~/server/utils/db'
import User from '~/server/models/User'

export default defineEventHandler(async (event) => {
  await connectDB()

  const token = getCookie(event, 'token');

//   console.log("TOKEN:", token);
  if (!token) {
    return { status: false, message: 'Token missing' }
  }

  try {
    const decoded = verifyToken(token); //  apka JWT verify function
    const user = await User.findById(decoded.id).select('-password');
//    console.log("USER:", user);
    
    if (!user) {
      return { status: false, message: 'User not found' }
    }

    return { status: true, user }
  } catch (error) {
    return { status: false, message: 'Invalid token' }
  }
})
