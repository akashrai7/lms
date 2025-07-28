import BloodGroup from '~/server/models/BloodGroup';
import connectDB from '~/server/utils/db';

export default defineEventHandler(async (event) => {
  await connectDB();
  const id = event.context.params?.id;

if (!id) {
  return {
    statusCode: 400,
    body: {
      status: false,
      message: "BloodGroup ID is required in URL",
    },
  };
}
  await BloodGroup.findByIdAndDelete(id);
  return { status: true, message: "Deleted" };
});
