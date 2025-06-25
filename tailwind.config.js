/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "variable-collection-button2": "var(--variable-collection-button2)",
        "variable-collection-color": "var(--variable-collection-color)",
        "variable-collection-dark": "var(--variable-collection-dark)",
        "variable-collection-dark-light": "var(--variable-collection-dark-light)",
        "variable-collection-dark-blue": "var(--variable-collection-dark-blue)",
        "variable-collection-light-blue": "var(--variable-collection-light-blue)",
        "variable-collection-sky-blue": "var(--variable-collection-sky-blue)",
        "variable-collection-grey-400": "var(--variable-collection-grey-400)",
        "variable-collection-grey100": "var(--variable-collection-grey100)",
        "variable-collection-grey300": "var(--variable-collection-grey300)",
        "variable-collection-grey800": "var(--variable-collection-grey800)",
        "variable-collection-main": "var(--variable-collection-main)",
        "variable-collection-main2": "var(--variable-collection-main2)",
        "variable-collection-white": "var(--variable-collection-white)",
        "variable-collection-purple": "var(--variable-collection-purple)",
        "variable-collection-purple-light": "var(--variable-collection-purple-light)",
        "variable-collection-primary": "var(--variable-collection-primary)",
        "variable-collection-secondary": "var(--variable-collection-secondary)",
      },
    },
  },
  plugins: [],
};
