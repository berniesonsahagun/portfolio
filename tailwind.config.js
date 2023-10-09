/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        windows: "#B8C0C1",
        "window-bg": "#C3C7CB",
        "window-accent": "#868A8E",
        "window-content": "808080",
      },
      fontFamily: {
        MSsans: "MS Sans Serif",
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
        "desktop-bg-texture": "url('./assets/bg-texture.jpg')",
        "window-header-bg": "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
      },
      gridTemplateColumns: {
        startBar: "auto 1fr auto",
      },
      gridTemplateRows: {
        desktop: "1fr auto",
      },
    },
  },
  plugins: [],
};
