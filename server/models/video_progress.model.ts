import mongoose from 'mongoose'
const { Schema, model, models } = mongoose

export interface VideoProgressDocument extends mongoose.Document {
  studentId: mongoose.Types.ObjectId
  courseId: mongoose.Types.ObjectId
  videoId: mongoose.Types.ObjectId
  watchedAt: Date
  status: 'completed' | 'in-progress'
  createdAt: Date
  updatedAt: Date
}

const videoProgressSchema = new Schema<VideoProgressDocument>(
  {
    studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    videoId: { type: Schema.Types.ObjectId, required: true },
    watchedAt: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ['completed', 'in-progress'],
      default: 'in-progress',
    },
  },
  { timestamps: true }
)

export default models.VideoProgress || model<VideoProgressDocument>('VideoProgress', videoProgressSchema)
