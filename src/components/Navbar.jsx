import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <ul>
        {location.pathname !== '/' && (
          <li><Link to="/">Inicio</Link></li>
        )}
        <li><Link to="/sedes">Nuestras sedes</Link></li>
        <li><Link to="/profesionales">Profesionales</Link></li>
        <li><Link to="/Planes">Planes</Link></li>
        <li><button className="buy-button">Asociate</button></li>
      </ul>
    </nav>
  );
}
