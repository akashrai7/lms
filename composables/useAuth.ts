import type { User } from '@/types/user';

export const useAuth = () => {
  const user = useState<User | null>('auth-user', () => null);

  const fetchUser = async () => {
    try {
      const res = await $fetch<{ user: User }>('/api/auth/me');
      user.value = res.user;
    } catch (error) {
      user.value = null;
    }
  };

  return { user, fetchUser };
};
