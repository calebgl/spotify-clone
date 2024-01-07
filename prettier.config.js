/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  importOrder: ["<THIRD_PARTY_MODULES>", "^~/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

module.exports = config;
