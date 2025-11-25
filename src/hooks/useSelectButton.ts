import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface SelectOption {
  value: string;
  label: string;
}

interface UseSelectButtonProps {
  urlParam?: string;
  onChange?: (value: string) => void;
  selectedValue?: string;
}

export const useSelectButton = ({
  urlParam = "filters",
  onChange,
  selectedValue,
}: UseSelectButtonProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const isControlledMode = !!(onChange && selectedValue !== undefined);

  // Para modo controlado (single select)
  const handleSingleSelect = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  // Para modo não controlado (multi select com URL params)
  const selectedValues = isControlledMode
    ? []
    : searchParams.get(urlParam)?.split(",").filter(Boolean) || [];

  const handleMultipleToggle = (optionValue: string) => {
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

  const getDisplayLabel = (label: string, placeholder?: string) => {
    if (isControlledMode) {
      return selectedValue || placeholder || label || "";
    }

    return selectedValues.length > 0
      ? `${label} (${selectedValues.length})`
      : label;
  };

  const isOptionSelected = (optionValue: string) => {
    if (isControlledMode) {
      return selectedValue === optionValue;
    }
    return selectedValues.includes(optionValue);
  };

  return {
    isOpen,
    setIsOpen,
    isControlledMode,
    selectedValues,
    handleSingleSelect,
    handleMultipleToggle,
    getDisplayLabel,
    isOptionSelected,
  };
};
