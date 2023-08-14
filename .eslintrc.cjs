module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
};
