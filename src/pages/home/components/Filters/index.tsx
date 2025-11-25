import { SelectButton } from "@/components/SelectButton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

export const FiltersRepositories = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 py-4">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
          <Input
            type="text"
            searchParam="searchRepository"
            placeholder={t("repositories.searchPlaceholder")}
            className="w-full pl-10 pr-4 py-2 border-0 shadow-none rounded-b-none bg-transparent border-b border-gray-300 text-sm focus:rounded-b-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-start gap-2">
        <SelectButton
          label={t("repositories.type")}
          urlParam="type"
          options={[
            { value: "all", label: t("repositories.all") },
            { value: "forks", label: t("repositories.forks") },
            { value: "sources", label: t("repositories.sources") },
            { value: "archived", label: t("repositories.archived") },
            {
              value: "mirrors",
              label: t("repositories.mirrors"),
            },
          ]}
        />
        <SelectButton
          label={t("repositories.language")}
          urlParam="language"
          options={[
            { value: "all", label: t("languages.All") },
            { value: "JavaScript", label: t("languages.JavaScript") },
            { value: "TypeScript", label: t("languages.TypeScript") },
            { value: "Python", label: t("languages.Python") },
            { value: "Java", label: t("languages.Java") },
            { value: "HTML", label: t("languages.HTML") },
            { value: "CSS", label: t("languages.CSS") },
          ]}
        />
      </div>
    </div>
  );
};
