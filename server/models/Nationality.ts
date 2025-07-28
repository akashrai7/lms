import mongoose from 'mongoose';

const nationalitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  add_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.models.Nationality || mongoose.model('Nationality', nationalitySchema);
