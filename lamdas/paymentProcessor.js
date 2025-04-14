const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);

    const { userId, bookingId, amount, paymentMethod, status } = requestBody;

    const paymentRecord = {
      paymentId: `pay_${Date.now()}`,
      userId,
      bookingId,
      amount,
      paymentMethod,
      status: status || 'success',
      timestamp: new Date().toISOString(),
    };

    const params = {
      TableName: 'Payments',
      Item: paymentRecord,
    };

    await docClient.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Payment recorded in DynamoDB successfully",
        payment: paymentRecord,
      }),
    };
  } catch (err) {
    console.error("Payment error:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Payment failed", error: err.message }),
    };
  }
};
