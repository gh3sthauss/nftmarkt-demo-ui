module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "rgb(79, 0, 122)",
          blue: "#0C0C1E",
        },
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        enterActionBox: "enterActionBox 140ms ease-out",
        pingCustom: "pingCustom 6.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        enterActionBox: {
          "0%": {
            transform: "scale(0.7) translateY(-20px)",
            opacity: 0,
          },
          "100%": {
            transform: "scale(1) translateY(0px)",
            opacity: 1,
          },
        },
        pingCustom: {
          "25%, 100%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(2deg)",
          },
          "75%": {
            transform: "rotate(-2deg)",
          },
        },
      },
      fontFamily: {
        russo: ["Russo One", "sans-serif"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1124px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
