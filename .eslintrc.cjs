module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
      "@typescript-eslint",
      "unused-imports"
    ],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "unused-imports/no-unused-imports-ts": 2,
      indent: [
        "error",
        4,
        {
          SwitchCase: 1
        }
      ],
      semi: [
        "error",
        "always"
      ],
      quotes: [
        "error",
        "single"
      ]
    }
  }
