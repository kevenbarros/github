import { useTranslation } from "react-i18next";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { OptionsList } from "./OptionsList";
import type { SelectOption } from "@/hooks/useSelectButton";

interface SelectDrawerContentProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  isControlledMode: boolean;
  onSingleSelect: (value: string) => void;
  onMultipleToggle: (value: string) => void;
  isOptionSelected: (value: string) => boolean;
}

export const SelectDrawerContent = ({
  label,
  placeholder,
  options,
  isControlledMode,
  onSingleSelect,
  onMultipleToggle,
  isOptionSelected,
}: SelectDrawerContentProps) => {
  const { t } = useTranslation();

  const title = isControlledMode
    ? placeholder || label
    : `${t("common.select")} ${label}`;
  const description = isControlledMode
    ? undefined
    : t("selectButton.chooseOption");

  return (
    <DrawerContent>
      <DrawerHeader className="text-left">
        <DrawerTitle>{title}</DrawerTitle>
        {description && <DrawerDescription>{description}</DrawerDescription>}
      </DrawerHeader>

      <div className="p-4 pb-0">
        <OptionsList
          options={options}
          isControlledMode={isControlledMode}
          onSingleSelect={onSingleSelect}
          onMultipleToggle={onMultipleToggle}
          isOptionSelected={isOptionSelected}
        />
      </div>

      <DrawerFooter>
        <DrawerClose asChild>
          <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            {t("common.cancel")}
          </button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
};
