/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        windows: "#B8C0C1",
        "window-bg": "#C3C7CB",
        "window-accent": "#868A8E",
        "window-content": "808080",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        arial: ["Arial", ...defaultTheme.fontFamily.sans],
        sans: ["MS Sans Serif", ...defaultTheme.fontFamily.sans],
        digital: ["Digital"],
      },
      fontSize: {
        taskbarItem: ["14px", "16.5px"],
      },
      boxShadow: {
        windowPressed:
          "2px 2px 0px 0px #808080 inset, -2px -2px 0px 0px #DFDFDF inset, 1px 1px 0px 0px #0A0A0A inset, -1px -1px 0px 0px #FFF inset;",
        windowInactive:
          "2px 2px 0px 0px #FFF inset, -2px -2px 0px 0px #808080 inset, 1px 1px 0px 0px #DFDFDF inset, -1px -1px 0px 0px #0A0A0A inset;",
        windowBorder:
          "2px 2px 0px 0px #FFF inset, -2px -2px 0px 0px #808080 inset, 1px 1px 0px 0px #DFDFDF inset, -1px -1px 0px 0px #0A0A0A inset;",
      },
      backgroundImage: {
        "desktop-bg-gradient":
          "linear-gradient(180deg, #0301AE 2.73%, rgba(180, 180, 229, 0.96) 28.68%, rgba(255, 255, 255, 0.84) 51.75%, rgba(202, 202, 231, 0.74) 63.18%, #0301AE 93.41%);",
        "desktop-bg-texture": "url('./assets/images/bg-texture.jpg')",
        "window-header-bg": "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
      },
      gridTemplateColumns: {
        startBar: "auto 1fr auto",
        titleBar: "1fr auto",
      },
      gridTemplateRows: {
        desktop: "1fr auto",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  plugins: [require("tailwindcss-animate")],
};
