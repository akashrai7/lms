// ~/server/utils/getUserFromEvent.ts
import { H3Event, getRequestHeader } from 'h3';
import { verifyToken } from './auth';

export function getUserFromEvent(event: H3Event) {
  const token = getRequestHeader(event, 'authorization')?.replace('Bearer ', '');
  if (!token) return null;
  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}
