import * as React from "react";

import { cn } from "@/lib/utils";

type AccordionType = "single" | "multiple";
type AccordionValue = string | string[];

type AccordionContextValue = {
  type: AccordionType;
  openItems: string[];
  toggleItem: (value: string) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

type AccordionItemContextValue = {
  value: string;
  open: boolean;
  triggerId: string;
  contentId: string;
};

const AccordionItemContext =
  React.createContext<AccordionItemContextValue | null>(null);

function normalizeValue(value: AccordionValue | undefined, type: AccordionType) {
  if (type === "multiple") {
    return Array.isArray(value) ? value : value ? [value] : [];
  }
  return typeof value === "string" && value ? [value] : [];
}

function deriveNextValue(
  type: AccordionType,
  openItems: string[],
  item: string,
  collapsible: boolean,
) {
  const isOpen = openItems.includes(item);

  if (type === "multiple") {
    return isOpen
      ? openItems.filter((value) => value !== item)
      : [...openItems, item];
  }

  if (isOpen) {
    return collapsible ? "" : item;
  }

  return item;
}

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: AccordionType;
  collapsible?: boolean;
  value?: AccordionValue;
  defaultValue?: AccordionValue;
  onValueChange?: (value: AccordionValue) => void;
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      type = "single",
      collapsible = false,
      value,
      defaultValue,
      onValueChange,
      className,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState<AccordionValue>(
      defaultValue ?? (type === "multiple" ? [] : ""),
    );
    const currentValue = isControlled ? value : internalValue;
    const openItems = React.useMemo(
      () => normalizeValue(currentValue, type),
      [currentValue, type],
    );

    const setValue = React.useCallback(
      (nextValue: AccordionValue) => {
        if (!isControlled) {
          setInternalValue(nextValue);
        }
        onValueChange?.(nextValue);
      },
      [isControlled, onValueChange],
    );

    const toggleItem = React.useCallback(
      (itemValue: string) => {
        const nextValue = deriveNextValue(
          type,
          openItems,
          itemValue,
          collapsible,
        );
        setValue(nextValue);
      },
      [type, openItems, collapsible, setValue],
    );

    const contextValue = React.useMemo(
      () => ({ type, openItems, toggleItem }),
      [type, openItems, toggleItem],
    );

    return (
      <AccordionContext.Provider value={contextValue}>
        <div ref={ref} className={cn(className)} {...props} />
      </AccordionContext.Provider>
    );
  },
);
Accordion.displayName = "Accordion";

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    if (!context) {
      throw new Error("AccordionItem must be used within an Accordion");
    }

    const open = context.openItems.includes(value);
    const triggerId = React.useId();
    const contentId = React.useId();

    return (
      <AccordionItemContext.Provider
        value={{ value, open, triggerId, contentId }}
      >
        <div
          ref={ref}
          data-state={open ? "open" : "closed"}
          className={cn(className)}
          {...props}
        />
      </AccordionItemContext.Provider>
    );
  },
);
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, type = "button", ...props }, ref) => {
  const accordion = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);

  if (!accordion || !item) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  return (
    <button
      ref={ref}
      type={type}
      id={item.triggerId}
      aria-controls={item.contentId}
      aria-expanded={item.open}
      data-state={item.open ? "open" : "closed"}
      className={cn("flex w-full items-center justify-between", className)}
      onClick={() => accordion.toggleItem(item.value)}
      {...props}
    />
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, ...props }, ref) => {
  const item = React.useContext(AccordionItemContext);

  if (!item) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  return (
    <div
      ref={ref}
      id={item.contentId}
      role="region"
      aria-labelledby={item.triggerId}
      data-state={item.open ? "open" : "closed"}
      hidden={!item.open}
      className={cn(className)}
      {...props}
    />
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
