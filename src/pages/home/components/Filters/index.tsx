import { SelectButton } from "@/components/SelectButton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const FiltersRepositories = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 py-4">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
          <Input
            type="text"
            searchParam="searchRepository"
            placeholder="Search Here"
            className="w-full pl-10 pr-4 py-2 border-0 shadow-none rounded-b-none bg-transparent border-b border-gray-300 text-sm focus:rounded-b-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-start gap-2">
        <SelectButton
          label="type"
          urlParam="type"
          options={[
            { value: "all", label: "All" },
            { value: "sources", label: "Sources" },
            { value: "forks", label: "Forks" },
            { value: "archived", label: "Archived" },
            { value: "mirrors", label: "Mirrors" },
          ]}
        />
        <SelectButton
          label="language"
          urlParam="language"
          options={[
            { value: "all", label: "All" },
            { value: "SCSS", label: "SCSS" },
            { value: "Java", label: "Java" },
            { value: "TypeScript", label: "TypeScript" },
            { value: "JavaScript", label: "JavaScript" },
            { value: "Python", label: "Python" },
            { value: "html", label: "Html" },
            { value: "css", label: "Css" },
          ]}
        />
      </div>
    </div>
  );
};
