import { githubClient } from "@/config/apiConfig";
import { AppEndpoints } from "@/constants/endpoints";
import type { GitHubRepository, RepositoryType } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export const useGetUserRepositories = ({
  userName,
  type = "all",
  language,
  search,
}: {
  userName?: string | null;
  type?: RepositoryType;
  language?: string;
  search?: string | null;
}) => {
  return useQuery<GitHubRepository[], Error>({
    queryKey: [
      AppEndpoints.USER,
      "repositories",
      userName,
      type,
      language,
      search,
    ],
    queryFn: async () => {
      const queryParts = [`user:${userName}`];

      if (language && language !== "all") {
        queryParts.push(`language:${language}`);
      }

      if (search && search.trim()) {
        queryParts.push(search.trim());
      }

      if (type && type !== "all") {
        switch (type) {
          case "forks":
            queryParts.push("fork:true");
            break;
          case "sources":
            queryParts.push("fork:false", "mirror:false", "archived:false");
            break;
          case "archived":
            queryParts.push("archived:true");
            break;
          case "mirrors":
            queryParts.push("mirror:true");
            break;
        }
      }

      const query = queryParts.join(" ");

      const response = await githubClient.get(`${AppEndpoints.REPOSITORIES}`, {
        params: {
          q: query,
        },
      });

      return response.data.items || response.data;
    },
    enabled: !!userName,
  });
};
