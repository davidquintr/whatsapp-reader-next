import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        'half': '50%',
      },
      colors: {
        light: {
          green: {
            100: "#d9fdd3",
            200: "#008069",
            300: "#005a5c"
          },
          gray: {
            100: "#ced0d1",
            200: "#f0f2f5",
            300: "#f6f6f6",
            400: "#ced0d1"
          }

        },
        dark: {
          green: {
            50: "#D9FDD3",
            100: "#b4ffae",
            200: "#00a889",
            300: "#005C4B",
          },
          gray: {
            50: "#1c272d",
            100: "#172830",
            200: "#202C33",
            300: "#182229",
            400: "#030C12",
            500: "#0B141A",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
