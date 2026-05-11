const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  driverId:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  pickupLocation: {
    address:    { type: String, required: true },
    latitude:   { type: Number, required: true },
    longitude:  { type: Number, required: true },
  },
  dropLocation: {
    address:    { type: String, required: true },
    latitude:   { type: Number, required: true },
    longitude:  { type: Number, required: true },
  },
  vehicleType:  { type: String, enum: ['Bike','Scooty','Auto','AutoPriority','CabEconomy','CabPremium','CabXL'], required: true },
  fare:         { type: Number, required: true },
  tip:          { type: Number, default: 0 },
  status: {
    type: String,
    enum: ['SEARCHING','ACCEPTED','DRIVER_ARRIVED','ONGOING','COMPLETED','CANCELLED'],
    default: 'SEARCHING'
  },
  pin:          { type: String },   // 4-digit PIN shown to user
  paymentMode:  { type: String, enum: ['CASH','ONLINE'], default: 'CASH' },
  otp:          { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);