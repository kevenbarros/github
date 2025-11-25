import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { SelectButton } from "../SelectButton";

const languages = [
  { value: "pt", label: "Português" },
  { value: "en", label: "English" },
];

export function LanguageSelector() {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  const currentLanguage = languages.find(
    (lang) => lang.value === i18n.language
  );

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-white" />
      <SelectButton
        selectedValue={currentLanguage?.label || "Português"}
        options={languages.map((lang) => ({
          value: lang.value,
          label: lang.label,
        }))}
        onChange={handleLanguageChange}
        placeholder={t("header.languageSelector")}
        className="bg-amber-50 text-gray-900 min-w-[120px]"
      />
    </div>
  );
}
