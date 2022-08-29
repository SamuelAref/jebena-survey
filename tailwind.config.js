/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerBlue: "#001e5d",
        khaki: "#f6f1e7",
        brandBrown: "#333333",
        textGrey: "#777777",
        red: "#FF0000",
        green: "#00FF00",
      },

      spacing: {
        21: "0.5rem",
        82: "20rem",
        84: "22rem",
        86: "23rem",
        108: "26rem",
        112: "28rem",
        124: "32rem",
        128: "34rem",
        132: "38rem",
        133: "40rem",
        134: "42rem",
        136: "48rem",
        140: "56rem",
        148: "64rem",
        156: "72rem",
      },
    },
  },
  plugins: [],
};
