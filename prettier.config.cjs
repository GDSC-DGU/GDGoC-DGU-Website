/**
 * Prettier 설정 파일입니다.
 * @author 도형
 */

module.exports = {
  plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],
  singleQuote: false,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 120,
  arrowParens: "always",
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  importOrder: [
    "^(react/(.*)$)|^(react$)|^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^(@/lib/(.*)$)|^(@/components/(.*)$)|^(@/styles/(.*)$)",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};
