import { githubClient } from "@/config/apiConfig";
import { AppEndpoints } from "@/constants/endpoints";
import type { GitHubProfile } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = ({ userName }: { userName?: string | null }) => {
  return useQuery<GitHubProfile, Error>({
    queryKey: [AppEndpoints.USER, "profile", userName],
    queryFn: async () => {
      const response = await githubClient.get(
        `${AppEndpoints.USER}/${userName}`
      );
      return response.data;
    },
    enabled: !!userName,
  });
};
