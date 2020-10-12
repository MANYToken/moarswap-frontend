module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'never'],
    'linebreak-style': ['off', 'unix'],
    'no-use-before-define': 'off', // for correct work of typescript rule below
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'react/jsx-filename-extension': [1, {
      extensions: [
        '.js',
        '.jsx',
        '.tsx',
        '.ts'
      ]
    }],
    'import/no-default-export': 'off', // to be switched to error once fixed
    'import/prefer-default-export': 'off',
    'react/prop-types': 0 // to be switched to error once we have time for proptypes
  },
}
