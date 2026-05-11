const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const authMiddleware = require('../middleware/auth'); // your existing middleware

// POST /api/orders — create new order
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { pickupLocation, dropLocation, vehicleType, fare, paymentMode } = req.body;
    const pin = Math.floor(1000 + Math.random() * 9000).toString();

    const order = await Order.create({
      userId: req.user.id,
      pickupLocation,
      dropLocation,
      vehicleType,
      fare,
      paymentMode,
      pin,
      status: 'SEARCHING',
    });

    // Notify drivers via socket (see Phase 2)
    const io = req.app.get('io');
    io.emit('new_order', {
      orderId: order._id,
      pickupLocation,
      dropLocation,
      vehicleType,
      fare,
      userId: req.user.id,
    });

    res.status(201).json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH /api/orders/:id/add-tip — extra fare if no driver accepts
router.patch('/:id/add-tip', authMiddleware, async (req, res) => {
  const { tip } = req.body;
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { $inc: { fare: tip }, tip },
    { new: true }
  );
  const io = req.app.get('io');
  io.emit('order_updated', { orderId: order._id, fare: order.fare });
  res.json({ success: true, order });
});

// PATCH /api/orders/:id/status — driver or system updates status
router.patch('/:id/status', authMiddleware, async (req, res) => {
  const { status, driverId } = req.body;
  const update = { status };
  if (driverId) update.driverId = driverId;
  const order = await Order.findByIdAndUpdate(req.params.id, update, { new: true });

  const io = req.app.get('io');
  io.to(`order_${order._id}`).emit('order_status_update', { orderId: order._id, status });
  res.json({ success: true, order });
});

// GET /api/orders/:id — fetch single order (for polling)
router.get('/:id', authMiddleware, async (req, res) => {
  const order = await Order.findById(req.params.id).populate('driverId', 'name phone vehicleNumber');
  res.json({ success: true, order });
});

module.exports = router;