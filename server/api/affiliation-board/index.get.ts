import AffiliationBoard from '~/server/models/affiliationBoard';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async () => {
  await connectDB();
  const types = await AffiliationBoard.find().populate('add_by', 'firstName email');
  return { status: true, data: types };
});
