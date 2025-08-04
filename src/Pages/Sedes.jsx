import './Sedes.css';
import Navbar from '../components/Navbar';
import sede1 from '../media/sede1.jpg';
import sede2 from '../media/sede2.png';
import sede3 from '../media/sede3.webp';
import Footer from '../components/Footer';

const sedes = [
  {
    nombre: "Sede Central - Ciudad",
    direccion: "Av. Las Heras 1234, Mendoza Capital",
    horario: "Lun a Vie: 7 a 22hs | Sáb: 9 a 18hs",
    imagen: sede2,
    maps: "https://www.google.com/maps?q=-32.8908,-68.8272"
  },
  {
    nombre: "Sede Godoy Cruz",
    direccion: "San Martín 456, Godoy Cruz",
    horario: "Lun a Vie: 6 a 23hs | Sáb: 10 a 16hs",
    imagen: sede1,
    maps: "https://www.google.com/maps?q=-32.9395,-68.8574"
  },
  {
    nombre: "Sede Maipú",
    direccion: "Ozamis Sur 789, Maipú",
    horario: "Lun a Vie: 7 a 21hs | Sáb: 9 a 14hs",
    imagen: sede3,
    maps: "https://www.google.com/maps?q=-32.9860,-68.7933"
  }
];



export default function Sedes() {
  return (
    <>
      <Navbar />
      <div className="sedes-container" style={{ paddingTop: '12.5rem' }}>
        <h1 className="sedes-title">Conocé las Sedes</h1>
        <p className="sedes-desc">Entrená donde te quede más cómodo...</p>
        <div className="sedes-grid">
        {sedes.map((sede, index) => (
          <div key={index} className="sede-card">
            <img src={sede.imagen} alt={sede.nombre} className="sede-img" />
            <div className="sede-info">
              <h2>{sede.nombre}</h2>
              <p>{sede.direccion}</p>
              <p><strong>Horario:</strong> {sede.horario}</p>
              <a href={sede.maps} target="_blank" rel="noopener noreferrer" className="maps-btn">
                Cómo llegar
              </a>
            </div>
          </div>
        ))}
        </div>
        <div className="sedes-info-final">
  <h3>Todo lo que necesitás en un solo lugar</h3>
  <p>
    Nuestras sedes están equipadas con espacios modernos, máquinas de última generación y un ambiente motivador para que entrenes como te merecés. Cada gimnasio está diseñado para adaptarse a distintos estilos de entrenamiento y niveles de experiencia.
  </p>

  <h4>Actividades disponibles:</h4>
  <ul className="sedes-actividades">
    <li>🏋️ Pesas</li>
    <li>🤸 Funcional</li>
    <li>💃 Aeróbico</li>
    <li>🚴 Cardio</li>
    <li>🧘 Clases grupales</li>
    <li>🔥 Entrenamiento de fuerza</li>
  </ul>
</div> 
      </div>
      
      <Footer />
    </>
  );
}
