import Category from '~/server/models/Category';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async () => {
  await connectDB();
  const types = await Category.find().populate('add_by', 'firstName email');
  return { status: true, data: types };
});
