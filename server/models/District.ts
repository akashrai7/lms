import mongoose from 'mongoose';

const districtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stateCode: { type: String, required: true }, // link to State via code
}, { timestamps: true });

export default mongoose.models.District || mongoose.model('District', districtSchema);
