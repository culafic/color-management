import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  test: {
    environment: "jsdom",
  },
});
