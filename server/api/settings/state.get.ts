// server/api/settings/state.get.ts
import { defineEventHandler } from 'h3';
import connectDB from '@/server/utils/db';
import State from '@/server/models/State';

export default defineEventHandler(async () => {
  await connectDB();
  const states = await State.find({}, { _id: 1, name: 1, id: 1 });
  return {
    success: true,
    data: states,
  };
});
