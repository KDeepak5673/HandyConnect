exports.handler = async (event) => {
    try {
      const body = JSON.parse(event.body);
  
      const { userId, serviceId, bookingDate, notes } = body;
  
      // Simulate DB booking logic (actual logic would interact with RDS/DynamoDB)
      const bookingId = `BK-${Math.floor(Math.random() * 1000000)}`;
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Booking confirmed!',
          bookingId,
          userId,
          serviceId,
          bookingDate,
          notes,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Booking failed', error: error.message }),
      };
    }
  };
  