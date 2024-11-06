import type { Config } from "tailwindcss";

const config: Config = {



  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#333',
      },
      screens: {
        'xxs': { 'min': '250px' },  // Punto de quiebre para menos de 250px
      },
    },
  },
  plugins: [],
};
export default config;
