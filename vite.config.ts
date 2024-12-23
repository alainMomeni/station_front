import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig, Plugin } from "vite";

const __dirname = path.resolve();
const root = path.resolve(__dirname, './src');

export default defineConfig({
  plugins: [react()] as unknown as Plugin[],
  resolve: {
    alias: {
      '@': path.resolve(root),
      '@public': path.resolve(__dirname, './public'),
      '@middleware': path.resolve(root, './middleware.ts'),
      '@foundry': path.resolve(root, './foundry'),
      '@app': path.resolve(root, './app'),
      '@utils': path.resolve(root, './utils'),
      '@components': path.resolve(root, './components'),
      '@static': path.resolve(root, './static'),
      '@hooks': path.resolve(root, './hooks'),
      '@states': path.resolve(root, './states'),
      '@lib': path.resolve(root, './lib'),
      '@assets': path.resolve(root, './assets'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // Proxy configuration to handle CORS in development
      '/api': {
        target: 'http://localhost:8055',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'http://localhost:8055',
        changeOrigin: true,
        secure: false,
      },
      '/items': {
        target: 'http://localhost:8055',
        changeOrigin: true,
        secure: false,
      },
      '/users': {
        target: 'http://localhost:8055',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
