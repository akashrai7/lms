import InstituteType from '~/server/models/InstituteType';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async () => {
  await connectDB();
  const types = await InstituteType.find().populate('add_by', 'firstName email');
  return { status: true, data: types };
});
