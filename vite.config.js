import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import { copyFileSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";

// Plugin to copy docs folder to static
const copyDocsPlugin = () => ({
  name: "copy-docs",
  buildStart() {
    const sourceDir = "./docs";
    const destDir = "./static/docs";
    
    // Create destination directory
    mkdirSync(destDir, { recursive: true });
    
    // Copy Blogs-docs folder
    const blogSourceDir = join(sourceDir, "Blogs-docs");
    const blogDestDir = join(destDir, "Blogs-docs");
    mkdirSync(blogDestDir, { recursive: true });
    
    // Copy all markdown files
    const files = readdirSync(blogSourceDir);
    files.forEach(file => {
      if (file.endsWith(".md")) {
        copyFileSync(join(blogSourceDir, file), join(blogDestDir, file));
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), copyDocsPlugin(), mode === "development" && screenGraphPlugin()],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  }
}));
