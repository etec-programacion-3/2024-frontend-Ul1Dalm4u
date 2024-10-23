import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/Login';
import ProductPage from './Components/ProductPage';
import Header from './Components/Header';
import ProductDetailsPage from './Components/ProductDetailsPage';
import productsData from './Components/data'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Carga los productos desde la base de datos importada
    setProducts(productsData); // Asegúrate de usar productsData
  }, []);

  return (
    <Router>
      <Header onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
