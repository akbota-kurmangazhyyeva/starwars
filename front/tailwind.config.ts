import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom": "url('/images/stars.jpg')",
        "block1": "url('/images/block1.png')",
        "block2": "url('/images/block-film.png')",
        "block3": "url('/images/block-character.png')",
      },
      colors: {
        'neon-pink': '#ff007f',
        'neon-blue': '#00e5ff',
        'neon-purple': '#bf00ff',
        'futuristics-800': '#1a1a1a',
        'black60': 'rgba(0, 0, 0, 0.6)',
      },
      fontFamily: {
         lexend: ['Lexend', 'sans'],
      },
    },
  },
  plugins: [],
};
export default config;
