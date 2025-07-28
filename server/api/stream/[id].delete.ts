import Stream from '~/server/models/Stream';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async (event) => {
  await connectDB();
  const id = event.context.params?.id;

if (!id) {
  return {
    statusCode: 400,
    body: {
      status: false,
      message: "Stream ID is required in URL",
    },
  };
}
  await Stream.findByIdAndDelete(id);
  return { status: true, message: "Deleted" };
});
