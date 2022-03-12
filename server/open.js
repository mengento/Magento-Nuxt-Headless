const open = require('open')
const execa = require('execa')
const commandExists = require('command-exists')
const browser = require('./browser')

const { appNames, defaultBrower } = browser

const openInBrowser = async (url) => {
  if (['win32', 'darwin'].includes(process.platform)) {
    if (defaultBrower === 'microsoft_edge' && process.platform === 'win32') {
      await open(`microsoft-edge:${url}`)
    } else {
      await open(url, {
        app: [appNames[process.platform].defaultBrower]
      })
    }
  } else {
    try {
      const xdgOpenExists = commandExists('xdg-open')
      if (!xdgOpenExists) {
        throw new Error('xdg-open does not exist')
      }
      await execa('xdg-open', [url])
    } catch (_) {
      throw new Error(
        `Unable to open your browser automatically. Please open the following URI in your browser:\n\n${url}\n\n`
      )
    }
  }
}

module.exports = openInBrowser
