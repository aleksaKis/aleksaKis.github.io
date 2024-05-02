module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest-dom/recommended',
        'plugin:prettier/recommended',
        'plugin:testing-library/react',
    ],
    ignorePatterns: [
        'dist',
        '.eslintrc.cjs',
        'config',
        '*.config.*',
        'node_modules',
    ],

    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
};
