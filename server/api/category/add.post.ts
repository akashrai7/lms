import Category from '~/server/models/Category';
import connectDB from '~/server/utils/db';
import { getUserFromEvent  } from '~/server/utils/getUserFromEvent';

export default defineEventHandler(async (event) => {
  await connectDB();
  const body = await readBody(event);
  const user = await getUserFromEvent(event);

  if (!body.name) return { status: false, message: "Name is required" };

  const newType = await Category.create({
    name: body.name,
    add_by: user._id,
  });

  return { status: true, message: "Category Added", data: newType };
});
