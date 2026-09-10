import React from 'react';
import { formatRupiah } from '../../utils/formatters';

export default function DashboardOverview({ rooms, tenants, payments }) {
  const totalRooms = rooms.length;
  const availableRooms = rooms.filter((r) => r.status === 'Tersedia').length;
  const occupiedRooms = totalRooms - availableRooms;
  const totalTenants = tenants.length;

  const currentMonthRevenue = payments
    .filter((p) => p.status === 'Lunas')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <div>
      <h2
        style={{
          margin: '0 0 20px 0',
          fontSize: '20px',
          fontWeight: '600',
          color: '#1e293b',
        }}
      >
        Dashboard Utama
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '30px',
        }}
      >
        <div
          style={{
            background: '#f8fafc',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        >
          <p
            style={{
              margin: '0 0 8px 0',
              fontSize: '14px',
              color: '#64748b',
              fontWeight: '500',
            }}
          >
            Total Kamar
          </p>
          <h3
            style={{
              margin: 0,
              fontSize: '24px',
              color: '#0f172a',
              fontWeight: '700',
            }}
          >
            {totalRooms} Kamar
          </h3>
          <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#10b981' }}>
            {availableRooms} Tersedia, {occupiedRooms} Terisi
          </p>
        </div>

        <div
          style={{
            background: '#f8fafc',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        >
          <p
            style={{
              margin: '0 0 8px 0',
              fontSize: '14px',
              color: '#64748b',
              fontWeight: '500',
            }}
          >
            Total Penghuni Aktif
          </p>
          <h3
            style={{
              margin: 0,
              fontSize: '24px',
              color: '#0f172a',
              fontWeight: '700',
            }}
          >
            {totalTenants} Orang
          </h3>
          <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#4f46e5' }}>
            Penghuni kos terdaftar
          </p>
        </div>

        <div
          style={{
            background: '#f8fafc',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        >
          <p
            style={{
              margin: '0 0 8px 0',
              fontSize: '14px',
              color: '#64748b',
              fontWeight: '500',
            }}
          >
            Pendapatan Lunas
          </p>
          <h3
            style={{
              margin: 0,
              fontSize: '22px',
              color: '#0f172a',
              fontWeight: '700',
            }}
          >
            {formatRupiah(currentMonthRevenue)}
          </h3>
          <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#10b981' }}>
            Akumulasi pembayaran masuk
          </p>
        </div>
      </div>

      <div
        style={{
          background: '#ffffff',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
        }}
      >
        <h3
          style={{
            margin: '0 0 12px 0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#1e293b',
          }}
        >
          Informasi Sistem Kos Pontianak
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: '14px',
            color: '#475569',
            lineHeight: '1.5',
          }}
        >
          Selamat datang kembali di panel administrasi Kos Pontianak. Gunakan
          menu navigasi di atas untuk mengelola data kamar, memantau data
          penyewa, serta memeriksa status pembayaran sewa bulanan secara
          real-time.
        </p>
      </div>
    </div>
  );
}
