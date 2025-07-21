import { H3Event, createError, sendError, getCookie  } from 'h3';
import { verifyToken } from '@/server/utils/auth';

export default defineEventHandler(async (event: H3Event) => {
  const publicRoutes = [
    '/api/auth/register',
    '/api/auth/login',
    '/api/auth/forget-password',
    '/api/auth/reset-password',
    '/api/auth/logout',
    '/authentication/register',
    '/authentication/login',
    '/authentication/forget-password',
    '/authentication/reset-password'
  ];

  const currentUrl = event.node.req.url || '';

  // If route is public, skip token verification
  if (publicRoutes.some(route => currentUrl.startsWith(route))) {
    return;
  }

  const token = getCookie(event, 'token');
  
 if (!token) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized: No token provided' }));
  }
  //  const token = authHeader.split(' ')[1];
   const decoded = verifyToken(token);

  if (!decoded) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized: Invalid token' }));
  }

  // Attach user info to event
  event.context.auth = decoded;
});
