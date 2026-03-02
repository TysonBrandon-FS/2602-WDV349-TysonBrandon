import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import HotelsPage from './pages/HotelsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
import LoginPage from './pages/LoginPage';

function AppContent() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, cartId: Date.now() }]);
    navigate('/cart');
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id && item.cartId !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <Header
        onCart={() => navigate('/cart')}
        onLogin={() => navigate('/login')}
      />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/flights" element={<FlightsPage onAddToCart={addToCart} />} />
        <Route path="/hotels" element={<HotelsPage onAddToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} onRemoveItem={removeFromCart} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cartItems} onClearCart={clearCart} />}
        />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
