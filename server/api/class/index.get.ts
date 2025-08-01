import Class from '~/server/models/Class';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async () => {
  await connectDB();
  const types = await Class.find().populate('add_by', 'firstName email');
  return { status: true, data: types };
});
