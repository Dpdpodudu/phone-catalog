import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/phone-catalog/', // Замени на точное название твоего репозитория, если оно другое
  plugins: [react()],
});