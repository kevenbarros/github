import type { GitHubProfile } from "@/types/github";
import { create } from "zustand";

interface ProfileState {
  userInfo?: GitHubProfile | null;
  setUserInfo: (userInfo?: GitHubProfile | null) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
}));
