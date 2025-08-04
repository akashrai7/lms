import mongoose from 'mongoose'
const { Schema, model, models } = mongoose

interface Video {
  _id?: string
  title: string
  videoUrl: string
  poster?: string
}

interface CourseDocument extends mongoose.Document {
  name: string
  description: string
  thumbnail?: string
  videos: Video[]
  createdAt: Date
  updatedAt: Date
}

const videoSchema = new Schema<Video>(
  {
    title: { type: String, required: true },
    videoUrl: { type: String, required: true },
    poster: { type: String },
  },
  { _id: true }
)

const courseSchema = new Schema<CourseDocument>(
  {
    name: { type: String, required: true },
    description: { type: String },
    thumbnail: { type: String },
    videos: [videoSchema],
  },
  { timestamps: true }
)

export default models.Course || model<CourseDocument>('Course', courseSchema)
