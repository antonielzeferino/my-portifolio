/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        fontNoto: 'var(--font-noto-serif)',
        fontDmMono: 'var(--font-dm-mono)',
        fontProsto: 'var(--font-prosto-one)'
      },
      boxShadow: {
        'custom-white': '6px 6px 10px 3px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
};