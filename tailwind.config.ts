import { Config } from "tailwindcss";
import colors from "./tailwind/colors";
import fonts from "./tailwind/fonts";
import spacing from "./tailwind/spacing";
import borderRadius from "./tailwind/borderRadius";
import boxShadow from "./tailwind/boxShadow";
import screens from "./tailwind/screens";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...colors,
      ...fonts,
      ...spacing,
      ...borderRadius,
      ...boxShadow,
      ...screens,
    },
  },
  plugins: [],
};

export default config;
