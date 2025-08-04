import mongoose from 'mongoose';

const instituteSchema = new mongoose.Schema(
  {
    instituteName: { type: String, required: true },
    instituteId: { type: String, required: true, unique: true },
    typeOfInstitute: { type: mongoose.Schema.Types.ObjectId, ref: 'InstituteType', required: true },
    affiliationBoard: { type: mongoose.Schema.Types.ObjectId, ref: 'AffiliationBoard', required: true },
    principalName: { type: String, required: true },
    officialMobile: { type: String, required: true },
    alternateMobile: { type: String },
    officialEmail: { type: String, required: true },
    landline: { type: String },
    website: { type: String },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: mongoose.Schema.Types.ObjectId, ref: 'State', required: true },
    district: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true },
    pincode: { type: String, required: true },
    trainingMode: { type: mongoose.Schema.Types.ObjectId, ref: 'TrainingMode', required: true },
    trainingLanguage: { type: mongoose.Schema.Types.ObjectId, ref: 'Language', required: true },
    computerLabAvailable: { type: Boolean, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Institute || mongoose.model('Institute', instituteSchema);
