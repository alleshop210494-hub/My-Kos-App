// src/layouts/AdminLayout.jsx
import React, { useState } from 'react';

export default function AdminLayout({ children, activeTab, setActiveTab, onLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" /><rect x="14" y="3" width="7" height="5" /><rect x="14" y="12" width="7" height="9" /><rect x="3" y="16" width="7" height="5" /></svg>
      )
    },
    { 
      id: 'rooms', 
      label: 'Manajemen Kamar', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
      )
    },
    { 
      id: 'tenants', 
      label: 'Data Penghuni', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      )
    },
    { 
      id: 'payments', 
      label: 'Catatan Keuangan', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
      )
    }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', backgroundColor: '#f4f6f4', color: '#0f172a' }}>
      {/* Sidebar Tosca & Putih Tulang */}
      <aside style={{ 
        width: '260px', 
        backgroundColor: '#ffffff', 
        borderRight: '1px solid #e2e8f0', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        padding: '24px 16px', 
        position: 'fixed', 
        top: 0, 
        bottom: 0, 
        left: 0, 
        zIndex: 50, 
        boxShadow: '4px 0 24px rgba(0, 0, 0, 0.02)',
        transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div>
          {/* Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px 24px 12px', borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#fff', fontSize: '14px', boxShadow: '0 4px 12px rgba(13, 148, 136, 0.25)' }}>
                KP
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.01em' }}>KosPontianak</div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Executive Suite</div>
              </div>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '16px', padding: '4px' }}
              title="Sembunyikan Sidebar"
            >
              ✕
            </button>
          </div>

          {/* Navigation Menu */}
          <div style={{ marginTop: '24px' }}>
            <div style={{ fontSize: '10px', fontWeight: '600', textTransform: 'uppercase', color: '#94a3b8', padding: '0 12px 8px 12px', letterSpacing: '0.1em' }}>Menu Utama</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      width: '100%',
                      padding: '11px 14px',
                      backgroundColor: isActive ? '#f0fdfa' : 'transparent',
                      color: isActive ? '#0f766e' : '#475569',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontWeight: isActive ? '600' : '500',
                      fontSize: '13px',
                      textAlign: 'left',
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.backgroundColor = '#f8fafc';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <span style={{ color: isActive ? '#0d9488' : '#64748b', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* User Profile / Footer Box */}
        <div style={{ backgroundColor: '#fcfcfd', border: '1px solid #e2e8f0', padding: '14px', borderRadius: '12px', transition: 'all 0.2s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #0d9488, #2dd4bf)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600' }}>A</div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#0f172a' }}>Administrator</div>
                <div style={{ fontSize: '10px', color: '#16a34a', fontWeight: '500' }}>● Online Server</div>
              </div>
            </div>
          </div>
          {onLogout && (
            <button
              onClick={onLogout}
              style={{
                width: '100%',
                padding: '8px 10px',
                backgroundColor: '#ffffff',
                color: '#dc2626',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              Keluar Sesi
            </button>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ marginLeft: isSidebarOpen ? '260px' : '0px', flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f4', transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
        {/* Header */}
        <header style={{ height: '70px', borderBottom: '1px solid #e2e8f0', backgroundColor: 'rgba(244, 246, 244, 0.85)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 36px', position: 'sticky', top: 0, zIndex: 40, transition: 'all 0.2s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {!isSidebarOpen && (
              <button 
                onClick={() => setIsSidebarOpen(true)}
                style={{ 
                  background: '#ffffff', 
                  border: '1px solid #cbd5e1', 
                  borderRadius: '8px', 
                  padding: '6px 12px', 
                  cursor: 'pointer', 
                  fontSize: '13px', 
                  fontWeight: '600', 
                  color: '#0d9488',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)' 
                }}
              >
                ☰ Menu
              </button>
            )}
            <h1 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'rooms' && 'Manajemen Kamar'}
              {activeTab === 'tenants' && 'Data Penghuni'}
              {activeTab === 'payments' && 'Catatan Keuangan'}
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', backgroundColor: '#f0fdfa', border: '1px solid #ccfbf1', borderRadius: '8px', fontSize: '12px', color: '#0f766e', fontWeight: '500' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0d9488', display: 'inline-block' }}></span>
              <span>Pontianak Node Active</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ padding: '36px', flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
}