const AWS = require('../../config/aws-config');

const sns = new AWS.SNS({ region: process.env.AWS_REGION });

const sendSMS = async ({ phoneNumber, message }) => {
  const params = {
    Message: message,
    PhoneNumber: phoneNumber, // E.g. +919876543210
  };

  return sns.publish(params).promise();
};

module.exports = sendSMS;
