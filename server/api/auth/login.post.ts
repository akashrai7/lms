import { defineEventHandler, readBody, setCookie } from 'h3';
import connectDB from '@/server/utils/db';
import User from '@/server/models/User';
import bcrypt from 'bcryptjs';
import { generateToken } from '@/server/utils/auth';

export default defineEventHandler(async (e) => {
  await connectDB();
  const body = await readBody(e);
  const { email, password, deviceId } = body;

  // 1. Validation
  if (!email || !password || !deviceId) {
    return { status: 400, message: 'All fields are required' };
  }

  // 2. Find User
  const user = await User.findOne({ email });
  if (!user) {
    return { status: 401, message: 'Invalid credentials' };
  }

  // 3. Password Check
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { status: 401, message: 'Invalid password' };
  }

  // 4. Update Device ID for student
  if (user.role === 'student') {
    user.deviceId = deviceId;
    await user.save();
  }

  // 5. Generate JWT Token
  const token = generateToken({
    id: user._id,
    role: user.role,
    regId: user.registrationId,
  });

  // 6. Set Secure HTTP-only Token Cookie
  setCookie(e, 'token', token, {
    httpOnly: true, // secure
    secure: process.env.NODE_ENV === 'production', // only HTTPS in production
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  });

  // 7. Set Role Cookie (non-HTTP-only so middleware can read it)
  setCookie(e, 'role', user.role, {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24,
  });

  // 8. Response (no token in response body for security)
  return {
    status: 200,
    message: 'Login successful',
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      registrationId: user.registrationId,
    }
  };
});
