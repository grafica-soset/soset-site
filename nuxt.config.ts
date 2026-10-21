// Site estático da Soset, publicado no GitHub Pages (nuxt generate).
// No Pages o site fica em /soset-site/; NUXT_APP_BASE_URL troca a base no build do workflow.
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Soset',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Soset — sistema de gestão para a indústria gráfica.' },
      ],
    },
  },
  nitro: {
    prerender: { routes: ['/'] },
  },
})
