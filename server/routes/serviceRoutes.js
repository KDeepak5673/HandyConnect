const express = require('express');
const router = express.Router();
const { createService, getServices } = require('../controllers/serviceController');
const upload = require('../middleware/upload');

router.post('/', upload.single('image'), createService);
router.get('/', getServices);

module.exports = router;
