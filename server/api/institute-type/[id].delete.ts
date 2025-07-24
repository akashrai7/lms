import InstituteType from '~/server/models/InstituteType';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async (event) => {
  await connectDB();
  const id = event.context.params?.id;

if (!id) {
  return {
    statusCode: 400,
    body: {
      status: false,
      message: "Institute ID is required in URL",
    },
  };
}
  await InstituteType.findByIdAndDelete(id);
  return { status: true, message: "Deleted" };
});
