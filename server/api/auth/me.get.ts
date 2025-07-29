import { defineEventHandler } from 'h3';
import { getCookie, createError, sendError } from 'h3';
import { verifyToken } from '@/server/utils/auth';
import User from '@/server/models/User';
import connectDB from '@/server/utils/db';

export default defineEventHandler(async (event) => {
  await connectDB();

  const token = getCookie(event, 'token');
  if (!token) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'No token' }));
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Invalid token' }));
  }

  const user = await User.findById(decoded.id).select('-password');
  if (!user) {
    return sendError(event, createError({ statusCode: 404, statusMessage: 'User not found' }));
  }

  return {
    user,
  };
});
