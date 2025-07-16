import { defineEventHandler, readBody, createError } from 'h3';
import connectDB from '@/server/utils/db';
import User from '@/server/models/User';
import bcrypt from 'bcryptjs';
import { generateRegId } from '@/server/utils/generateRegId';
import { sendCredentialsEmail } from '@/server/utils/mailer';

export default defineEventHandler(async (event) => {
  try {
    await connectDB();
    const body = await readBody(event);

    const { firstName, lastName, mobile, email, password, dob, role } = body;

    if (!firstName || !lastName || !mobile || !email || !password || !dob || !role) {
      throw createError({
        statusCode: 400,
        statusMessage: 'All fields are required',
      });
    }

    if (!['student', 'teacher'].includes(role)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid role',
      });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      throw createError({
        statusCode: 400,
        statusMessage: 'User already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const registrationId = await generateRegId(role);

    const user = await User.create({
      firstName,
      lastName,
      mobile,
      email,
      password: hashedPassword,
      dob,
      role,
      registrationId,
      lastPasswordChangedAt: new Date(),
    });

    await sendCredentialsEmail(email, firstName, registrationId, password);

    return {
      registrationId,
      message: 'Registration successful. Check your email.',
    };
  } catch (error) {
  if (error instanceof Error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Registration failed',
    });
  } else {
    throw createError({
      statusCode: 500,
      statusMessage: 'Unknown error',
    });
  }
}
});
