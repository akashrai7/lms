// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName:  { type: String, required: true },
//   mobile:    { type: String, required: true },
//   email:     { type: String, required: true, unique: true },
//   password:  { type: String, required: true },
//   dob:       { type: Date, required: true },
//   role:      { type: String, enum: ['student', 'teacher', 'admin'], required: true },
//   registrationId: { type: String, unique: true }, // Auto-generated
//   lastPasswordChangedAt: { type: Date, default: null },
//   deviceId:   { type: String, default: null }
// }, { timestamps: true });

// export default mongoose.models.User || mongoose.model('User', userSchema);


import mongoose from 'mongoose';

const updateHistorySchema = new mongoose.Schema({
  field: String,
  oldValue: mongoose.Schema.Types.Mixed,
  newValue: mongoose.Schema.Types.Mixed,
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { _id: false });

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
  deviceId:   { type: String, default: null },

  // Additional Profile Fields
  gender:      { type: String, default: null },
  bloodGroup:  { type: String, default: null },
  nationality: { type: String, default: null },
  aadhaar:     { type: String, default: null },
  country:  { type: String, default: 'India' },
  state:    { type: String, default: null },
  district: { type: String, default: null },

  // Track History
  updateHistory: {
    type: [updateHistorySchema],
    default: []
  }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);
