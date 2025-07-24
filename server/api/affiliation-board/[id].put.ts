import AffiliationBoard from '~/server/models/affiliationBoard';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async (event) => {
  await connectDB();

  const id = event.context.params?.id;

if (!id) {
  return {
    statusCode: 400,
    body: {
      status: false,
      message: "Affiliation ID is required in URL",
    },
  };
}

const body = await readBody(event);

  const updated = await AffiliationBoard.findByIdAndUpdate(id, { name: body.name }, { new: true });
  return { status: true, message: "Updated", data: updated };
});
