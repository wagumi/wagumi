const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: "jit",
  darkMode: "class",
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: colors.gray,
        indigo: colors.indigo,
        lime: colors.lime,
        neutral: colors.neutral,
        orange: colors.orange,
        rose: colors.rose,
        purple: colors.purple,
        sky: colors.sky,
        slate: colors.slate,
        stone: colors.stone,
        teal: colors.teal,
        violet: colors.violet,
      },
    },
  },
};
