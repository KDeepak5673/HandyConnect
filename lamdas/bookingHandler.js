exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);

  // You'd store this in RDS or DynamoDB
  const booking = {
    userId: requestBody.userId,
    serviceId: requestBody.serviceId,
    date: requestBody.date,
    status: 'pending',
  };

  console.log("Booking received:", booking);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Booking created successfully",
      booking,
    }),
  };
};
