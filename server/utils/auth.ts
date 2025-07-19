import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';

export function generateToken(payload: any): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

// // server/utils/auth.ts
// import jwt from 'jsonwebtoken';

// const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';

// export const verifyToken = (token: string) => {
//   try {
//     return jwt.verify(token, JWT_SECRET);
//   } catch (err) {
//     return null;
//   }
// };
