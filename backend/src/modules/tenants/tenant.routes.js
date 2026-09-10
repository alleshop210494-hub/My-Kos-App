const express = require('express');
const TenantController = require('./tenant.controller');

const router = express.Router();

router.get('/', TenantController.getTenants);
router.get('/:id', TenantController.getTenant);
router.post('/', TenantController.addTenant);

module.exports = router;
