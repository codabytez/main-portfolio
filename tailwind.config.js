/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        home: "#22212C",
        primary: "#302F3D",
        secondary: "#837E9F",
        tertiary: "#EEF1F4",
        annotations: "#E7DE79",
        fuschia: "#CB92B1",
      },
      fontFamily: {
        merriweather: ["Merriweather Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
