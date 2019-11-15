module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        tsconfigRootDir: 'build/',
        project: 'tsconfig.tests.json'
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-plugin/eslint-recommended',
        'plugin:@typescript-eslint/eslint-plugin/recommended',
        'plugin:@typescript-eslint/eslint-plugin/recommended-requiring-type-checking',
        'eslint-config-prettier',
        'eslint-config-prettier/@typescript-eslint',
        'plugin:eslint-plugin-prettier/recommended'
    ],
    rules: {
        'prettier/prettier': ['error', JSON.parse(require('fs').readFileSync('build/prettierrc.json'))],
        '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
        '@typescript-eslint/no-empty-interface': 'off'
    }
};
