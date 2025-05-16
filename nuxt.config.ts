// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',
  content: {
    highlight: {
      langs: ['c', 'cpp', 'sql'],
    },
    markdown: {
      remarkPlugins: [
        'remark-math',
      ],
      rehypePlugins: {
        'rehype-katex': {
          output: 'html',
        },
      },
    },
  },
});
