import connectDB from '@/server/utils/db'
import User from '@/server/models/User'

export default defineEventHandler(async (event) => {
  await connectDB()
  const authUser = event.context.auth

  if (!authUser) {
    return { status: 401, message: 'Unauthorized' }
  }

  const user = await User.findById(authUser.id).select('-password')
  return {
    status: 200,
    user
  }
})
