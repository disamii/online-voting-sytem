import { create } from 'zustand';
import {User,Token} from "@/types/interfaces"


interface AuthState {
  user: User | null;
  token: Token | null;
  isAuthenticated: boolean;
  setToken: (token: Token) => void; 
  setUser: (userData: User) => void; 
  logout: () => void; 
  
}

// Create the Zustand store
const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  
  // Method to set the token
  setToken: (token: Token) => set(() => ({
    token,
    isAuthenticated: true, // Assume authenticated once the token is set
  })),

  // Method to set user data
  setUser: (userData: User) => set(() => ({
    user: userData,
  })),

  // Logout method to reset the state
  logout: () => set(() => ({
    user: null,
    token: null,
    isAuthenticated: false,
  })),
}));

export default useAuthStore;
