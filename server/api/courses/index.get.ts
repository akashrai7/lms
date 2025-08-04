
import Course from '~/server/models/course.model';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async () => {
  await connectDB();
  const types = await Course.find();
  return { status: true, data: types };
});
