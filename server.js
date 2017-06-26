const next = require('next')
const express = require('express')
const { parse } = require('url')
const { join } = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const rootStaticFiles = [
      '/robots.txt',
      '/sitemap.xml',
      '/favicon.ico'
    ]
    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, 'static', parsedUrl.pathname)
      app.serveStatic(req, res, path)
    } else {
      handle(req, res, parsedUrl)
    }
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})