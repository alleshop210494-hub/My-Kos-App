const usersData = require('./auth.model');

class AuthService {
  static authenticate(username, password) {
    const user = usersData.find(
      (u) => u.username === username && u.password === password
    );
    if (!user) {
      return null;
    }
    // Return user info without password
    const { password: _, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      token: 'mock-jwt-token-kos-pontianak-secure-999',
    };
  }
}

module.exports = AuthService;
