import {
  defineEventHandler,
  readMultipartFormData,
  getCookie,
  createError,
  sendError,
} from 'h3'
import connectDB from '@/server/utils/db'
import User from '@/server/models/User'
import UserUpdateLog from '@/server/models/UserUpdateLog'
import { verifyToken } from '~/server/utils/auth'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { v4 as uuidv4 } from 'uuid'

export default defineEventHandler(async (event) => {
  await connectDB()

  const token = getCookie(event, 'token')
  if (!token) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized: No token provided' }))
  }

  const decoded = await verifyToken(event)
  if (!decoded || !(decoded as any).id) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Invalid token' }))
  }

  const formData = await readMultipartFormData(event)
  const fields: Record<string, any> = {}
  let photoUrl: string | null = null
console.log('formData:', formData)


  for (const part of formData || []) {
    if (part.type === 'file' && part.name === 'photo' && part.data && part.filename) {
      const uploadDir = join(process.cwd(), 'public/uploads')
      await mkdir(uploadDir, { recursive: true })

      const uniqueName = uuidv4() + '-' + part.filename.replace(/\s+/g, '-')
      const filePath = join(uploadDir, uniqueName)

      await writeFile(filePath, part.data)
      photoUrl = `/uploads/${uniqueName}`
    } else if (part.type === 'field') {
      const value = part.data instanceof Buffer
        ? part.data.toString('utf-8')
        : Buffer.from(part.data).toString('utf-8')

      fields[part.name!] = value.trim()
    }
  }

  const user = await User.findById((decoded as any).id).select('-password')
  if (!user) {
    return sendError(event, createError({ statusCode: 404, statusMessage: 'User not found' }))
  }

  const logs: any[] = []
 
  const schemaPaths = Object.keys(User.schema.paths);
console.log('user:', user)
  for (const field of Object.keys(fields)) {
  const newValue = fields[field];
  const oldValue = user.get(field);

  // Ignore unknown fields
  if (!schemaPaths.includes(field)) {
    console.warn(`⚠️ Skipping unknown field "${field}" not in schema.`);
    continue;
  }
console.log('oldValue:', oldValue)
  // Convert both values to strings for comparison
  const newValStr = newValue === undefined || newValue === null ? '' : String(newValue).trim();
  const oldValStr = oldValue === undefined || oldValue === null ? '' : String(oldValue).trim();

console.log('newValStr:', newValStr)
  if (newValStr !== oldValStr) {
    // 🔁 Try to match type from existing field
    const schemaType = User.schema.path(field);
let castedValue = newValue;

if (schemaType.instance === 'Number') {
  castedValue = Number(newValue);
} else if (schemaType.instance === 'Boolean') {
  castedValue = newValue === 'true' || newValue === true;
} else if (schemaType.instance === 'Date') {
  castedValue = new Date(newValue);
} else {
  castedValue = String(newValue).trim();
}

const currentValue = user.get(field);


    user.set(field, castedValue);
    user.markModified(field); // 🔥 Important for Mongoose to detect
console.log('currentValue:', user)

    logs.push({
      userId: user.id,
      updatedBy: user.id,
      field,
      oldValue,
      newValue: castedValue,
      updatedAt: new Date()
    });
  }
}


  // Photo change log
  if (photoUrl && user.photo !== photoUrl) {
    logs.push({
      userId: user.id,
      updatedBy: user.id,
      field: 'photo',
      oldValue: user.photo,
      newValue: photoUrl,
      updatedAt: new Date()
    })
    user.photo = photoUrl
    user.markModified('photo')
  }

  const modified = user.modifiedPaths()
  console.log('🛠️ Modified fields:', modified)

  if (modified.length > 0) {
    await user.save()
    if (logs.length > 0) {
      await UserUpdateLog.insertMany(logs)
    }
  }

  return {
    statusCode: 200,
    status: true,
    message: 'Profile updated successfully.',
    data: user
  }
})
