import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Children from './pages/Children';
import Cart from './pages/Cart';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar 
            searchQuery={searchQuery} 
            onSearchChange={setSearchQuery} 
          />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/men" element={<Men searchQuery={searchQuery} />} />
              <Route path="/women" element={<Women searchQuery={searchQuery} />} />
              <Route path="/children" element={<Children searchQuery={searchQuery} />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </AnimatePresence>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;