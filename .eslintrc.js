module.exports = {
    env: {
      node: true,
      commonjs: true,
      es2021: true,
      jest: true
    },
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: ['prettier'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parser: 'babel-eslint',
    rules: {
      'prettier/prettier': 'warn'
    }
  };
  