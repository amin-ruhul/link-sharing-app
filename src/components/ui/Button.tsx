import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg py-3 px-7 heading-s transition-colors disabled:pointer-events-none disabled:select-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "border border-transparent bg-primary active:bg-primary-hover active:shadow-active text-white disabled:bg-primary/25 ",
        secondary:
          "border border-primary text-primary active:bg-primary-light  disabled:text-primary/25 disabled:border-primary/25 ",
      },
      block: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  asChild = false,
  variant,
  block,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, block, className }))}
      {...props}
    />
  );
};

export default Button;
