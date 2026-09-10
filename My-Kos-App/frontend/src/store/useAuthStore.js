import { useState } from 'react';

export const useAuthStore = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('kos_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('kos_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kos_user');
  };

  return {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };
};
