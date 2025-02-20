import {create} from 'zustand';

interface User {
  id: string | null;
  email: string | null;
  national_id: string | null;
}

interface AuthState {
  user: User | null;
  tokens: {
    access_token: string | null;
    refresh_token: string | null;
  };
  isAuthenticated: boolean;
  login: (userData: User, tokens: { access_token: string; refresh_token: string }) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  tokens: {
    access_token: null,
    refresh_token: null,
  },
  isAuthenticated: false,
  login: (userData, tokens) => {
    set({
      user: userData,
      tokens: tokens,
      isAuthenticated: true,
    });
  },
  logout: () => set({
    user: null,
    tokens: {
      access_token: null,
      refresh_token: null,
    },
    isAuthenticated: false,
  }),
}));

export default useAuthStore;
