import Section from '~/server/models/Section';
import connectDB from '~/server/utils/db';
import { getUserFromEvent  } from '~/server/utils/getUserFromEvent';

export default defineEventHandler(async (event) => {
  await connectDB();
  const body = await readBody(event);
  const user = await getUserFromEvent(event);

  if (!body.name) return { status: false, message: "Name is required" };

  const newType = await Section.create({
    name: body.name,
    add_by: user._id,
  });

  return { status: true, message: "Section Added", data: newType };
});
