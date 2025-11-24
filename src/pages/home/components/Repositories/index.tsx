import { Book, Star } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Tabs } from "@/components/Tabs";
import type { TabItem } from "@/components/Tabs";
import { RepositoryCard } from "@/components/RepositoryCard";
import { FiltersRepositories } from "../Filters";
import { useRepositoryStore } from "@/stores/repositoryStore";

export const Repositories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "repositories";
  const { repositoryInfo, starredRepositories } = useRepositoryStore();
  const { t } = useTranslation();

  const tabs: TabItem[] = [
    {
      id: "repositories",
      label: t("repositories.title"),
      count: repositoryInfo?.length ?? 0,
      icon: <Book className="w-4 h-4" />,
      content: (
        <>
          <FiltersRepositories />
          {repositoryInfo?.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} starred />
          ))}
        </>
      ),
    },
    {
      id: "starred",
      label: t("repositories.starred"),
      count: starredRepositories?.length ?? 0,
      icon: <Star className="w-4 h-4" />,
      content: (
        <>
          {starredRepositories?.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} language />
          ))}
        </>
      ),
    },
  ];

  const handleTabChange = (tabId: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("tab", tabId);
    setSearchParams(newParams);
  };

  return (
    <div className="w-full col-span-2 max-w-4xl mx-auto p-4 md:p-6">
      <Tabs tabs={tabs} currentTab={currentTab} onTabChange={handleTabChange} />
    </div>
  );
};
