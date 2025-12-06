/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        primary: "#6B5BFF",      // Purple
        accent: "#00E5FF",       // Neon Blue
        darkbg: "#0F0F1A",       // Dark background
        lighttext: "#F1F5F9",    // Light text
      },
    },
  },
  plugins: [],
}

