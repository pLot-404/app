module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "airbnb-base-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/extensions": [".js", ".ts", ".scss"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".scss"],
      },
    },
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", ts: "never", scss: "never" },
    ],
  },
};
