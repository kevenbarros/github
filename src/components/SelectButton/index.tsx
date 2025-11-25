import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useSelectButton, type SelectOption } from "@/hooks/useSelectButton";
import { TriggerButton } from "./TriggerButton";
import { SelectDialogContent } from "./SelectDialogContent";
import { SelectDrawerContent } from "./SelectDrawerContent";

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
  label = "",
  options = [],
  urlParam = "filters",
  className = "",
  placeholder,
  selectedValue,
  onChange,
}: SelectButtonProps) => {
  const isMobile = useIsMobile();
  const {
    isOpen,
    setIsOpen,
    isControlledMode,
    handleSingleSelect,
    handleMultipleToggle,
    getDisplayLabel,
    isOptionSelected,
  } = useSelectButton({
    urlParam,
    onChange,
    selectedValue,
  });

  const displayLabel = getDisplayLabel(label, placeholder);

  const triggerButton = (
    <TriggerButton displayLabel={displayLabel} className={className} />
  );

  const sharedProps = {
    label,
    placeholder,
    options,
    isControlledMode,
    onSingleSelect: handleSingleSelect,
    onMultipleToggle: handleMultipleToggle,
    isOptionSelected,
  };

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
        <SelectDrawerContent {...sharedProps} />
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <SelectDialogContent {...sharedProps} />
    </Dialog>
  );
};
