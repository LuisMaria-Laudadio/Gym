import {Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Sedes from './Pages/Sedes';
import Profecionales from './Pages/Profesionales';
import Planes from './Pages/Planes';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Sedes" element={<Sedes/>} />
      <Route path="/Profesionales" element={<Profecionales/>} />
      <Route path="/Planes" element={<Planes/>} />
    </Routes>
  );
}
export default App;