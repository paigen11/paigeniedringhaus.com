import eslintPluginAstro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  // Global ignores
  {
    ignores: [
      'dist/',
      '.astro/',
      '.cache/', // Gatsby cache
      'node_modules/',
      'src-gatsby/**/*', // Ignore legacy Gatsby code
      'public/',
      '*.config.js',
      '*.config.mjs',
      'gatsby-*.js', // Gatsby config files
      'src/data/**/*.js', // Ignore src/data JS files (will convert to TS later)
    ],
  },

  // Base recommended rules
  js.configs.recommended,

  // TypeScript support for .ts files
  ...tseslint.configs.recommended,

  // Astro files configuration
  {
    files: ['**/*.astro'],
    plugins: {
      astro: eslintPluginAstro,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      ...eslintPluginAstro.configs.recommended.rules,
      // Override any Astro-specific rules here if needed
    },
  },

  // Custom rules for all files
  {
    rules: {
      // Turn off rules that are too strict for migration
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
