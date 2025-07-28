import Gender from '~/server/models/Gender';
import connectDB from '~/server/utils/db';
import { getUserFromEvent  } from '~/server/utils/getUserFromEvent';

export default defineEventHandler(async (event) => {
  await connectDB();
  const body = await readBody(event);
  const user = await getUserFromEvent(event);

  if (!body.name) return { status: false, message: "Name is required" };

  const newType = await Gender.create({
    name: body.name,
    add_by: user._id,
  });

  return { status: true, message: "Gender Added", data: newType };
});
