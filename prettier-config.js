/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  singleQuote: true,
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: true,
  useTabs: false,
  semi: true,
  tabWidth: 2,
  trailingComma: "none",
  arrowParens: "avoid",
  embeddedLanguageFormatting: "auto",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
};
