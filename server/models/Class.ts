import mongoose from 'mongoose';

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdBy: { type: String, required: true }
});

export default mongoose.model('Class', ClassSchema);
