/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#FC454B",
        yellow: "#FDCC49",
        grey: "#ededed",
        react: "#61DBFB",
        typescript: "#007acc",
        node: "#3c873a",
        next: "#5e7693",
        mongoDB: "#4DB33D",
        tailwind: "#06b6d4",
        mySql: "#00758F",
        graphQl: "#e535ab",
        docker: "#1D63ED",
        "deep-blue": "#2C2A2A",
        "light-grey": "#413F3F",
        "dark-grey": "#757575",
        "opac-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #afa977 4.21%, #dda929 78.05%)",
        "gradient-rainblue":
          "linear-gradient(81.66deg, #afa977 4.21%, #dda929 25.05%, #ff6e6e 78.07%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
