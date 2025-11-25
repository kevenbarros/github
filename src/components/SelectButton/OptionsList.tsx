import { Check } from "lucide-react";
import type { SelectOption } from "@/hooks/useSelectButton";

interface OptionsListProps {
  options: SelectOption[];
  isControlledMode: boolean;
  onSingleSelect: (value: string) => void;
  onMultipleToggle: (value: string) => void;
  isOptionSelected: (value: string) => boolean;
}

export const OptionsList = ({
  options,
  isControlledMode,
  onSingleSelect,
  onMultipleToggle,
  isOptionSelected,
}: OptionsListProps) => {
  if (isControlledMode) {
    return (
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSingleSelect(option.value)}
            className="flex items-center gap-3 p-3 w-full rounded-lg cursor-pointer transition-colors hover:bg-gray-50 text-left"
          >
            <span className="text-sm font-medium text-gray-900">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {options.map((option) => {
        const isSelected = isOptionSelected(option.value);

        return (
          <label
            key={option.value}
            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50"
          >
            <div className="relative">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onMultipleToggle(option.value)}
                className="sr-only"
              />
              <div
                className={`
                  w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
                  ${
                    isSelected
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "border-gray-300 bg-white"
                  }
                `}
              >
                {isSelected && <Check className="w-3 h-3" />}
              </div>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
};
