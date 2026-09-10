import { useState } from 'react';

export const useAuthStore = () => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('kos_user');
      if (!savedUser || savedUser === 'undefined' || savedUser === 'null') {
        return null;
      }
      return JSON.parse(savedUser);
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      localStorage.removeItem('kos_user');
      return null;
    }
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