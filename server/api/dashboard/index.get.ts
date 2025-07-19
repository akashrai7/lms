// server/api/dashboard/data.ts
import { defineEventHandler, getHeader, createError, sendError } from 'h3'
import { verifyToken } from '@/server/utils/auth'
import verifyTokenMiddleware from '@/server/middleware/auth';

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, 'authorization')
   await verifyTokenMiddleware(event); 
   
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized: No token provided api/dashboard/index.get.ts' }))
  }

  const token = authHeader.split(' ')[1]
  const decoded = verifyToken(token)

  if (!decoded) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized: Invalid token api/dashboard/index.get.ts' }))
  }

  // Sample protected data
  return {
    message: 'Welcome to your dashboard!',
    user: decoded,
  }
})
