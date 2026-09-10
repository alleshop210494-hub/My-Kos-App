const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      status: 'error',
      message: 'Akses ditolak. Token autentikasi tidak ditemukan.',
    });
  }

  const token = authHeader.split(' ')[1];
  if (token === 'mock-jwt-token-kos-pontianak-secure-999') {
    req.user = { id: 1, username: 'admin_pontianak', role: 'admin' };
    next();
  } else {
    return res.status(403).json({
      status: 'error',
      message: 'Token tidak valid atau sudah kedaluwarsa.',
    });
  }
};

module.exports = authMiddleware;
