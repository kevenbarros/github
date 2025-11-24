import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/useIsMobile";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectButtonProps {
  label?: string;
  options?: SelectOption[];
  urlParam?: string;
  className?: string;
  placeholder?: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
}

export const SelectButton = ({
  label,
  options = [],
  urlParam = "filters",
  className = "",
  placeholder,
  selectedValue,
  onChange,
}: SelectButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const isMobile = useIsMobile();

  if (onChange && selectedValue !== undefined) {
    const handleSingleSelect = (optionValue: string) => {
      onChange(optionValue);
      setIsOpen(false);
    };

    const displayLabel = selectedValue || placeholder || label || "";

    const triggerButton = (
      <button
        className={`
          inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium text-sm
          bg-linear-to-r from-[#0056A6] to-[#0587FF]
          hover:from-[#004892] hover:to-[#0470E6]
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          transition-all duration-200 ease-in-out
          shadow-sm hover:shadow-md
          ${className}
        `}
      >
        <span>{displayLabel}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    );

    const optionsList = (
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSingleSelect(option.value)}
            className="flex items-center gap-3 p-3 w-full rounded-lg cursor-pointer transition-colors hover:bg-gray-50 text-left"
          >
            <span className="text-sm font-medium text-gray-900">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    );

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{triggerButton}</DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{placeholder || label}</DialogTitle>
          </DialogHeader>
          <div className="py-4">{optionsList}</div>
          <DialogFooter>
            <DialogClose asChild>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Cancel
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  const selectedValues =
    searchParams.get(urlParam)?.split(",").filter(Boolean) || [];

  const handleToggle = (optionValue: string) => {
    const newParams = new URLSearchParams(searchParams);
    let currentValues =
      newParams.get(urlParam)?.split(",").filter(Boolean) || [];

    if (currentValues.includes(optionValue)) {
      currentValues = currentValues.filter((v) => v !== optionValue);
    } else {
      currentValues.push(optionValue);
    }

    if (currentValues.length > 0) {
      newParams.set(urlParam, currentValues.join(","));
    } else {
      newParams.delete(urlParam);
    }

    setSearchParams(newParams);
  };

  const displayLabel =
    selectedValues.length > 0 ? `${label} (${selectedValues.length})` : label;

  const triggerButton = (
    <button
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium text-sm
        bg-linear-to-r from-[#0056A6] to-[#0587FF]
        hover:from-[#004892] hover:to-[#0470E6]
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-all duration-200 ease-in-out
        shadow-sm hover:shadow-md
        ${className}
      `}
    >
      <span>{displayLabel}</span>
      <ChevronDown className="w-4 h-4" />
    </button>
  );

  const optionsList = (
    <div className="space-y-2">
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value);

        return (
          <label
            key={option.value}
            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50"
          >
            <div className="relative">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleToggle(option.value)}
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

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>

        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Select {label}</DrawerTitle>
            <DrawerDescription>
              Choose an option from the list below.
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-0">{optionsList}</div>

          <DrawerFooter>
            <DrawerClose asChild>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Cancel
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select {label}</DialogTitle>
          <DialogDescription>
            Choose an option from the list below.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">{optionsList}</div>

        <DialogFooter>
          <DialogClose asChild>
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Cancel
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
