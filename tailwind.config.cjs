/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        dark: {
          400: "#222222",
          500: "#02010A",
          600: "#121212",
        },
        darkBlue: {
          800: "#01011A",
          700: "#020221",
          600: "#020327",
          500: "#04052E",
          400: "#282B81",
        },
        primaryBlue: {
          900: "#03004E",
          800: "#05005F",
          700: "#070076",
          600: "#0A008D",
          500: "#0D00A4",
        },
        secondaryPurple: {
          900: "#050027",
          800: "#07002F",
          700: "#0B003B",
          600: "#0F0046",
          500: "#140152",
          400: "#442797",
        },
        primaryPurple: {
          900: "#09003B",
          800: "#0D0047",
          700: "#130059",
          600: "#1A006A",
          500: "#22007C",
        },
        light: {
          500: "#FFFBFE",
        },
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/office.jpg')",
      },
      boxShadow: {
        cardShadow: "1px 2px 10px 1px #12121250",
      },
    },
  },
  plugins: [],
};
