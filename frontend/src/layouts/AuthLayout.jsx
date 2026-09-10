import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        backgroundColor: '#f4f6f9',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: 'white',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, color: '#2c3e50', fontSize: '22px' }}>
            Admin Login
          </h2>
          <p style={{ margin: '5px 0 0', color: '#7f8c8d', fontSize: '14px' }}>
            Aplikasi Kos Pontianak
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
