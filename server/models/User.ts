import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  mobile:    { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  dob:       { type: Date, required: true },
  role:      { type: String, enum: ['student', 'teacher', 'admin'], required: true },
  registrationId: { type: String, unique: true }, // Auto-generated
  lastPasswordChangedAt: { type: Date, default: null },
  deviceId:   { type: String, default: null }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);
