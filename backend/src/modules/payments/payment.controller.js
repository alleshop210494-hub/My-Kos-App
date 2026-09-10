const PaymentService = require('./payment.service');

class PaymentController {
  static getPayments(req, res, next) {
    try {
      const payments = PaymentService.getAllPayments();
      res.status(200).json({ status: 'success', data: payments });
    } catch (error) {
      next(error);
    }
  }

  static addPayment(req, res, next) {
    try {
      const { tenantName, roomNumber, amount, month, status } = req.body;
      if (!tenantName || !roomNumber || !amount || !month) {
        return res
          .status(400)
          .json({ status: 'error', message: 'Data pembayaran tidak lengkap' });
      }
      const newPayment = PaymentService.createPayment({
        tenantName,
        roomNumber,
        amount,
        month,
        status,
      });
      res
        .status(201)
        .json({
          status: 'success',
          message: 'Pembayaran berhasil dicatat',
          data: newPayment,
        });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PaymentController;
