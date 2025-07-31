export interface UserUpdateLog {
  _id: string;
  userId: string;
  updatedBy: string;
  field: string;
  oldValue: any;
  newValue: any;
  updatedAt: string;
}
