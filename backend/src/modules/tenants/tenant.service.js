const tenantsData = require('./tenant.model');

class TenantService {
  static getAllTenants() {
    return tenantsData;
  }

  static getTenantById(id) {
    return tenantsData.find((t) => t.id === parseInt(id));
  }

  static createTenant(tenantData) {
    const newTenant = {
      id:
        tenantsData.length > 0 ? tenantsData[tenantsData.length - 1].id + 1 : 1,
      ...tenantData,
      joinDate: tenantData.joinDate || new Date().toISOString().split('T')[0],
      status: tenantData.status || 'Aktif',
    };
    tenantsData.push(newTenant);
    return newTenant;
  }
}

module.exports = TenantService;
