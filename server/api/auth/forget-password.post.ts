import { defineEventHandler, readBody } from 'h3';
import connectDB from '@/server/utils/db';
import User from '@/server/models/User';
import { verifyToken } from '@/server/utils/auth';
import bcrypt from 'bcryptjs';

export default defineEventHandler(async (ctx) => {
  await connectDB();
  const { token, newPassword } = await readBody(ctx);

  if (!token || !newPassword) return { status: 400, message: 'Token and new password required' };

  const decoded = verifyToken(token);
  if (!decoded || !decoded.id) return { status: 401, message: 'Invalid or expired token' };

  const user = await User.findById(decoded.id);
  if (!user) return { status: 404, message: 'User not found' };

  user.password = await bcrypt.hash(newPassword, 10);
  user.lastPasswordChangedAt = new Date();

  if (user.role === 'student') user.deviceId = null;

  await user.save();

  return { status: 200, message: 'Password reset successful.' };
});
