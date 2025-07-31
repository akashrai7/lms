// // ~/server/utils/getUserFromEvent.ts
// import { H3Event, getRequestHeader } from 'h3';
// import { verifyToken } from './auth';

// export function getUserFromEvent(event: H3Event) {
//   const token = getRequestHeader(event, 'authorization')?.replace('Bearer ', '');
//   if (!token) return null;
//   try {
//     return verifyToken(token);
//   } catch {
//     return null;
//   }
// }

// ~/server/utils/getUserFromEvent.ts
import { H3Event } from 'h3';
import { verifyToken } from './auth';

export type AuthenticatedUser = {
  _id: string;
};

export async function getUserFromEvent(event: H3Event): Promise<AuthenticatedUser | null> {
  const user = await verifyToken(event);
  if (!user) return null;
  return user;
}
