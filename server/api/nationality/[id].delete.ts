import Nationality from '~/server/models/Nationality';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async (event) => {
  await connectDB();
  const id = event.context.params?.id;

if (!id) {
  return {
    statusCode: 400,
    body: {
      status: false,
      message: "Nationality ID is required in URL",
    },
  };
}
  await Nationality.findByIdAndDelete(id);
  return { status: true, message: "Deleted" };
});
