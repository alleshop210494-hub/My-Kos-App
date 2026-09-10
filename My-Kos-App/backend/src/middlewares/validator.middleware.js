const validatorMiddleware = (schema) => {
  return (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        status: 'error',
        message: 'Payload request tidak boleh kosong',
      });
    }
    next();
  };
};

module.exports = validatorMiddleware;
