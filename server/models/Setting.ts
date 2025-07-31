import mongoose from 'mongoose';

const settingSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., gender, bloodGroup, nationality
  label: { type: String, required: true }, // e.g., "Male"
  value: { type: String, required: true }, // e.g., "male"
}, { timestamps: true });

export default mongoose.models.Setting || mongoose.model('Setting', settingSchema);
