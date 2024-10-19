import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Export the Vite configuration
export default defineConfig({
  // Build options
  build: {
    rollupOptions: {
      output: {
        // Custom chunking logic
        manualChunks(id) {
          // Check if the module is from node_modules
          if (id.includes('node_modules')) {
            // Create a chunk for each npm package
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
  },
  // Base URL for the project
  base: "/",
  // Plugins to be used
  plugins: [react()],
});