import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null, 
  checkingAuth: false, 
  checkAuth: async () => {
    set({ checkingAuth: true }); 
    try {
     
      const response = await fetch("/api/auth/check"); 
      const data = await response.json();
      set({ user: data.user, checkingAuth: false }); 
    } catch (error) {
      console.error("Authentication failed:", error);
      set({ user: null, checkingAuth: false });
    }
  },
}));
