import Course from '~/server/models/course.model'
import connectDB from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  await connectDB()

  const body = await readBody(event)

  const course = await Course.create(body)
  return { success: true, course }
})
