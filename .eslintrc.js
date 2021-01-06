module.exports = {
  // An environment defines global variables that are predefined.
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb"
  ],
  parser: "@typescript-eslint/parser",
  // ESLint allows you to specify the JavaScript language options you want to support.
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: "module",
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true
  },
  // Plugins may provide processors.
  // Processors can extract JavaScript code from another kind of files,
  // then lets ESLint lint the JavaScript code.
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 0,
    'global-require': 0,
    quotes: 0,
    "react/self-closing-comp": 0,
    "import/no-unresolved": 0,
    "object-curly-newline": 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': ['error', 'never'],
    'comma-dangle': 0,
    'no-restricted-syntax': [0],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    '@typescript-eslint/no-empty-interface': 0,
    'no-empty': 0,
    'no-await-in-loop': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'promise/always-return': 0,
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    'import/no-dynamic-require': 1,
    radix: ["error", "as-needed"],
    'no-param-reassign': ["error", { props: false }],
  },
  settings: {
    // 可以定义一些自己写模块
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      // Unable to resolve path import/no-unresolved
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
    },
  },
  // To disable rules inside of a configuration file for a group of files,
  // use the overrides key along with a files key.
  // overrides: [
  //   {
  //     "files": [],
  //     "rules": {}
  // }
  // ],
  // You can tell ESLint to ignore specific files and directories
  // by ignorePatterns in your config files.
  // Each value of ignorePatterns is the same pattern as each line of
  // .eslintignore in the next section.
  ignorePatterns: [],
};
