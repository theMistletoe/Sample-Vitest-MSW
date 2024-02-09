/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.spec.{js,ts,jsx,tsx}"],
  },
});