module.exports = {
  plugins: ['stylelint-prettier','stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
  ],
  "customSyntax": "postcss-scss",
  ignoreFiles: ['**/node_modules/**'],
}
