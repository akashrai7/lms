import { getCookie, H3Event, createError } from 'h3';
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event: H3Event) => {
 
  const url = event.node.req.url || '';

  // ✅ Apply only on API routes
  if (!url.startsWith('/api/')) return;
  
  const publicRoutes = [
    '/api/auth/login',
    '/api/auth/register',
    '/api/auth/forget-password',
    '/api/auth/reset-password',
  ];

  
  if (publicRoutes.some(route => url.startsWith(route))) return;

  const config = useRuntimeConfig();
  const secret = config.jwtSecret;

  const token =
    getCookie(event, 'token') ||
    event.headers.get('authorization')?.replace('Bearer ', '');

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: No token provided, server/middleware/auth.ts',
    });
  }

  try {
    const decoded = jwt.verify(token, secret);
    event.context.user = decoded;
  } catch (err) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: Invalid token',
    });
  }
});
