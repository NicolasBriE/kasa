import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from './pages/Apropos/Apropos';
import Home from './pages/Home/Home';
import Appartement from './pages/Appartement/Appartement';
import Error404 from './pages/Error404/Error404'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/appartement/:id" element={<Appartement />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </React.StrictMode >
  );
}

export default App;


