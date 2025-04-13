exports.handler = async (event) => {
    try {
      const body = JSON.parse(event.body);
      const { bookingId, userId, amount, paymentMethod } = body;
  
      // Simulate payment processing logic
      const transactionId = `TXN-${Math.floor(Math.random() * 1000000)}`;
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Payment successful!',
          transactionId,
          bookingId,
          userId,
          amount,
          paymentMethod,
          status: 'Paid',
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Payment failed', error: error.message }),
      };
    }
  };
  