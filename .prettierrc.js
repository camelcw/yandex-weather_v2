module.exports = {
  useTabs: false,
  tabWidth: 2,
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 80,
  importOrder: [
    "^common/(.*)$",
    "^@common/(.*)$",
    "^components/(.*)$",
    "^@components/(.*)$",
    "^icons/(.*)$",
    "^@icons/(.*)$",
    "^lib/(.*)$",
    "^@lib/(.*)$",
    "^pages/(.*)$",
    "^@pages/(.*)$",
    "^styles/(.*)$",
    "^@styles/(.*)$",
    "^ui-kit/(.*)$",
    "^@ui-kit/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  formatOnSave: true,
};
