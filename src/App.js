import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Composants/Header';
import Calculator from './Componenets/Calculator/Calculator';
import CurrencyConverter from './Componenets/Convertidor/Convert';
import Game from './Componenets/Game/Game';
import Weather from './Componenets/Weather/Weather';
import DragDrop from './Componenets/DragDrop/DragDrop';
import Home from './Composants/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/convertidor" element={<CurrencyConverter />} />
          <Route path="/game" element={<Game />} />
          <Route path="/dragdrop" element={<DragDrop />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
