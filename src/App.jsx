import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout";
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Galeria from './pages/Galeria';
import ComoJogar from './pages/ComoJogar';
import Regras from './pages/Regras';
import Download from './pages/Download';
import Comunidade from './pages/Comunidade';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/comojogar" element={<ComoJogar />} />
          <Route path="/regras" element={<Regras />} />
          <Route path="/download" element={<Download />} />
          <Route path="/comunidade" element={<Comunidade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

