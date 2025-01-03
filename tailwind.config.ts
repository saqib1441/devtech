import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "95%",
          md: "90%",
          lg: "85%",
          xl: "80%",
        },
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#081b29",
        main: "#6A13FF",
      },
      backgroundImage: {
        headerOverlay:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../assets/overlays/header_overlay.svg)",
      },
    },
  },
  plugins: [],
} satisfies Config;
