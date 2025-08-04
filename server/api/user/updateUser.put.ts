import { defineEventHandler, readBody, getCookie } from 'h3';
import connectDB from '@/server/utils/db';
import User from '@/server/models/User';
import { verifyToken } from '@/server/utils/auth';

export default defineEventHandler(async (event) => {
  await connectDB();

  const token = getCookie(event, 'token');
  if (!token) {
    return {
      status: false,
      message: 'Unauthorized',
      statusCode: 401,
    };
  }

  const currentUser = await verifyToken(event);
  if (!currentUser?._id) {
    return {
      status: false,
      message: 'Invalid token',
      statusCode: 401,
    };
  }

  const body = await readBody(event);

  const allowedFields = [
    'firstName', 'lastName', 'email', 'mobile', 'nationality', 'aadhaar', 'fatherName',
    'motherName', 'guardianName', 'guardianContact', 'bloodGroup', 'category', 'disability',
    'address', 'state', 'district', 'pinCode', 'dob', 'gender'
  ];

  const updateData: any = {};
  for (const field of allowedFields) {
    if (body[field] !== undefined) {
      updateData[field] = body[field];
    }
  }

  const updatedUser = await User.findByIdAndUpdate(currentUser._id, updateData, {
    new: true,
  });

  if (!updatedUser) {
    return {
      status: false,
      message: 'User not found',
      statusCode: 404,
    };
  }

  return {
    status: true,
    message: 'Profile updated successfully',
    statusCode: 200,
    data: updatedUser,
  };
});
