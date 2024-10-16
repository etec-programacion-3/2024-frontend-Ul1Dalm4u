import React, { useState } from 'react'; // Combina ambas importaciones de React en una sola
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/Login';
import ProductPage from './Components/ProductPage';
import Header from './Components/Header';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para manejar la búsqueda

  return (
    <Router>
      <Header onSearch={setSearchQuery} /> {/* Pasa el estado de búsqueda al Header */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<ProductPage searchQuery={searchQuery} />} /> {/* Nueva ruta para ProductPage */}
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
