import type { GitHubRepository } from "@/types/github";
import { GitFork, Star } from "lucide-react";

export const RepositoryCard = ({
  repo,
  starred = false,
  language = false,
}: {
  repo?: GitHubRepository | null;
  starred?: boolean;
  language?: boolean;
}) => (
  <div className="p-4 hover:bg-gray-50 transition-colors">
    <div className="flex items-start justify-between mb-2">
      <h3 className="font-semibold  hover:underline cursor-pointer">
        {repo?.name} / <span className="text-blue-600">{repo?.name}</span>
      </h3>
    </div>

    {repo?.description && (
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {repo.description}
      </p>
    )}

    <div className="flex items-center gap-6 text-sm text-gray-500">
      {language && (
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>{repo?.language ?? "---"}</span>
        </div>
      )}

      {starred && (
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          <span>{repo?.stargazers_count}</span>
        </div>
      )}

      <div className="flex items-center gap-1">
        <GitFork className="w-4 h-4" />
        <span>{repo?.forks}</span>
      </div>
    </div>
  </div>
);
