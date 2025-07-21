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

  if (!token.value && !publicPages.includes(to.path)) {
    return navigateTo('/authentication/login');
  }
});
