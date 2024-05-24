import React from 'react';
import omkLogo from '../assets/img/Omk.png';
import { Link } from 'react-router-dom';
// Header.js
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to='/'><img src={omkLogo} alt="Mi Logo"/></Link></li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/calculator">Calculator</Link></li>
          <li className="nav-item"><Link to="/convertidor">Convertidor</Link></li>
          <li className="nav-item"><Link to="/game">Game</Link></li>
          <li className="nav-item"><Link to="/dragdrop">DragDrop</Link></li>
          <li className="nav-item"><Link to="/weather">Weather</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
