module.exports = {
    parser: "babel-eslint",
    env: {
      es6: true,
      node: true,
      browser: true
    },
    "rules": {
      "quotes": [2, "single", { "avoidEscape": true }]
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: ["react"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended"
    ]
  };
  