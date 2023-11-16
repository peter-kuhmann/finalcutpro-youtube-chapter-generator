import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-purple": "#6D24CB",
        "my-lemon": "#E9EE13",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
