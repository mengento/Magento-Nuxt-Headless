module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    semi: ['error', 'never'],
    camelcase: 0,
    'no-unused-vars': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        usePrettierrc: false,
        trailingCommas: 'none',
        fileInfoOptions: {
          withNodeModules: true
        }
      }
    ],
    'nuxt/no-cjs-in-config': 'off'
  }
}
