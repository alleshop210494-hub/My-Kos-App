module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'rahasia-kos-pontianak-super-aman',
  jwtExpiresIn: '1d',
  bcryptSaltRounds: 10,
};
