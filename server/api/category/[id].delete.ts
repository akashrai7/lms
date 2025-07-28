import Category from '~/server/models/Category';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async (event) => {
  await connectDB();
  const id = event.context.params?.id;

if (!id) {
  return {
    statusCode: 400,
    body: {
      status: false,
      message: "Category ID is required in URL",
    },
  };
}
  await Category.findByIdAndDelete(id);
  return { status: true, message: "Deleted" };
});
