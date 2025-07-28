// export default defineNuxtRouteMiddleware((to, from) => {
//   const token = process.client ? localStorage.getItem('token') : null;

//   if (!token) {
//     return navigateTo('/authentication/login');
//   }
// });
// // 

// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
  const publicPages = [
    '/authentication/login',
    '/authentication/register',
    '/authentication/forget-password',
    '/authentication/reset-password',
  ];

  const token = useCookie('token');
  const userRole = useCookie('role');

  // Check for public pages
  if (!token.value && !publicPages.includes(to.path)) {
    // Force redirect for SSR also
    return navigateTo('/authentication/login');
  }

  // Role-based restrictions
  const adminPages = ['/dashboard/admin'];
  const teacherPages = ['/dashboard/teacher'];

  if (token.value) {
    if (adminPages.some((p) => to.path.startsWith(p)) && userRole.value !== 'admin') {
      return navigateTo('/dashboard');
    }
    if (teacherPages.some((p) => to.path.startsWith(p)) && userRole.value !== 'teacher') {
      return navigateTo('/dashboard');
    }
  }
});
