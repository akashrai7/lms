import Language from '~/server/models/Language';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async () => {
  await connectDB();
  const types = await Language.find().populate('add_by', 'firstName email');
  return { status: true, data: types };
});
