module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Anonymous Pro", "sans-serif"],
        after: ["a_MachinaOrto"],
        before: ["a_MachinaOrtoSht"],
        spartan: ["Spartan"],
      },
      colors: {
        fallout: "#24FF00",
        after: "#4A545E",
        under: "#828D98",
        up: "#A5B0BC",
      },
      backgroundImage: {
        pipboy: "url:('/public/pipboy.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
