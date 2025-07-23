import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';

export function generateToken(payload: any): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): any {
  try {
     const decoded = jwt.verify(token, JWT_SECRET)
    return decoded
  } catch (error) {
    throw new Error('Invalid or expired token')
  }
}

