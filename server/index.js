const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });
app.set('io', io);

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // User joins their own order room once order is created
  socket.on('join_order', (orderId) => {
    socket.join(`order_${orderId}`);
  });

  // Driver accepts the order
  socket.on('driver_accept', async ({ orderId, driverId, driverDetails }) => {
    const Order = require('./src/models/Order');
    await Order.findByIdAndUpdate(orderId, { status: 'ACCEPTED', driverId });
    io.to(`order_${orderId}`).emit('driver_assigned', driverDetails);
  });

  // Driver location update (for live tracking)
  socket.on('driver_location', ({ orderId, lat, lng }) => {
    io.to(`order_${orderId}`).emit('driver_location_update', { lat, lng });
  });

  socket.on('disconnect', () => console.log('Client disconnected'));
});

httpServer.listen(process.env.PORT || 5000);