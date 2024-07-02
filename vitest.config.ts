/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "happy-dom",
        setupFiles: "./setup.ts",
        coverage: {
            provider: 'v8',
            include: ['src/**/*.{tsx,js,ts}'],
            exclude: ['src/App.tsx', 'src/main.tsx'],
            all: true,
            // lcovを追加
            reporter: ['html', 'clover', 'text', 'lcov']
        },
        root: '.',
        // vitest-sonar-reporterを追加
        reporters: ['verbose', 'vitest-sonar-reporter'],
        outputFile: 'test-report.xml',
    },
});
