// src/components/Layout.jsx
import React, { useState, useEffect, useContext } from 'react';
import ToastContext from '../contexts/ToastContext';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const { toastInfo, setToastInfo } = useContext(ToastContext);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
      <Header theme={theme} setTheme={setTheme} />
      <main className="container mx-auto px-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
