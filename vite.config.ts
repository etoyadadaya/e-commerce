import react from "@vitejs/plugin-react-swc";
import {resolve} from "path";
import {defineConfig, splitVendorChunkPlugin} from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig(() => {
    return {
        plugins: [
            react(),
            splitVendorChunkPlugin(),
            eslint({
                exclude: ["**/node_modules/**", "**/packages/**"],
            }),
        ],
        resolve: {
            alias: {
                "@common": resolve(__dirname, "src/common/index.ts"),
                "@components": resolve(__dirname, "src/components/index.ts"),
                "@configs": resolve(__dirname, "src/configs/index.ts"),
                "@contexts": resolve(__dirname, "src/contexts/index.ts"),
                "@helpers": resolve(__dirname, "src/helpers/index.ts"),
                "@hooks": resolve(__dirname, "src/hooks/index.ts"),
                "@pages": resolve(__dirname, "src/pages"),
                "@services": resolve(__dirname, "src/services/index.ts"),
                "@types": resolve(__dirname, "src/types/index.ts"),
            },
        },
        esbuild: {
            jsxFactory: "h",
            jsxFragment: "Fragment",
        },
        server: {
            host: "127.0.0.1",
            port: 666,
            proxy: {
                "/api": {
                    target: "http://127.0.0.1:8000",
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ""),
                }
            },
        },
    };
});