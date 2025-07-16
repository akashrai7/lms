import mongoose from 'mongoose';

export default async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URI || '', {
      dbName: 'lms',
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}
