import { Header } from "@/components/Header";
import { Profile } from "./components/Profile";
import { Repositories } from "./components/Repositories";
import { useProfileStore } from "@/stores/profileStore";
import { useGetProfile } from "@/services/getProfile";
import { useEffect } from "react";
import { useGetUserRepositories } from "@/services/getRepositories";
import { useRepositoryStore } from "@/stores/repositoryStore";
import { useGetUserStarredRepositories } from "@/services/getRepositoriesStarred";
import { useSearchParams } from "react-router-dom";
import type { ProgrammingLanguage, RepositoryType } from "@/types/github";
import { useDebounce } from "@/hooks/useDebounce";
import { useIsMobile } from "@/hooks/useIsMobile";

export const Home = () => {
  const [searchParams] = useSearchParams();
  const user = searchParams.get("searchUser");
  const repositorySearch = searchParams.get("searchRepository");
  const type = searchParams.get("type") as RepositoryType;
  const language = searchParams.get("language") as ProgrammingLanguage;
  const userDebounced = useDebounce(user, 1000) || "kevenbarros";
  const repositorySearchDebounced = useDebounce(repositorySearch, 1000);
  const { data: profile } = useGetProfile({
    userName: userDebounced,
  });
  const { data: repositoriesData } = useGetUserRepositories({
    userName: userDebounced,
    type,
    language,
    search: repositorySearchDebounced,
  });

  const { data: starredRepositories } =
    useGetUserStarredRepositories(userDebounced);

  const { setUserInfo } = useProfileStore();
  const { setRepositoryInfo, setStarredRepositories } = useRepositoryStore();

  useEffect(() => {
    if (profile) {
      setUserInfo(profile);
    }
  }, [profile, setUserInfo]);

  useEffect(() => {
    if (repositoriesData) {
      setRepositoryInfo(repositoriesData);
    }
  }, [repositoriesData, setRepositoryInfo]);

  useEffect(() => {
    if (starredRepositories) {
      setStarredRepositories(starredRepositories);
    }
  }, [starredRepositories, setStarredRepositories]);

  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile && <Header />}
      <main className="max-w-7xl grid-cols-1 mx-auto py-6 px-4 sm:px-6 lg:px-8 grid md:grid-cols-3">
        <Profile />
        <Repositories />
      </main>
    </>
  );
};
