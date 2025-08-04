import { Link, useLocation } from 'react-router-dom';
import {useState} from 'react';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Botón hamburguesa */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? 'active' : ''}>
        {location.pathname !== '/' && (
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          </li>
        )}
        <li>
          <Link to="/sedes" onClick={() => setMenuOpen(false)}>Nuestras sedes</Link>
        </li>
        <li>
          <Link to="/profesionales" onClick={() => setMenuOpen(false)}>Profesionales</Link>
        </li>
        <li>
          <Link to="/Planes" onClick={() => setMenuOpen(false)}>Planes</Link>
        </li>
        <li>
          <button className="buy-button">Asociate</button>
        </li>
      </ul>
    </nav>
  );
}