const { FLAG_UNRESTRICTED } = require("html2canvas/dist/types/css/syntax/tokenizer");

module.exports = {
  printWidth: 100,
  semi: false,
  vueIndentScriptAndStyle: true,
  singleQuote: true,
  trailingComma: 'es5',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
  plugins: ['prettier-plugin-packagejson'],
  overrides: [
    {
      files: '.*rc',
      options: {
        parser: 'json',
      },
    },
  ],
};
