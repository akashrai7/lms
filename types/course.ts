export interface Video {
  _id?: string
  title: string
  videoUrl: string
  poster?: string
}

export interface Course {
  _id: string
  name: string
  description: string
  thumbnail?: string
  videos: Video[]
  createdAt?: string
  updatedAt?: string
}
