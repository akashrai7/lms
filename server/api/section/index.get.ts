import Section from '~/server/models/Section';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async () => {
  await connectDB();
  const types = await Section.find().populate('add_by', 'firstName email');
  return { status: true, data: types };
});
