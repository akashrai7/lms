import { defineEventHandler, readBody, getQuery, getRouterParam } from 'h3';
import connectDB from '@/server/utils/db';
import Institute from '@/server/models/Institute';
import { verifyToken } from '@/server/utils/auth';

export default defineEventHandler(async (event) => {
  await connectDB();
  await verifyToken(event);

  const id = getRouterParam(event, 'id');
  const body = await readBody(event);

  await Institute.findByIdAndUpdate(id, body);

  return {
    status: true,
    message: 'Institute updated successfully',
  };
});
