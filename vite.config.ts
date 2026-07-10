import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    watch: {
      usePolling: process.env.CODEX_SANDBOX === "seatbelt",
    },
  },
});
