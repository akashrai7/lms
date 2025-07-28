import Stream from '~/server/models/Stream';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async () => {
  await connectDB();
  const types = await Stream.find().populate('add_by', 'firstName email');
  return { status: true, data: types };
});
