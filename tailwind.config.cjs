/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        xs: "0px 1px 1px rgba(24, 24, 27, 0.06), 0px 0px 0px rgba(24, 24, 27, 0.08), 0px 0px 0px rgba(24, 24, 27, 0.08)",
        sm: "0px 2px 1px rgba(24, 24, 27, 0.01), 0px 1px 1px rgba(24, 24, 27, 0.05), 0px 1px 1px rgba(24, 24, 27, 0.09), 0px 0px 0px rgba(24, 24, 27, 0.1), 0px 0px 0px rgba(24, 24, 27, 0.1);",
        md: "0px 5px 2px rgba(24, 24, 27, 0.03), 0px 3px 2px rgba(24, 24, 27, 0.1), 0px 1px 1px rgba(24, 24, 27, 0.17), 0px 0px 1px rgba(24, 24, 27, 0.2), 0px 0px 0px rgba(24, 24, 27, 0.2);",
        lg: "0px 25px 7px rgba(24, 24, 27, 0.01), 0px 16px 6px rgba(24, 24, 27, 0.04), 0px 9px 5px rgba(24, 24, 27, 0.15), 0px 4px 4px rgba(24, 24, 27, 0.26), 0px 1px 2px rgba(24, 24, 27, 0.29), 0px 0px 0px rgba(24, 24, 27, 0.3);",
      },
      colors: {
        "midu-50": "#E5F5FF",
        "midu-100": "#B3E0FF",
        "midu-200": "#80CCFF",
        "midu-300": "#66BFFF",
        "midu-400": "#0099FF",
        "midu-500": "#0063C6",
        "midu-600": "#031D3A",
        "midu-700": "#00111C",
        "midu-800": "#000C14",
        "midu-purple-500": "#8B5CF6",
        "midu-purple-600": "#7C3AED",
        "midu-purple-950": "#2E1065",
      },
      fontFamily: {
        midufont: [
          "Roboto",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      textWrap: {
        balance: "balance",
      },
      fontStretch: {
        "ultra-condensed": "ultra-condensed",
        "extra-condensed": "extra-condensed",
        condensed: "condensed",
        "semi-condensed": "semi-condensed",
        normal: "normal",
        "semi-expanded": "semi-expanded",
        expanded: "expanded",
        "extra-expanded": "extra-expanded",
        "ultra-expanded": "ultra-expanded",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
