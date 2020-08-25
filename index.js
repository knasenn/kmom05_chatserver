const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

//added time
io.on('connection', socket => {
  socket.on('message', ({ name, message, time }) => {
    io.emit('message', { name, message, time  })
  })
})

http.listen(8333, function() {
  console.log('listening on port 8333')
})
