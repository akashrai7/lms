// export interface User {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   role: string;
//   registrationId: string;
//   dob: Date;
//   mobile: string;
//   district: string;
//   state: string;
//   address: string;
//   city: string;
//   pincode: string;
  
// }

export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  fatherName: string;
  motherName: string;
  guardianName: string;
  guardianContact: string;
  disability: string;
  password?: string; // optional in frontend
  dob: string; // formatted as ISO string or yyyy-mm-dd
  role: UserRole;
  registrationId: string;
  lastPasswordChangedAt?: string | null;
  deviceId?: string | null;
  aadhaar?: string | null;
  gender?: string | null;
  bloodGroup?: string | null;
  nationality?: string | null;
  country: 'India';
  state?: string | null;
  district?: string | null;
  schoolName: string;
  bio: string;
  photo: File | null;
  createdAt?: string;
  updatedAt?: string;
}


