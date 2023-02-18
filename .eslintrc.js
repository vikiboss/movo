const importOrder = [
  ['builtin', 'external'],
  'internal',
  ['unknown', 'sibling', 'parent', 'object', 'index'],
  'type'
]

module.exports = {
  root: true,
  env: {
    browser: false
  },
  extends: ['viki-ts', 'plugin:prettier/recommended'],
  rules: {
    camelcase: 'off',
    'no-var': 'off',
    'no-case-declarations': 'off',
    'no-useless-constructor': 'off',
    'no-use-before-define': 'off',

    '@typescript-eslint/no-empty-function': 'off',

    'import/order': [
      1,
      {
        'newlines-between': 'always',
        groups: importOrder,
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
}
