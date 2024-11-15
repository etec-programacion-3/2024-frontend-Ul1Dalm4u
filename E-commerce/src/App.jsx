import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/Login';
import ProductPage from './Components/ProductPage';
import Header from './Components/Header';
import ProductDetailsPage from './Components/ProductDetailsPage';
import axios from 'axios';
import CartPage from './Components/CartPage';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (productId) => {
    setCartItems([...cartItems, productId]); // Agregar producto al carrito
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item !== productId)); // Eliminar producto del carrito
  };

  useEffect(() => {
    // Conéctate al servidor remoto con Axios para obtener los datos
    axios.get('http://localhost:3000/products') // Asegúrate de que la IP y puerto coincidan con tu servidor
      .then(response => {
        console.log(response.data);
        setProducts(response.data); // Asigna los productos obtenidos
      })
      .catch(error => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);

  return (
    <Router>
      {/* El Header solo se renderiza aquí */}
      <Header onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CartPage" element={<CartPage cartItems={cartItems} onRemoveItem={removeFromCart} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<ProductPage searchQuery={searchQuery} />} />
        <Route path="/products" element={<ProductPage searchQuery={searchQuery} />} />
        <Route
          path="/products/:productId"
          element={<ProductDetailsPage products={products} />} // Pasa los productos al componente ProductDetailsPage
        />
      </Routes>
    </Router>
  );
}

export default App;
