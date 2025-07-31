import mongoose from 'mongoose';

const stateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
}, { timestamps: true });

export default mongoose.models.State || mongoose.model('State', stateSchema);
