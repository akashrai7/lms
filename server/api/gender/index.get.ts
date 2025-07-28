import Gender from '~/server/models/Gender';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async () => {
  await connectDB();
  const types = await Gender.find().populate('add_by', 'firstName email');
  return { status: true, data: types };
});
