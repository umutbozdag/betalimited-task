import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        components: path.resolve(__dirname, "./src/components"),
        types: path.resolve(__dirname, "./src/types"),
        styles: path.resolve(__dirname, "./src/styles"),
        app: path.resolve(__dirname, "./src/app"),
        utils: path.resolve(__dirname, "./src/utils"),
        pages: path.resolve(__dirname, "./src/pages"),
        hooks: path.resolve(__dirname, "./src/hooks"),
        config: path.resolve(__dirname, "./src/config"),
        assets: path.resolve(__dirname, "./src/assets"),
        api: path.resolve(__dirname, "./src/api"),
      },
    },
    define: {
      "process.env.VITE_API_URL": JSON.stringify(
        mode === "production"
          ? process.env.VITE_API_URL
          : process.env.VITE_API_URL
      ),
    },
  });
};
