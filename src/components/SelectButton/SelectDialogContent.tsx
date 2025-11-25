import { useTranslation } from "react-i18next";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { OptionsList } from "./OptionsList";
import type { SelectOption } from "@/hooks/useSelectButton";

interface SelectDialogContentProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  isControlledMode: boolean;
  onSingleSelect: (value: string) => void;
  onMultipleToggle: (value: string) => void;
  isOptionSelected: (value: string) => boolean;
}

export const SelectDialogContent = ({
  label,
  placeholder,
  options,
  isControlledMode,
  onSingleSelect,
  onMultipleToggle,
  isOptionSelected,
}: SelectDialogContentProps) => {
  const { t } = useTranslation();

  const title = isControlledMode
    ? placeholder || label
    : `${t("common.select")} ${label}`;
  const description = isControlledMode
    ? undefined
    : t("selectButton.chooseOption");

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>

      <div className="py-4">
        <OptionsList
          options={options}
          isControlledMode={isControlledMode}
          onSingleSelect={onSingleSelect}
          onMultipleToggle={onMultipleToggle}
          isOptionSelected={isOptionSelected}
        />
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            {t("common.cancel")}
          </button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};
