const AWS = require('../../config/aws-config');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const logUserAction = async ({ userId, actionType, metadata }) => {
  const params = {
    TableName: process.env.DYNAMO_TABLE,
    Item: {
      logId: `${userId}-${Date.now()}`,
      userId,
      actionType, // e.g., 'VIEW_SERVICE'
      metadata,   // any JSON (e.g., { serviceId: "abc123" })
      timestamp: new Date().toISOString(),
    },
  };

  return dynamoDB.put(params).promise();
};

module.exports = logUserAction;
