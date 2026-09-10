const TenantService = require('./tenant.service');

class TenantController {
  static getTenants(req, res, next) {
    try {
      const tenants = TenantService.getAllTenants();
      res.status(200).json({ status: 'success', data: tenants });
    } catch (error) {
      next(error);
    }
  }

  static getTenant(req, res, next) {
    try {
      const tenant = TenantService.getTenantById(req.params.id);
      if (!tenant) {
        return res
          .status(404)
          .json({ status: 'error', message: 'Penyewa tidak ditemukan' });
      }
      res.status(200).json({ status: 'success', data: tenant });
    } catch (error) {
      next(error);
    }
  }

  static addTenant(req, res, next) {
    try {
      const { name, roomNumber, phone } = req.body;
      if (!name || !roomNumber || !phone) {
        return res
          .status(400)
          .json({
            status: 'error',
            message: 'Nama, nomor kamar, dan nomor HP wajib diisi',
          });
      }
      const newTenant = TenantService.createTenant({ name, roomNumber, phone });
      res
        .status(201)
        .json({
          status: 'success',
          message: 'Penyewa berhasil ditambahkan',
          data: newTenant,
        });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TenantController;
