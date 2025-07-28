import TrainingMode from '~/server/models/TrainingMode';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async (event) => {
  await connectDB();
  const id = event.context.params?.id;

if (!id) {
  return {
    statusCode: 400,
    body: {
      status: false,
      message: "Training Mode ID is required in URL",
    },
  };
}
  await TrainingMode.findByIdAndDelete(id);
  return { status: true, message: "Deleted" };
});
