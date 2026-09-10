import React from 'react';

export default function AdminLayout({
  children,
  activeTab,
  setActiveTab,
  onLogout,
}) {
  return (
    <div
      style={{
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
        padding: '30px 20px',
        color: '#0f172a',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          background: '#ffffff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
          border: '1px solid #e2e8f0',
        }}
      >
        <header
          style={{
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '20px',
            marginBottom: '25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                color: '#0f172a',
                fontSize: '26px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
              }}
            >
              Manajemen Kos Pontianak
            </h1>
            <p
              style={{ margin: '6px 0 0', color: '#64748b', fontSize: '14px' }}
            >
              Sistem Pengelolaan Kamar, Penghuni, dan Keuangan Kos Profesional
            </p>
          </div>
          {onLogout && (
            <button
              onClick={onLogout}
              style={{
                padding: '9px 18px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => (e.target.style.background = '#dc2626')}
              onMouseOut={(e) => (e.target.style.background = '#ef4444')}
            >
              Logout
            </button>
          )}
        </header>

        <nav
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '25px',
            borderBottom: '1px solid #f1f5f9',
            paddingBottom: '15px',
          }}
        >
          <button
            onClick={() => setActiveTab('dashboard')}
            style={{
              padding: '10px 20px',
              background: activeTab === 'dashboard' ? '#4f46e5' : '#f1f5f9',
              color: activeTab === 'dashboard' ? 'white' : '#475569',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              boxShadow:
                activeTab === 'dashboard'
                  ? '0 4px 6px -1px rgba(79, 70, 229, 0.2)'
                  : 'none',
            }}
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => setActiveTab('rooms')}
            style={{
              padding: '10px 20px',
              background: activeTab === 'rooms' ? '#4f46e5' : '#f1f5f9',
              color: activeTab === 'rooms' ? 'white' : '#475569',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              boxShadow:
                activeTab === 'rooms'
                  ? '0 4px 6px -1px rgba(79, 70, 229, 0.2)'
                  : 'none',
            }}
          >
            🏢 Kamar Kos
          </button>
          <button
            onClick={() => setActiveTab('tenants')}
            style={{
              padding: '10px 20px',
              background: activeTab === 'tenants' ? '#4f46e5' : '#f1f5f9',
              color: activeTab === 'tenants' ? 'white' : '#475569',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              boxShadow:
                activeTab === 'tenants'
                  ? '0 4px 6px -1px rgba(79, 70, 229, 0.2)'
                  : 'none',
            }}
          >
            👥 Penyewa / Penghuni
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            style={{
              padding: '10px 20px',
              background: activeTab === 'payments' ? '#4f46e5' : '#f1f5f9',
              color: activeTab === 'payments' ? 'white' : '#475569',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              boxShadow:
                activeTab === 'payments'
                  ? '0 4px 6px -1px rgba(79, 70, 229, 0.2)'
                  : 'none',
            }}
          >
            💳 Keuangan & Pembayaran
          </button>
        </nav>

        <main>{children}</main>
      </div>
    </div>
  );
}
