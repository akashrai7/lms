// types/Institute.ts
export interface IInstitute {
  _id?: string;
  instituteName: string;
  instituteId: string;
  typeOfInstitute: string;
  affiliationBoard: string;
  principalName: string;
  officialMobile: string;
  alternateMobile?: string;
  officialEmail: string;
  landline?: string;
  website?: string;
  address: string;
  city: string;
  state: string;
  district: string;
  pincode: string;
  trainingMode: string;
  trainingLanguage: string;
  computerLabAvailable: boolean;
  createdBy: string;
}
