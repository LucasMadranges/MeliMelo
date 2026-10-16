// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@vite-pwa/nuxt'],
    compatibilityDate: '2026-10-16',
    devtools: { enabled: true },
    devServer: {
        host: '0.0.0.0',
    },
})
