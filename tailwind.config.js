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
        foreground: "var(--foreground)", // Adding the foreground variable
        color_1: "var(--color_1)",
        color_2: "var(--color_2)",
        color_3: "var(--color_3)",
        color_4: "var(--color_4)",
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};

// rgba(42, 91, 160, 1)
// rgba(24, 176, 62, 1)
// rgba(255,255,255,1)
// rgba(221, 221, 221, 1)
