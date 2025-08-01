import mongoose from 'mongoose';

const trainingModeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  add_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.models.TrainingMode || mongoose.model('TrainingMode', trainingModeSchema);
