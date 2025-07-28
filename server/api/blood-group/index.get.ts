import BloodGroup from '~/server/models/BloodGroup';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async () => {
  await connectDB();
  const types = await BloodGroup.find().populate('add_by', 'firstName email');
  return { status: true, data: types };
});
