import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import parser from '@typescript-eslint/parser';
import plugin from '@typescript-eslint/eslint-plugin';

export default [
  { ignores: ['dist', '**/*.d.ts'] },

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...Object.fromEntries(Object.entries(globals.browser).map(([k, v]) => [k.trim(), v])),
      },
    },
    plugins: {
      '@typescript-eslint': plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...plugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
    },
  },

  {
    files: ['**/*.test.{ts,tsx}'],
    languageOptions: {
      globals: globals.jest, // lub globals.vitest jeśli testujesz w Vitest
    },
  },

  {
    files: [
      '**/vite.config.*',
      '**/eslint.config.*',
      '**/jest.config.*',
      '**/craco.config.*',
      '**/.storybook/*.ts',
    ],
    languageOptions: {
      globals: globals.node,
    },
  },
];
