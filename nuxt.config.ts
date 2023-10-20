// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["~/assets/custom.scss", "@fortawesome/fontawesome-svg-core/styles.css"],
  plugins: [
    { src: "~/plugins/bootstrap.js", mode: "client" },
    { src: "~/plugins/fontawesome.js", mode: "client" },
  ],
  modules: ["@pinia/nuxt"],
});