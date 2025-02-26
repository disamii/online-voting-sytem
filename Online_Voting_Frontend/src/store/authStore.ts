import { create } from 'zustand';
import {User} from "@/types/interfaces"


interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (userData: User) => void; 
  logout: () => void; 
  
}

// Create the Zustand store
const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  


  // Method to set user data
  setUser: (userData: User) => set(() => ({
    user: userData,
    isAuthenticated:true
  })),

  // Logout method to reset the state
  logout: () =>{ set(() => ({
    user: null,
    isAuthenticated: false,
  })),
  localStorage.clear();
  }
  
}));

export default useAuthStore;
