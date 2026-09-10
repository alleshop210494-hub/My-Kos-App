const express = require('express');
const PaymentController = require('./payment.controller');

const router = express.Router();

router.get('/', PaymentController.getPayments);
router.post('/', PaymentController.addPayment);

module.exports = router;
