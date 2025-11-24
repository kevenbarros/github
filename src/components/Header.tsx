import LogoGitHub from "@/assets/logoGithub.svg";
import { Input } from "./ui/input";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="w-full bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img className="w-6" src={LogoGitHub} alt="GitHub Explorer Logo" />
            <div className="flex items-center gap-6 text-white">
              <h1 className="text-3xl font-bold tracking-tight">{t("header.title")}</h1>
              <span className="text-2xl font-bold">/</span>
              <p className="text-white">{t("header.subtitle")}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Input
              type="text"
              searchParam="searchUser"
              placeholder={t("header.searchPlaceholder")}
              className="w-64 bg-amber-50"
            />
            <button className="bg-amber-50 p-2 rounded-md">{t("header.searchButton")}</button>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
