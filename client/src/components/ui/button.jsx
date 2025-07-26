import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Liquid Glass Variants
        "liquid-glass": "bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl dark:bg-black/10 dark:border-white/10 dark:hover:bg-black/20",
        "liquid-glass-primary": "bg-primary/80 backdrop-blur-xl border border-primary/30 text-white hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl",
        "liquid-glass-secondary": "bg-white/90 backdrop-blur-xl border border-white/30 text-primary hover:bg-white/95 transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl dark:bg-black/90 dark:text-white dark:hover:bg-black/95",
        "liquid-glass-outline": "bg-white/5 backdrop-blur-xl border border-white/40 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl dark:border-white/20",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        // Liquid Glass specific sizes with rounded corners
        "liquid-sm": "h-9 rounded-2xl px-4",
        "liquid-default": "h-10 rounded-2xl px-6",
        "liquid-lg": "h-12 rounded-2xl px-8",
        "liquid-icon": "h-10 w-10 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
