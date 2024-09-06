import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage'; // Make sure this path is correct
import LoginPage from './Components/Login'; // Assuming you have a LoginPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
