module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.jsx"],
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#edcb17',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        'secondary': {
          50: '#fbfbef',
          100: '#f7f7e3',
          200: '#efefc7',
          300: '#e7e7ab',
          400: '#dfdf8f',
          500: '#d7d773',
          600: '#cfcf57',
          700: '#c7c73b',
          800: '#bfbf1f',
          900: '#b7b703',
        }
      }
    },
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      90: "90%",
      full: "100%",
    },
  },
};
