import Class from '~/server/models/Class';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async (event) => {
  await connectDB();
  const id = event.context.params?.id;

if (!id) {
  return {
    statusCode: 400,
    body: {
      status: false,
      message: "Class ID is required in URL",
    },
  };
}
  await Class.findByIdAndDelete(id);
  return { status: true, message: "Deleted" };
});
