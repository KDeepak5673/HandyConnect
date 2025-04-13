const AWS = require('../../config/aws-config');

const ses = new AWS.SES({ region: process.env.AWS_REGION });

const sendEmail = async ({ toEmail, subject, message }) => {
  const params = {
    Source: process.env.SES_VERIFIED_EMAIL,
    Destination: {
      ToAddresses: [toEmail],
    },
    Message: {
      Subject: { Data: subject },
      Body: {
        Text: { Data: message },
      },
    },
  };

  return ses.sendEmail(params).promise();
};

module.exports = sendEmail;
