const express = require('express')
const consola = require('consola')
const { loadNuxt, build } = require('nuxt')

const openInBrowser = require('./open')
const botsPattern = require('./pattern')

const app = express()
const isDev = process.env.NODE_ENV !== 'production'

const startApp = async () => {
  try {
    // Instantiate nuxt.js
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

    const {
      host = process.env.HOST || '127.0.0.1',
      port = process.env.PORT || 3000
    } = nuxt.options.server

    // Build only in dev mode with hot-reloading
    if (isDev) {
      build(nuxt)
    }

    // Static resource request, direct out request
    app.all('*', (req, res) => {
      // Get user agent from request
      const userAgent = req.headers['user-agent']
      // Determine whether it's a crawler or a browser
      req.headers['ssr-mode'] = !!botsPattern.test(userAgent)

      // Give nuxt middleware to express
      return nuxt.render(req, res)
    })

    app.listen(port, host, () => {
      consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
      })
      // When development auto open browser
      if (isDev) {
        openInBrowser(`http://${host}:${port}`)
      }
    })
  } catch (error) {
    console.error(error.stack)
    process.exit(1)
  }
}

startApp()
