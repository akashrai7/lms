import { defineEventHandler, readBody } from 'h3';
import connectDB from '~/server/utils/db';
import { verifyToken } from '~/server/utils/auth';
import User from '~/server/models/User';
import UserUpdateLog from '~/server/models/UserUpdateLog'; // model to be created

export default defineEventHandler(async (event) => {
  await connectDB();
  const user = await verifyToken(event);
  if (!user) {
    return { statusCode: 401, message: 'Unauthorized' };
  }

  const body = await readBody(event);
  const existingUser = await User.findById(user._id);
  

  if (!existingUser) {
    return { statusCode: 404, message: 'User not found' };
  }

  const updateFields = [
    'firstName', 'lastName', 'mobile', 'email', 'dob', 'aadhaar',
    'gender', 'bloodGroup', 'nationality', 'state', 'district'
  ];

  const logs = [];

  for (const field of updateFields) {
    if (body[field] && existingUser[field] !== body[field]) {
      logs.push({
        userId: existingUser._id,
        updatedBy: existingUser._id,
        field,
        oldValue: existingUser[field] || null,
        newValue: body[field],
        updatedAt: new Date()
      });

      existingUser[field] = body[field];
    }
  }

  await existingUser.save();

  if (logs.length > 0) {
    await UserUpdateLog.insertMany(logs);
  }

  return { statusCode: 200, message: 'Profile updated successfully' };
});
