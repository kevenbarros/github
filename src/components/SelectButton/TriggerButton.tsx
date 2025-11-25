import { ChevronDown } from "lucide-react";

interface TriggerButtonProps {
  displayLabel: string;
  className?: string;
  onClick?: () => void;
}

export const TriggerButton = ({
  displayLabel,
  className = "",
  onClick,
}: TriggerButtonProps) => {
  return (
    <button
      onClick={onClick}
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
};
