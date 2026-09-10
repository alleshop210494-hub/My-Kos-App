// src/features/dashboard/DashboardOverview.jsx
import React from 'react';
import { formatRupiah } from '../../utils/formatters';

export default function DashboardOverview({ rooms = [], tenants = [], payments = [] }) {
  const totalRooms = rooms.length;
  const availableRooms = rooms.filter(r => r.status === 'Tersedia').length;
  const occupiedRooms = totalRooms - availableRooms;
  const totalTenants = tenants.length;
  
  const currentMonthRevenue = payments
    .filter(p => p.status === 'Lunas')
    .reduce((acc, curr) => acc + Number(curr.amount || 0), 0);

  const occupancyRate = totalRooms > 0 ? Math.round((occupiedRooms / totalRooms) * 100) : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* KPI Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '20px' }}>
        
        {/* Card 1 */}
        <div style={{ backgroundColor: '#ffffff', padding: '22px 24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b' }}>Total Unit Kamar</span>
            <span style={{ padding: '3px 8px', backgroundColor: '#f0fdfa', color: '#0f766e', borderRadius: '6px', fontSize: '11px', fontWeight: '600', border: '1px solid #ccfbf1' }}>Aktif</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#0f172a', margin: 0, letterSpacing: '-0.03em' }}>{totalRooms}</h2>
            <span style={{ fontSize: '12px', color: '#0d9488', fontWeight: '600' }}>{occupiedRooms} terisi</span>
          </div>
          <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>{availableRooms} unit siap disewakan</p>
        </div>

        {/* Card 2 */}
        <div style={{ backgroundColor: '#ffffff', padding: '22px 24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b' }}>Penghuni Terdaftar</span>
            <span style={{ padding: '3px 8px', backgroundColor: '#f0fdfa', color: '#0f766e', borderRadius: '6px', fontSize: '11px', fontWeight: '600', border: '1px solid #ccfbf1' }}>Stabil</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#0f172a', margin: 0, letterSpacing: '-0.03em' }}>{totalTenants}</h2>
            <span style={{ fontSize: '12px', color: '#0d9488', fontWeight: '600' }}>Orang</span>
          </div>
          <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>Penghuni kos aktif saat ini</p>
        </div>

        {/* Card 3 */}
        <div style={{ backgroundColor: '#ffffff', padding: '22px 24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b' }}>Total Pendapatan</span>
            <span style={{ padding: '3px 8px', backgroundColor: '#f0fdfa', color: '#0f766e', borderRadius: '6px', fontSize: '11px', fontWeight: '600', border: '1px solid #ccfbf1' }}>Lunas</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', margin: 0, letterSpacing: '-0.03em' }}>{formatRupiah(currentMonthRevenue)}</h2>
          </div>
          <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>Akumulasi kas sewa kos</p>
        </div>

        {/* Card 4 */}
        <div style={{ backgroundColor: '#ffffff', padding: '22px 24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b' }}>Tingkat Okupansi</span>
            <span style={{ padding: '3px 8px', backgroundColor: '#f0fdfa', color: '#0f766e', borderRadius: '6px', fontSize: '11px', fontWeight: '600', border: '1px solid #ccfbf1' }}>Rasio</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#0f172a', margin: 0, letterSpacing: '-0.03em' }}>{occupancyRate}%</h2>
            <span style={{ fontSize: '12px', color: '#0d9488', fontWeight: '600' }}>Efektif</span>
          </div>
          <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>Persentase keterisian kamar</p>
        </div>

      </div>

      {/* Main Grid Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        
        {/* Left Analytics Box */}
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: 0, letterSpacing: '-0.01em' }}>Analisis & Statistik Kos</h3>
              <p style={{ fontSize: '13px', color: '#64748b', margin: '3px 0 0 0' }}>Performa operasional dan sebaran unit</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0d9488' }}></span> Terisi
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></span> Tersedia
              </div>
            </div>
          </div>
          
          <div style={{ padding: '48px 24px', backgroundColor: '#f8fafc', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>Modul Visualisasi VIP Aktif</div>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0, maxWidth: '380px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5' }}>
              Mengelola {totalRooms} kamar dengan rincian {occupiedRooms} unit terisi penuh di kawasan Pontianak dengan tema putih tulang & hijau tosca yang elegan.
            </p>
          </div>
        </div>

        {/* Right Distribution Box */}
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0', letterSpacing: '-0.01em' }}>Distribusi Kamar</h3>
          <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 20px 0' }}>Status real-time unit properti</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '14px 16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>Kamar Tersedia</div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>Siap huni</div>
              </div>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f766e', padding: '2px 8px', backgroundColor: '#f0fdfa', borderRadius: '6px', border: '1px solid #ccfbf1' }}>{availableRooms}</span>
            </div>

            <div style={{ padding: '14px 16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>Kamar Terisi</div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>Berpenghuni</div>
              </div>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f766e', padding: '2px 8px', backgroundColor: '#f0fdfa', borderRadius: '6px', border: '1px solid #ccfbf1' }}>{occupiedRooms}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}