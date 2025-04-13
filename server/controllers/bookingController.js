const Booking = require('../models/Booking');
const sendConfirmationEmail = require('../utils/aws/ses');

const bookService = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    await sendConfirmationEmail(req.body.userEmail, 'Booking Confirmed', 'Thanks for booking!');
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getBookings = async (req, res) => {
  const bookings = await Booking.find().populate('service user');
  res.json(bookings);
};

module.exports = { bookService, getBookings };
