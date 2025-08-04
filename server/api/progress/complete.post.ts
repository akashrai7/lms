import VideoProgress from '~/server/models/video_progress.model'
import connectDB from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  await connectDB()

  const body = await readBody(event)
  const { studentId, courseId, videoId } = body

  // Update if exists, otherwise create
  const progress = await VideoProgress.findOneAndUpdate(
    { studentId, courseId, videoId },
    {
      status: 'completed',
      watchedAt: new Date(),
    },
    { upsert: true, new: true }
  )

  return { success: true, data: progress }
})
