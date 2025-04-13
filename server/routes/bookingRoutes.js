const express = require('express');
const router = express.Router();
const { bookService, getBookings } = require('../controllers/bookingController');

router.post('/', bookService);
router.get('/', getBookings);

module.exports = router;
