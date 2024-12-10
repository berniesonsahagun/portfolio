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
        engraved: "inset 1px 1px 0 0 #808080, inset -1px -1px 0 0 #DFDFDF;",
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
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  plugins: [require("tailwindcss-animate")],
};
