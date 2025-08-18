import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Experiment2/",
  build: {
    outDir: "docs", // เพิ่มบรรทัดนี้
  },
});
