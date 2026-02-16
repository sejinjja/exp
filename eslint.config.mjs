export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", "dist/**", "build/**", "coverage/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
    },
    rules: {
      eqeqeq: ["error", "always"],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
