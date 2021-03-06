import pkg from './package'
require('dotenv').config()
const { APIKEY, AUTHDOMAIN, DATABASEURL, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID } = process.env

if (process.browser) {
  require('@editorjs/editorjs')
}

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Vibur&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'href="https://fonts.googleapis.com/css?family=Unica+One&display=swap"'
      }
    ]
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],

  styleResources: {
    scss: [
      '~/assets/config/_var.scss',
      '~/assets/config/_typography.scss',
      '~/assets/config/_function.scss'
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/basic.scss', '@fortawesome/fontawesome-free/css/all.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-material',
    '~/plugins/firebase',
    '~/plugins/vue-drawer-layout',
    '~/plugins/sanitize-html'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  env: {
    APIKEY,
    AUTHDOMAIN,
    DATABASEURL,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGSENDERID,
    APPID,
    baseUrl: process.env.BASE_URL || 'https://stayonair.jp/'
  },
  router: {
    middleware: ['authenticated']
  }
}
