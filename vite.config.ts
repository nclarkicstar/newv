import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base URL to the name of your GitHub repository
  base: "/pushme/",
  plugins: [react()],
  build: {
    // When using TypeScript, ensure the outDir is set to the appropriate directory
    outDir: "dist",
    // Add any other build-specific configurations here
    rollupOptions: {
      // If you have additional configuration for rollup, it can be added here
    },
  },
  resolve: {
    // If you're using aliases, you should define them here
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // Include any other Vite-specific configurations below
});
