// composables/useLogout.ts
export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await $fetch('/api/auth/logout', { method: 'POST' });
    } finally {
      // client-side state भी साफ़ करें (अगर कोई हो)
      if (process.client) {
        localStorage.removeItem('token'); // आपने अब token localStorage में नहीं रखना चाहिए
      }
      await navigateTo('/authentication/login');
    }
  };

  return { logout };
};
