module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["/home/stephenchoung/MainCodingFolder/MySideProjects/MineSweeper_Project/minesweeper/tsconfig.json"]
  },
  plugins: ['react'],
  rules: {"@typescript-eslint/consistent-type-definitions": "error"}
};
