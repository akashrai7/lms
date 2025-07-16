import connectDB from '@/server/utils/db';
import User from '@/server/models/User';

export default defineEventHandler(async (event) => {
  await connectDB();
  const authUser = event.context.auth;

  if (!authUser) {
    return { status: 401, message: 'Unauthorized' };
  }

  const user = await User.findById(authUser.id);
  if (!user) {
    return { status: 404, message: 'User not found' };
  }

  // Only for student, reset deviceId
  if (user.role === 'student') {
    user.deviceId = null;
    await user.save();
  }

  return {
    status: 200,
    message: 'Logout successful. Token should be deleted from client.'
  };
});
