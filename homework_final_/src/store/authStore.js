import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
    persist(
      (set) => ({
        isAuthenticated: false,
        user: null,
        setAuth: (user) => set({ user, isAuthenticated: true }),
        logout: () => set({ user: null, isAuthenticated: false }),
      }),
      {
        name: "auth-storage",
      },
    ),
  );