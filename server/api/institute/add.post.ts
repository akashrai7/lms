import { defineEventHandler, readBody, getQuery, getRouterParam } from 'h3';
import connectDB from '@/server/utils/db';
import Institute from '@/server/models/Institute';
import { verifyToken } from '@/server/utils/auth';

export default defineEventHandler(async (event) => {
  await connectDB();
  const user = await verifyToken(event);

  if (!user) {
    return {
      statusCode: 401,
      statusMessage: 'Unauthorized',
    };
  }

  const body = await readBody(event);

  const newInstitute = new Institute({
    ...body,
    createdBy: user._id,
  });

  await newInstitute.save();

  return {
    status: true,
    message: 'Institute added successfully',
  };
});
