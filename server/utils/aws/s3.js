const fs = require('fs');
const path = require('path');
const AWS = require('../../config/aws-config');
const { v4: uuidv4 } = require('uuid');

const s3 = new AWS.S3();

const uploadToS3 = async (file) => {
  const fileContent = fs.readFileSync(file.path);
  const fileExt = path.extname(file.originalname);
  const fileName = `${uuidv4()}${fileExt}`;

  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: fileName,
    Body: fileContent,
    ContentType: file.mimetype,
    ACL: 'public-read',
  };

  const data = await s3.upload(params).promise();
  return data.Location; // returns the public URL
};

module.exports = uploadToS3;
