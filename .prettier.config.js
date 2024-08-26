module.exports = {
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  semi: true,
  useTabs: false,
  tabWidth: 2,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.{json}',
      options: {
        parser: 'json'
      }
    }
  ]
}
