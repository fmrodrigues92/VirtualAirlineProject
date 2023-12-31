import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
Ws.io.on('connection', (socket) => {
  socket.emit('connected', 'Hello World!')

  socket.on('my other event', (data) => {
    console.log(data)
  })

  socket.on('message', (data) => {
    socket.emit('message', data)
  })
})
