const Service = require('../models/Service');
const uploadToS3 = require('../utils/aws/s3');

const createService = async (req, res) => {
  try {
    const imageUrl = await uploadToS3(req.file);
    const service = await Service.create({ ...req.body, imageUrl });
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getServices = async (req, res) => {
  const services = await Service.find().populate('createdBy');
  res.json(services);
};

module.exports = { createService, getServices };
