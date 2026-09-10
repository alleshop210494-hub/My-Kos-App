import React from 'react';

export default function TenantManagement({ tenants }) {
  return (
    <div>
      <h2>Daftar Penyewa / Penghuni</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#e9ecef', textAlign: 'left' }}>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>
              Nama Penyewa
            </th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>
              Kamar
            </th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>
              No HP / WhatsApp
            </th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>
              Tanggal Masuk
            </th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant) => (
            <tr key={tenant.id}>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>
                {tenant.name}
              </td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>
                {tenant.roomNumber}
              </td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>
                {tenant.phone}
              </td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>
                {tenant.joinDate}
              </td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>
                {tenant.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
