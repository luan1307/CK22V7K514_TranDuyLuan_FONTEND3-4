// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/Tr%C3%A2%CC%80n%20Duy%20Lu%C3%A2n/OneDrive/M%C3%A1y%20t%C3%ADnh/CK22V7K514_Tr%E1%BA%A7n%20Duy%20Lu%C3%A2n/FONTEND/contacbook-frontend/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Tr%C3%A2%CC%80n%20Duy%20Lu%C3%A2n/OneDrive/M%C3%A1y%20t%C3%ADnh/CK22V7K514_Tr%E1%BA%A7n%20Duy%20Lu%C3%A2n/FONTEND/contacbook-frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Tr%C3%A2%CC%80n%20Duy%20Lu%C3%A2n/OneDrive/M%C3%A1y%20t%C3%ADnh/CK22V7K514_Tr%E1%BA%A7n%20Duy%20Lu%C3%A2n/FONTEND/contacbook-frontend/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue()
  ],
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUclx1MDBFMlx1MDMwMG4gRHV5IEx1XHUwMEUyblxcXFxPbmVEcml2ZVxcXFxNXHUwMEUxeSB0XHUwMEVEbmhcXFxcQ0syMlY3SzUxNF9Uclx1MUVBN24gRHV5IEx1XHUwMEUyblxcXFxGT05URU5EXFxcXGNvbnRhY2Jvb2stZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFRyXHUwMEUyXHUwMzAwbiBEdXkgTHVcdTAwRTJuXFxcXE9uZURyaXZlXFxcXE1cdTAwRTF5IHRcdTAwRURuaFxcXFxDSzIyVjdLNTE0X1RyXHUxRUE3biBEdXkgTHVcdTAwRTJuXFxcXEZPTlRFTkRcXFxcY29udGFjYm9vay1mcm9udGVuZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVHIlQzMlQTIlQ0MlODBuJTIwRHV5JTIwTHUlQzMlQTJuL09uZURyaXZlL00lQzMlQTF5JTIwdCVDMyVBRG5oL0NLMjJWN0s1MTRfVHIlRTElQkElQTduJTIwRHV5JTIwTHUlQzMlQTJuL0ZPTlRFTkQvY29udGFjYm9vay1mcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDEsXG4gICAgcHJveHk6IHtcbiAgICAgIFwiL2FwaVwiOiB7XG4gICAgICB0YXJnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiLFxuICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbiAgXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0Z0IsU0FBUyxlQUFlLFdBQVc7QUFFL2lCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUhtUyxJQUFNLDJDQUEyQztBQU1wVyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsRUFDTjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
