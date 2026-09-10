import React, { useState, useEffect } from 'react';
import api from './services/api';
import { useAuthStore } from './store/useAuthStore';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';
import LoginForm from './features/auth/LoginForm';
import DashboardOverview from './features/dashboard/DashboardOverview';
import RoomManagement from './features/rooms/RoomManagement';
import TenantManagement from './features/tenants/TenantManagement';
import PaymentManagement from './features/payments/PaymentManagement';

export default function App() {
  const { isAuthenticated, login, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [rooms, setRooms] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const [roomRes, tenantRes, paymentRes] = await Promise.all([
        api.get('/rooms'),
        api.get('/tenants'),
        api.get('/payments'),
      ]);
      setRooms(roomRes.data.data);
      setTenants(tenantRes.data.data);
      setPayments(paymentRes.data.data);
      setError('');
    } catch (err) {
      setError('Gagal memuat data dari server backend.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <AuthLayout>
        <LoginForm onLoginSuccess={(userData) => login(userData)} />
      </AuthLayout>
    );
  }

  return (
    <AdminLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      onLogout={logout}
    >
      {error && (
        <div
          style={{
            background: '#fee2e2',
            color: '#991b1b',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '20px',
            border: '1px solid #fecaca',
          }}
        >
          {error}
        </div>
      )}
      {loading && <p style={{ color: '#64748b' }}>Memuat data sistem...</p>}

      {!loading && activeTab === 'dashboard' && (
        <DashboardOverview
          rooms={rooms}
          tenants={tenants}
          payments={payments}
        />
      )}

      {!loading && activeTab === 'rooms' && (
        <RoomManagement rooms={rooms} onRoomAdded={fetchData} />
      )}

      {!loading && activeTab === 'tenants' && (
        <TenantManagement tenants={tenants} />
      )}

      {!loading && activeTab === 'payments' && (
        <PaymentManagement payments={payments} />
      )}
    </AdminLayout>
  );
}
