import { defineEventHandler, getRouterParam } from 'h3'
import Course from '@/server/models/course.model'
import connectDB from '@/server/utils/db'

export default defineEventHandler(async (event) => {
  await connectDB()

  const id = getRouterParam(event, 'id')
  if (!id) {
    return {
      success: false,
      message: 'Course ID is required',
      course: null,
    }
  }

  try {
    const course = await Course.findById(id)

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
