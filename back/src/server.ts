import express from 'express'
import sslRedirect from 'heroku-ssl-redirect'
import { createServer } from "node:http";
import { Server } from "socket.io";
import registerSocketHandlers from './socketHandlers'

const options = {
  distPath: '/front/dist',
  htmlFilename: 'index.html',
  localIP: '192.168.1.25',
  usingSSL: false
}

const app = express()
const server = createServer(app);
const io = new Server(server);

if (options.usingSSL) app.use(sslRedirect())

app.use(express.static(process.cwd() + options.distPath))

app.get('/**', function (req, res) {
  res.sendFile(process.cwd() + options.distPath + '/' + options.htmlFilename)
})

io.on('connection', (socket) => {
  registerSocketHandlers(io, socket)
})

server.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/`);
});
