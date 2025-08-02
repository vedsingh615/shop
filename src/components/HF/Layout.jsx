// src/components/HF/Layout.jsx

import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { CartProvider } from '../pages/CartContext'; // ✅ FIXED path

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <CartProvider>
      <Navbar setSearchTerm={setSearchTerm} />
      <Outlet context={{ searchTerm }} />
      <Footer />
    </CartProvider>
  );
};

export default Layout;
