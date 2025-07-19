import { defineEventHandler, readBody } from 'h3';
import connectDB from '@/server/utils/db';
import User from '@/server/models/User';
import bcrypt from 'bcryptjs';
import { generateToken } from '@/server/utils/auth';

export default defineEventHandler(async (e) => {
  await connectDB();
  const body = await readBody(e);
  const { email, password, deviceId } = body;



  if (!email || !password || !deviceId) {
    return { status: 400, message: 'All fields are required' };
  }

  const user = await User.findOne({ email });
  if (!user) {
    return { status: 401, message: 'Invalid credentials' };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { status: 401, message: 'Invalid password' };
  }

  // Only one device login for student
  // if (user.role === 'student' && user.deviceId && user.deviceId !== deviceId) {
  //   return { status: 403, message: 'This student is already logged in on another device' };
  // }

  // Update deviceId for student
  if (user.role === 'student') {
    user.deviceId = deviceId;
    await user.save();
  }

  const token = generateToken({
    id: user._id,
    role: user.role,
    regId: user.registrationId,
  });

 setCookie(e, 'token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  });

  return {
    status: 200,
    message: 'Login successful',
    token,
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      registrationId: user.registrationId,
    }
  };
});
