import React from 'react';
import { formatRupiah } from '../../utils/formatters';

export default function PaymentManagement({ payments }) {
  return (
    <div>
      <h2>Riwayat Keuangan & Pembayaran Sewa</h2>
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
              Jumlah
            </th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>
              Bulan
            </th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>
                {payment.tenantName}
              </td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>
                {payment.roomNumber}
              </td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>
                {formatRupiah(payment.amount)}
              </td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>
                {payment.month}
              </td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>
                <span
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background:
                      payment.status === 'Lunas' ? '#d4edda' : '#fff3cd',
                    color: payment.status === 'Lunas' ? '#155724' : '#856404',
                  }}
                >
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
