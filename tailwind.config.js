/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        softOrange: "hsl(35, 77%, 62%)",
        SoftRed: " hsl(5, 85%, 63%)",
        offWhite: "hsl(36, 100%, 99%)",
        GrayishBlue: "hsl(233, 8%, 79%)",
        DarkGrayishBlue: "hsl(236, 13%, 42%)",
        VeryDarkBlue: "hsl(240, 100%, 5%)",
      },
      screens: {
        small: "500px",
        mid: "570px",
        large: "900px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        normal: "0.9375rem",
        vw: "50vw",
        svw: "7vw",
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      letterSpacing: {
        normal: ".45em",
      },
      gridTemplateRows: {
        rows: "repeat(4,300px)",
      },
      gridTemplateColumns: {
        cols: "repeat(3,300px)",
      },
    },
  },
  plugins: [],
};
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
