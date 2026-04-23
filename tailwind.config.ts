import type { Config } from "tailwindcss";

const config: Config = {
  
  theme: {
    extend: {

      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
 
};
export default config;