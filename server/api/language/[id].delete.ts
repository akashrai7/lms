import Language from '~/server/models/Language';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async (event) => {
  await connectDB();
  const id = event.context.params?.id;

if (!id) {
  return {
    statusCode: 400,
    body: {
      status: false,
      message: "Language ID is required in URL",
    },
  };
}
  await Language.findByIdAndDelete(id);
  return { status: true, message: "Deleted" };
});
