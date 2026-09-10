const paymentsData = require('./payment.model');

class PaymentService {
  static getAllPayments() {
    return paymentsData;
  }

  static createPayment(paymentData) {
    const newPayment = {
      id:
        paymentsData.length > 0
          ? paymentsData[paymentsData.length - 1].id + 1
          : 1,
      ...paymentData,
      status: paymentData.status || 'Lunas',
    };
    paymentsData.push(newPayment);
    return newPayment;
  }
}

module.exports = PaymentService;
