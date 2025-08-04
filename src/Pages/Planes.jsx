import './Planes.css';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';


export default function Planes() {
    return (
      <>
        <Navbar />
  
        <div className="planes-section">
          <div className="planes-bg"></div> {/* Fondo animado */}
  
          <div className="planes-content" style={{ paddingTop: '120px' }}>
            <h1 className="planes-header">Elegí tu plan mensual</h1>
            <div className="planes-cards">
              {/* Plan Pro */}
              <div className="plan-card pro">
                <span className="plan-label">MENSUAL</span>
                <h2 className="plan-title">XT PRO</h2>
                <p className="plan-price">$60.000 <span>/mes</span></p>
                <p className="plan-benef">¡Accedé a +650 sedes!</p>
                <button className="btn red">ASOCIATE</button>
                <hr />
                <div className="plan-access">
                  <p>Podés acceder a:</p>
                  <div className="badge-row">
                    <span className="badge yellow">Flex</span>
                    <span className="badge red">Pro</span>
                  </div>
                  <ul>
                    <li>✓ Acceso a Indoor/Outdoor</li>
                    <li>✓ Acceso Online</li>
                    <li>✓ Plan nutricional</li>
                  </ul>
                </div>
              </div>
  
              {/* Plan Flex */}
              <div className="plan-card flex">
                <span className="plan-label">MENSUAL</span>
                <div className="plan-new">Nuevo</div>
                <h2 className="plan-title">XT FLEX</h2>
                <p className="plan-price">$39.000 <span>/mes</span></p>
                <p className="plan-benef">Administrá tu membresía</p>
                <p className="plan-note">* Acceso libre a sedes FLEX y con costo adicional a otras</p>
                <button className="btn yellow">ASOCIATE</button>
                <hr />
                <div className="plan-access">
                  <p>Podés acceder a:</p>
                  <div className="badge-row">
                    <span className="badge yellow">Flex</span>
                  </div>
                  <ul>
                    <li>✓ Acceso a Indoor/Outdoor</li>
                    <li>✓ Acceso Online</li>
                  </ul>
                </div>
              </div>
  
              {/* Plan Elite */}
              <div className="plan-card elite">
                <span className="plan-label">MENSUAL</span>
                <h2 className="plan-title">XT ELITE</h2>
                <p className="plan-price">$70.000 <span>/mes</span></p>
                <p className="plan-benef">¡Accedé a +800 sedes!</p>
                <button className="btn black">ASOCIATE</button>
                <hr />
                <div className="plan-access">
                  <p>Podés acceder a:</p>
                  <div className="badge-row">
                    <span className="badge yellow">Flex</span>
                    <span className="badge red">Pro</span>
                    <span className="badge black">Elite</span>
                  </div>
                  <ul>
                    <li>✓ Acceso a Indoor/Outdoor</li>
                    <li>✓ Acceso Online</li>
                    <li>✓ Plan nutricional</li>
                    <li>✓ Beneficios Xtreme</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <Footer />
      </>
    );
  }