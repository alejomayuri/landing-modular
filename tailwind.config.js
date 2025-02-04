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
        geistSans: "var(--font-geist-sans)",
        robotoMedium: "var(--font-roboto-medium)",
        poppinsRegular: "var(--font-poppins-regular)",
        poppinsBold: "var(--font-poppins-bold)",
        barlow: ["Barlow", "sans-serif"],
        oswald: "var(--font-oswald)",
      },
    },
  },
  plugins: [],
};
