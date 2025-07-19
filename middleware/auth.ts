// export default defineNuxtRouteMiddleware((to, from) => {
//   const token = process.client ? localStorage.getItem('token') : null;

//   if (!token) {
//     return navigateTo('/authentication/login');
//   }
// });

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, 'authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized: No token provided.akash' }))
  }

  const token = authHeader.split(' ')[1]
  const decoded = verifyToken(token)

  if (!decoded) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized: Invalid token middleware/auth.ts' }))
  }

  event.context.auth = decoded
})
