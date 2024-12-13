import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import FeedbackForm from "./components/FeedbackForm";
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          {/* Header Section */}
          <header className="header">
            <h1>Welcome to Your Shopping App</h1>
            <p className="tagline">Explore your favourite products at best prices</p>
          </header>

          {/* Cart Component */}
          <Cart />

          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </main>

          {/* Feedback Form */}
          <FeedbackForm />

          {/* Footer Section */}
          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Your Shopping App. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
