import { defineEventHandler, getRouterParam } from 'h3'
import Course from '@/server/models/course.model'
import connectDB from '@/server/utils/db'
import mongoose from 'mongoose'

export default defineEventHandler(async (event) => {
  await connectDB()

  const id = getRouterParam(event, 'id')
//  console.log('id',id)
  if (!id) {
    return {
      success: false,
      message: 'Course ID is required',
      course: null,
    }
  }
  try {
   // const course = await Course.findOne({ _id: new mongoose.Types.ObjectId(id) })
   // const course = await Course.findOne({ _id: id })
     const course = await Course.find();
  //  console.log('course: ',course)

    if (!course) {
      return {
        success: false,
        message: 'Course not found',
        course: null,
      }
    }

    return {
      success: true,
      message: 'Course fetched successfully',
      course,
    }
  } catch (err) {
    return {
      success: false,
      message: 'Something went wrong',
      course: null,
    }
  }
})
