import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true,
  app: {
    // baseURL: "/trezo-bs/",
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
        },
      ],
    },
  },

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "swiper/css",
    "swiper/css/pagination",
    "swiper/css/navigation",
    "quill/dist/quill.snow.css",
    "/assets/css/sidebar-menu.css",
    "/assets/css/simplebar.css",
    "/assets/css/remixicon.css",
    "/assets/scss/style.css",
  ],

  plugins: [
    "~/plugins/apexcharts.client.ts",
    "~/plugins/vue-quill.js",
    "~/plugins/bootstrap.client.ts",
  ],
  modules: ["@bootstrap-vue-next/nuxt", "nuxt-swiper", "nuxt-feather-icons"],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.toLowerCase() === "script",
    },
  },
  nitro: {
        prerender: {
      crawlLinks: true,
      routes: ['/authentication/login', '/authentication/register'],
    },
       preset: "vercel",
    },
  runtimeConfig: {
        MONGO_URI: process.env.MONGO_URI,
        jwtSecret: process.env.JWT_SECRET || 'defaultSecretKey', // for server-side
        public: {}, // for client-side if needed
      },
   
  pages: true,
  components: true,
  compatibilityDate: "2025-01-31",
});

