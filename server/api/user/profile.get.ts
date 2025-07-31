import { defineEventHandler, getCookie } from 'h3'
import connectDB from '@/server/utils/db'
import User from '@/server/models/User'
import { verifyToken } from '@/server/utils/auth'

export default defineEventHandler(async (event) => {
  await connectDB()

  const token = getCookie(event, 'token')
  if (!token) {
    return {
      status: false,
      message: 'Unauthorized',
      statusCode: 401,
      data: null
    }
  }
// console.log('token : ', token);
 
  const decoded = await verifyToken(event)
if (!decoded) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Invalid token' }));
  }

  // const user = await User.findById((decoded as any).id).select('-password');
  // if (!user) {
  //   return sendError(event, createError({ statusCode: 404, statusMessage: 'User not found' }));
  // }


  // if (!currentUser || !currentUser._id) {
  // //  console.log('Invalid token detected.')
  //   return {
  //     status: false,
  //     message: 'Invalid token.',
  //     statusCode: 401,
  //     data: null
  //   }
  // }
   const currentUser = await verifyToken(event)
  //console.log('currentUser: ', currentUser);
 // const user = await User.findById(currentUser._id).lean()
 const user = await User.findById((decoded as any).id).select('-password');
  if (!user) {
    return {
      status: false,
      message: 'User not found',
      statusCode: 404,
      data: null
    }
  }

  return {
    status: true,
    message: 'User profile fetched successfully',
    data: user,
    statusCode: 200
  }
})
