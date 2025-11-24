import type { GitHubRepository } from "@/types/github";
import { create } from "zustand";

interface RepositoryState {
  repositoryInfo?: GitHubRepository[] | null;
  starredRepositories?: GitHubRepository[] | null;
  setRepositoryInfo: (repositoryInfo?: GitHubRepository[] | null) => void;
  setStarredRepositories: (
    starredRepositories?: GitHubRepository[] | null
  ) => void;
}

export const useRepositoryStore = create<RepositoryState>((set) => ({
  repositoryInfo: null,
  starredRepositories: null,
  setRepositoryInfo: (repositoryInfo) => set({ repositoryInfo }),
  setStarredRepositories: (starredRepositories) => set({ starredRepositories }),
}));
