// ~/stores/user.ts
import { defineStore } from 'pinia';

export interface User {
  _id: string;
  firstName: string;
  email: string;
}

export const useUserStore = defineStore('user', {
  state: (): { user: User | null } => ({
    user: null,
  }),
  actions: {
    setUser(userData: User) {
      this.user = userData;
    },
    clearUser() {
      this.user = null;
    },
  },
});
