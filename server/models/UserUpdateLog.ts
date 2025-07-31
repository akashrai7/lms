import mongoose from 'mongoose';

const userUpdateLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  field: { type: String, required: true },
  oldValue: { type: mongoose.Schema.Types.Mixed },
  newValue: { type: mongoose.Schema.Types.Mixed },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.UserUpdateLog || mongoose.model('UserUpdateLog', userUpdateLogSchema);
