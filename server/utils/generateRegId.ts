import User from '../models/User';

export async function generateRegId(role: string): Promise<string> {
  const year = new Date().getFullYear().toString().slice(-2); // "25"
  const prefix = role === 'teacher' ? 'TEA' : 'STU';

  const count = await User.countDocuments({ role });
  const nextId = (count + 1).toString().padStart(4, '0'); // "0001"

  return `${year}${prefix}${nextId}`; // e.g. "25STU0001"
}
