import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utils
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cardVariants = cva(
  "relative overflow-hidden rounded-2xl transition-shadow",
  {
    variants: {
      variant: {
        elevated: "bg-white text-gray-900 shadow-md hover:shadow-lg dark:bg-gray-900 dark:text-gray-100",
        filled: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100",
        outlined: "border border-gray-300 bg-transparent text-gray-900 dark:border-gray-700 dark:text-gray-100",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "elevated",
      padding: "md",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
