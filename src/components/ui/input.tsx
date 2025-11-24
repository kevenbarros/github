import * as React from "react";
import { useSearchParams } from "react-router-dom";

import { cn } from "@/lib/utils";

interface InputProps
  extends Omit<
    React.ComponentProps<"input">,
    "value" | "onChange" | "defaultValue"
  > {
  searchParam?: string;
  defaultValue?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, searchParam, defaultValue = "", ...props }, ref) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [localValue, setLocalValue] = React.useState(defaultValue);

    // Valor mostrado no input
    const value = searchParam
      ? searchParams.get(searchParam) || defaultValue
      : localValue;

    // Sincroniza o valor local quando os searchParams mudam externamente
    React.useEffect(() => {
      if (searchParam) {
        const paramValue = searchParams.get(searchParam) || defaultValue;
        setLocalValue(paramValue);
      }
    }, [searchParam, searchParams, defaultValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalValue(newValue);

      // Atualiza searchParams imediatamente
      if (searchParam) {
        const newParams = new URLSearchParams(searchParams);
        if (newValue && newValue.trim() !== "" && newValue !== defaultValue) {
          newParams.set(searchParam, newValue);
        } else {
          newParams.delete(searchParam);
        }
        setSearchParams(newParams);
      }
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        value={value}
        onChange={handleChange}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
