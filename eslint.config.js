// .eslintrc.js (or similar)

import js from '@eslint/js'
import globals from 'globals'
import tseslint from '@typescript-eslint/eslint-plugin'

export default [
  js.configs.recommended,
  {
    ignores: ['dist'], // Add more if needed
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module', // If using modules
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      'no-console': ['error'], // No console.log in production
      'no-debugger': ['error'], // No debugger statements
      'no-alert': ['error'],     // No alert()
      'no-empty': ['error', { allowEmptyCatch: true }], // Allow empty catch
      'no-extra-boolean-cast': ['error'],
      'no-extra-semi': ['error'],
      'no-irregular-whitespace': ['error'],
      'no-prototype-builtins': ['error'],
      'no-undef-init': ['error'],
      'no-use-before-define': ['error'],
      'no-var': ['error'],          // Use let and const
      'prefer-const': ['error'],     // Prefer const
      'eqeqeq': ['error', 'always'], // Strict equality
      'curly': ['error', 'all'],     // Always use curly braces

      // TypeScript-specific rules (if applicable)
      '@typescript-eslint/no-explicit-any': ['error' | 'warn'], // Consider starting with "warn"
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        { allowExpressions: true },
      ],
       '@typescript-eslint/no-non-null-assertion': ['error' | 'warn'], // Start with warn, then consider error


      // React rules (if applicable - install eslint-plugin-react)
      'react/jsx-key': ['error'],
      'react/no-danger': ['error'],
      'react/no-direct-mutation-state': ['error'],
      //'react/prop-types': ['error'], // If not using TypeScript
    },
  },
]

