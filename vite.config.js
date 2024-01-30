import { defineConfig } from 'vite'

import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
    css: false, // Disable CSS processing in tests
    globals: true, // Include global variables in tests // TypeError: global.beforeEach is not a function
    fakeTimers: true, // Use fake timers in tests
    exclude: ['**/node_modules/**', 'automation'], // Exclude specific paths from tests
    environment: 'jsdom', // Set the testing environment
    setupFiles: ['tests/setupTests.js'], // Specify setup files for tests
    silent: true, // Run tests silently
    coverage: {
      // Code coverage settings
      reporter: ['text', 'json', 'html'], // Specify coverage reporters
      lines: 80, // Minimum percentage of lines covered
      functions: 80, // Minimum percentage of functions covered
      branches: 80, // Minimum percentage of branches covered
      statements: 80, // Minimum percentage of statements covered
      exclude: [], // Exclude specific paths from coverage
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
