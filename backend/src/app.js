const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('./modules/auth/auth.routes');
const roomRoutes = require('./modules/rooms/room.routes');
const tenantRoutes = require('./modules/tenants/tenant.routes');
const paymentRoutes = require('./modules/payments/payment.routes');

const rateLimiter = require('./middlewares/rateLimiter.middleware');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

// Security & Global Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(rateLimiter);

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/rooms', roomRoutes);
app.use('/api/v1/tenants', tenantRoutes);
app.use('/api/v1/payments', paymentRoutes);

// Health Check Route
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API Kos Pontianak berjalan dengan aman dan lancar',
    timestamp: new Date().toISOString(),
  });
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'Endpoint tidak ditemukan',
  });
});

// Global Error Handler Middleware
app.use(errorMiddleware);

module.exports = app;
