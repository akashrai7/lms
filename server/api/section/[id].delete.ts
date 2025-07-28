import Section from '~/server/models/Section';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async (event) => {
  await connectDB();
  const id = event.context.params?.id;

if (!id) {
  return {
    statusCode: 400,
    body: {
      status: false,
      message: "Section ID is required in URL",
    },
  };
}
  await Section.findByIdAndDelete(id);
  return { status: true, message: "Deleted" };
});
