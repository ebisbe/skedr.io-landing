const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/now-ui-kit.scss',
    '@/assets/css/demo.css',
    '@/assets/css/montserrat.css',
    'devices.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    /*'~/plugins/google-maps'*/
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    //'@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    //['bootstrap-vue/nuxt', { css: false }]
    ['@nuxtjs/google-analytics']
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  'google-analytics': {
    id: 'UA-53011336-4',
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    }
  },

  generate: {
    minify: {
      removeOptionalTags: false
    }
  },
  vendor: ['image-webpack-loader'],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: {
      allChunks: true
    },

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

      config.module.rules.forEach(rule => {
        if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg)$/') {
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: 'img/[name].[hash:7].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: '65-90',
                  speed: 1,
                  verbose: true
                },
                webp: {
                  quality: 75
                }
              }
            }
          ]
          delete rule.loader
          delete rule.options
        }
      })
    }
  }
}
