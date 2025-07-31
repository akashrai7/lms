// import { getCookie, H3Event } from 'h3';
// import jwt from 'jsonwebtoken';

// const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';

// export function generateToken(payload: any): string {
//   return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
// }

// export const verifyToken = async (event: H3Event) => {
//   const token = getCookie(event, 'token');
//   if (!token) return null;

//   try {
//   //  const decoded = jwt.verify(token, process.env.JWT_SECRET || '');
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as { _id: string };
//     return decoded;
//   } catch (err) {
//     return null;
//   }
// };

/*
// ~/server/utils/auth.ts
import { getCookie, H3Event } from 'h3';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';

export function generateToken(payload: any): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export const verifyToken = async (event: H3Event): Promise<{ _id: string } | null> => {
  const token = getCookie(event, 'token');
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET || '') as { _id: string };
    return decoded;
 
  } catch (err) {
    return null;
  }
};
*/

// ~/server/utils/auth.ts
import { getCookie, H3Event } from 'h3';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';

// 🔐 Token बनाना
export function generateToken(payload: { _id: string; role: string; regId: string }): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

// 🔍 Token verify करना
export const verifyToken = async (event: H3Event): Promise<{ _id: string; role: string; regId: string } | null> => {
  const token = getCookie(event, 'token');
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { _id: string; role: string; regId: string };
    return decoded;
  } catch (err) {
    return null;
  }
};
