import express from 'express'
//import sslRedirect from 'heroku-ssl-redirect'

const app = express()

//app.use(sslRedirect())

app.use(express.static(process.cwd() + '/front/dist'))

app.get('/**', function (req, res) {
  res.sendFile(process.cwd() + '/front/dist/index.html')
})

console.log(`http://192.168.1.25:${process.env.PORT}/`)

app.listen(process.env.PORT)