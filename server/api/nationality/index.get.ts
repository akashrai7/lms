import Nationality from '~/server/models/Nationality';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async () => {
  await connectDB();
  const types = await Nationality.find().populate('add_by', 'firstName email');
  return { status: true, data: types };
});
