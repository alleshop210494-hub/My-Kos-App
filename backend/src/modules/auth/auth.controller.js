const AuthService = require('./auth.service');

class AuthController {
  static login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res
          .status(400)
          .json({
            status: 'error',
            message: 'Username dan password wajib diisi',
          });
      }

      const result = AuthService.authenticate(username, password);
      if (!result) {
        return res
          .status(401)
          .json({ status: 'error', message: 'Username atau password salah' });
      }

      res.status(200).json({
        status: 'success',
        message: 'Login berhasil',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
