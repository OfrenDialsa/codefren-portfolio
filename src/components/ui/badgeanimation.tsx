import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const badgeAnimatedVariants = cva(
  "inline-flex items-center rounded-md border px-3 py-1 text-sm font-semibold transition-all",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow",
        outline: "border border-muted text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeAnimatedProps
  extends HTMLMotionProps<"div">,
    VariantProps<typeof badgeAnimatedVariants> {
  active?: boolean;
}

export const BadgeAnimated: React.FC<BadgeAnimatedProps> = ({
  className,
  variant,
  active = false,
  children,
  ...props
}) => {
  return (
    <motion.div
      whileTap={{ scale: 1.05 }}
      className={cn(
        badgeAnimatedVariants({ variant }),
        className,
        "cursor-pointer select-none"
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
