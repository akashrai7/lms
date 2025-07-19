
export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token');

  // if (to.path.startsWith('/dashboard') && !token.value) {
  //   return navigateTo('/authentication/login');
  // }
});


