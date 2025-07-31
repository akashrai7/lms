// server/api/settings/district.get.ts
import { defineEventHandler, getQuery } from 'h3';
import connectDB from '@/server/utils/db';
import District from '@/server/models/District';

export default defineEventHandler(async (event) => {
  await connectDB();
  const { stateId } = getQuery(event);

  if (!stateId) {
    return { success: false, message: 'stateId is required' };
  }

  const districts = await District.find({ stateId }, { _id: 1, name: 1, id: 1 });
  return {
    success: true,
    data: districts,
  };
});
