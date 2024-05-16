import { Slot } from "@radix-ui/react-slot";
import { cn } from "@utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: [
          //
          "transition-all",
          "duration-500",
          "ease",
          "bg-contrast-long",
          "bg-[size:600%]",
          "bg-left-top",
        ],
        "gradient-animate": [
          //
          "transition-all",
          "duration-500",
          "ease",
          "bg-contrast-long",
          "bg-[size:600%]",
          "bg-left-top",
          "hover:animate-gradient-rotate",
          "[&.active]:animate-gradient-rotate",
          "data-[state=open]:animate-gradient-rotate",
          "data-[state=on]:animate-gradient-rotate",
        ],
        "gradient-border": [
          "relative",
          "z-[1]",
          "transition-all",
          "duration-500",
          "ease",
          "bg-gradient-to-tr",
          "from-contrast-v1",
          "to-contrast-v2",
          "before:absolute",
          "before:top-[1px]",
          "before:left-[1px]",
          "before:right-[1px]",
          "before:bottom-[1px]",
          "before:rounded-[inherit]",
          "before:transition-all",
          "before:duration-500",
          "before:ease",
          "before:bg-gradient-to-tr",
          "before:from-contrast-v1-dark-filled",
          "before:to-contrast-v2-dark-filled",
          "before:z-[-1]",
          "before:hover:opacity-0",
          "[&.active]:before:opacity-0",
          "data-[state=open]:before:opacity-0",
          "data-[state=on]:before:opacity-0",
        ],
        "gradient-border-hover": [
          "relative",
          "z-[1]",
          "transition-all",
          "duration-500",
          "ease",
          "hover:bg-gradient-to-tr",
          "hover:from-contrast-v1",
          "hover:to-contrast-v2",
          "[&.active]:bg-gradient-to-tr",
          "[&.active]:from-contrast-v1",
          "[&.active]:to-contrast-v2",
          "data-[state=open]:bg-gradient-to-tr",
          "data-[state=on]:bg-gradient-to-tr",
          "data-[state=open]:from-contrast-v1",
          "data-[state=on]:from-contrast-v1",
          "data-[state=open]:to-contrast-v2",
          "data-[state=on]:to-contrast-v2",
          "before:absolute",
          "before:top-[1px]",
          "before:left-[1px]",
          "before:right-[1px]",
          "before:bottom-[1px]",
          "before:rounded-[inherit]",
          "before:transition-all",
          "before:duration-500",
          "before:ease",
          "before:bg-main-bg",
          "before:z-[-1]",
        ],
        "gradient-border-hover-animate": [
          "relative",
          "z-[1]",
          "transition-all",
          "duration-500",
          "ease",
          "bg-contrast-long",
          "bg-[size:600%]",
          "bg-left-top",
          "hover:animate-gradient-rotate",
          "[&.active]:animate-gradient-rotate",
          "data-[state=open]:animate-gradient-rotate",
          "data-[state=on]:animate-gradient-rotate",
          "before:absolute",
          "before:top-[1px]",
          "before:left-[1px]",
          "before:right-[1px]",
          "before:bottom-[1px]",
          "before:rounded-[inherit]",
          "before:transition-all",
          "before:duration-500",
          "before:ease",
          "before:bg-main-bg",
          "before:z-[-1]",
          "before:hover:opacity-0",
          "[&.active]:before:opacity-0",
          "data-[state=open]:before:opacity-0",
          "data-[state=on]:before:opacity-0",
        ],
        "gradient-border-animate": [
          "relative",
          "z-[1]",
          "transition-all",
          "duration-500",
          "ease",
          "bg-contrast-long",
          "bg-[size:600%]",
          "bg-left-top",
          "hover:animate-gradient-rotate",
          "[&.active]:animate-gradient-rotate",
          "data-[state=open]:animate-gradient-rotate",
          "data-[state=on]:animate-gradient-rotate",
          "before:absolute",
          "before:top-[1px]",
          "before:left-[1px]",
          "before:right-[1px]",
          "before:bottom-[1px]",
          "before:rounded-[inherit]",
          "before:transition-all",
          "before:duration-500",
          "before:ease",
          "before:bg-gradient-to-tr",
          "before:from-contrast-v1-dark-filled",
          "before:to-contrast-v2-dark-filled",
          "before:z-[-1]",
          "before:hover:opacity-0",
          "[&.active]:before:opacity-0",
          "data-[state=open]:before:opacity-0",
          "data-[state=on]:before:opacity-0",
        ],
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 py-3",
        xxl: "h-16 rounded-md px-12 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
