import './Profesionales.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import trainer from '../media/prof-img/coach.jpg';
import prueba from '../media/prof-img/eval.jpg';
import nutri from '../media/prof-img/nutri.jpg';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';



export default function Profesionales() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);
  return (
    <>
      <Navbar />
      <div className="profesionales-container">
      <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      number: { value: 300 },
      color: { value: "#fbbd23" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 1,
        outModes: { default: "bounce" }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        }
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 0.4
        }
      }
    }
  }}
  className="particles-bg"
/>

        <div className="prof-content" style={{ paddingTop: '120px' }}>
          <h1 className="prof-title">Nuestro equipo profesional</h1>
          <p className="prof-intro">
            En GYM XTREME trabajamos con profesores, entrenadores personales y especialistas del más alto nivel.
          </p>

          {/* Secciones con imagen + texto */}
          <section className="prof-section">
            <img src={trainer} alt="Entrenador personal" className="prof-img" />
            <div className="prof-text">
              <h2>Entrenadores certificados</h2>
              <p>
                Nuestros entrenadores están certificados y cuentan con experiencia en entrenamiento funcional, pesas, fuerza y clases grupales...
              </p>
            </div>
          </section>

          <section className="prof-section">
            <img src={nutri} alt="Nutricionista" className="prof-img" />
            <div className="prof-text">
              <h2>Asesoramiento nutricional</h2>
              <p>
                Contamos con nutricionistas especializados que diseñan planes alimentarios según tus objetivos.
              </p>
            </div>
          </section>

          <section className="prof-section">
            <img src={prueba} alt="Evaluaciones físicas" className="prof-img" />
            <div className="prof-text">
              <h2>Evaluaciones y estudios físicos</h2>
              <p>
                Realizamos estudios de composición corporal, fuerza y rendimiento para optimizar tu progreso.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}