import express from 'express'
import sslRedirect from 'heroku-ssl-redirect'

const options = {
  distPath: '/front/dist',
  htmlFilename: 'index.html',
  localIP: '192.168.1.25',
  usingSSL: false
}

const app = express()

if (options.usingSSL) app.use(sslRedirect())

app.use(express.static(process.cwd() + options.distPath))

app.get('/**', function (req, res) {
  res.sendFile(process.cwd() + options.distPath + '/' + options.htmlFilename)
})

console.log(`http://${options.localIP}:${process.env.PORT}/`)

app.listen(process.env.PORT)