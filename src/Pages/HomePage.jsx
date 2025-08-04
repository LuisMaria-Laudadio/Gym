import "../Main.css";
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import bgvid from "../media/bgvid.mp4";
import cardio from "../media/cardio.jpg";
import pesas from "../media/pesas.jpg";
import aerobico from '../media/aerobico.jpg';
import funcional from '../media/funcional.jpg';
import fuerza from '../media/fuerza.jpeg';
import clasesgrupales from "../media/clases-grupales.jpeg";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const testimonialsData = [
  {
    text: "Este gym cambió mi vida. El ambiente es increíble y los entrenadores siempre me motivan.",
    author: "- Mariana R."
  },
  {
    text: "Gracias a GYM XTREME logré mi mejor forma física. ¡100% recomendado!",
    author: "- Lucas F."
  },
  {
    text: "Las instalaciones son modernas y siempre limpias. Me encanta venir a entrenar aquí.",
    author: "- Sofía M."
  }
];

export function HomePage() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const revealOnScroll = () => {
      const elements = document.querySelectorAll('.fade-slide-up');
      const windowBottom = window.innerHeight;
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowBottom - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const changeTestimonial = (direction) => {
    let newCurrent = current + direction;
    if (newCurrent < 0) newCurrent = testimonialsData.length - 1;
    if (newCurrent >= testimonialsData.length) newCurrent = 0;
    setCurrent(newCurrent);
  };

  return (
    <div>
      <header>
        <video className="background-video" autoPlay muted loop playsInline>
          <source src={bgvid} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <Navbar />
        <div>
          <h1>GYM XTREME</h1>
          <p>Transformá tu cuerpo. Superá tus límites.</p>
        </div>
      </header>

      <main>
        <section>
          <h2 className="section-title"></h2>
          <div className="gallery">
            {[
              { src: fuerza, caption: "Entrenamiento de fuerza" },
              { src: cardio, caption: "Clases de cardio" },
              { src: pesas, caption: "Zona de pesas" },
              { src: clasesgrupales, caption: "Clases grupales" },
              { src: aerobico, caption: "Clases aerobicas" },
              { src: funcional, caption: "Funcional" },
            ].map((item, i) => (
              <div key={i} className="gallery-item fade-slide-up">
                <img src={item.src} alt={item.caption} />
                <div className="caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="quienes-somos" className="about-us">
          <h2 className="section-title">Quiénes Somos</h2>
          <p className="about-text">
            En Xtreme Gym creemos que el entrenamiento no es solo una rutina: es un estilo de vida. Somos un gimnasio premium diseñado para ofrecer una experiencia completa de bienestar, combinando tecnología, confort y un ambiente motivador...
          </p>
        </section>

        <section className='testimony'>
          <h2 className="section-title"></h2>
          <div className="testimonials">
            <div className="testimonials-container" ref={containerRef} style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonialsData.map((testimonial, i) => (
                <div key={i} className={`testimonial ${i === current ? 'active' : ''}`}>
                  <p>“{testimonial.text}”</p>
                  <h4>{testimonial.author}</h4>
                </div>
              ))}
            </div>
            <div className="testimonials-controls">
              <button onClick={() => changeTestimonial(-1)}>&#10094;</button>
              <button onClick={() => changeTestimonial(1)}>&#10095;</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
