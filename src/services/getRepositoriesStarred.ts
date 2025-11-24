import { githubClient } from "@/config/apiConfig";
import { AppEndpoints } from "@/constants/endpoints";
import type { GitHubRepository } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export const useGetUserStarredRepositories = (userName?: string | null) => {
  return useQuery<GitHubRepository[], Error>({
    queryKey: [AppEndpoints.USER, "starred", userName],
    queryFn: async () => {
      const response = await githubClient.get(
        `${AppEndpoints.USER}/${userName}/starred`
      );
      return response.data;
    },
    enabled: !!userName,
  });
};
