/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background, 0 0% 100%))',
        foreground: 'hsl(var(--foreground, 240 10% 4%))',
        border: 'hsl(var(--border, 240 5% 84%))',
        input: 'hsl(var(--input, 240 5% 90%))',
        ring: 'hsl(var(--ring, 240 4.8% 95.9%))',

        primary: {
          DEFAULT: 'hsl(var(--primary, 222.2 47.4% 11.2%))',
          foreground: 'hsl(var(--primary-foreground, 210 40% 98%))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary, 210 40% 96%))',
          foreground: 'hsl(var(--secondary-foreground, 222.2 47.4% 11.2%))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive, 0 84.2% 60.2%))',
          foreground: 'hsl(var(--destructive-foreground, 210 40% 98%))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted, 240 5% 96%))',
          foreground: 'hsl(var(--muted-foreground, 240 5% 45%))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent, 240 5% 90%))',
          foreground: 'hsl(var(--accent-foreground, 240 5% 20%))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover, 0 0% 100%))',
          foreground: 'hsl(var(--popover-foreground, 222.2 47.4% 11.2%))',
        },
        card: {
          DEFAULT: 'hsl(var(--card, 0 0% 100%))',
          foreground: 'hsl(var(--card-foreground, 222.2 47.4% 11.2%))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background, 240 4% 12%))',
          foreground: 'hsl(var(--sidebar-foreground, 240 5% 80%))',
          primary: 'hsl(var(--sidebar-primary, 240 4% 20%))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground, 240 5% 98%))',
          accent: 'hsl(var(--sidebar-accent, 240 4% 30%))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground, 240 5% 98%))',
          border: 'hsl(var(--sidebar-border, 240 4% 25%))',
          ring: 'hsl(var(--sidebar-ring, 240 4% 40%))',
        },
      },
      borderRadius: {
        none: "0",
        sm: "0.2rem",
        DEFAULT: "0.5rem",
        md: "0.375rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-15%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up': 'accordion-up 0.25s ease-in',
        'fade-in': 'fade-in 0.4s ease-in-out',
        'scale-in': 'scale-in 0.3s ease-in-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
