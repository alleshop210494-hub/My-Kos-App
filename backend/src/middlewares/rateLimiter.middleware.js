const requestCounts = new Map();

const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  const currentTime = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxRequests = 100;

  if (!requestCounts.has(ip)) {
    requestCounts.set(ip, { count: 1, startTime: currentTime });
    return next();
  }

  const clientData = requestCounts.get(ip);
  if (currentTime - clientData.startTime > windowMs) {
    clientData.count = 1;
    clientData.startTime = currentTime;
    return next();
  }

  clientData.count++;
  if (clientData.count > maxRequests) {
    return res.status(429).json({
      status: 'error',
      message:
        'Terlalu banyak permintaan dari IP ini, silakan coba lagi nanti.',
    });
  }

  next();
};

module.exports = rateLimiter;
