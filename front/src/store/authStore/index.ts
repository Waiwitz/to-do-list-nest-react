import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { User } from "./api";

interface AuthState {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user: User | null) => set({ user }),
      setToken: (token: string | null) => set({ token }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token }), // only persist the token
    }
  )
);
