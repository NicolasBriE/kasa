import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from './pages/Apropos/Apropos';
import Home from './pages/Home/Home';
import Appartement from './pages/Appartement/Appartement';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/appartement/:id" element={<Appartement />} />
        </Routes>
      </Router>
    </React.StrictMode >
  );
}

export default App;


