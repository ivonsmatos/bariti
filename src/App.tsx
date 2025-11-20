import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BlogProvider } from './context/BlogContext';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin';
import Sobre from './pages/Sobre';
import Consultoria from './pages/Consultoria';
import Contato from './pages/Contato';
import Solucoes from './pages/Solucoes';
import DesenvolvimentoSoftware from './pages/servicos/DesenvolvimentoSoftware';
import InteligenciaArtificial from './pages/servicos/InteligenciaArtificial';
import CloudDevOps from './pages/servicos/CloudDevOps';
import EngenhariaDados from './pages/servicos/EngenhariaDados';
import Mobile from './pages/servicos/Mobile';
import Ciberseguranca from './pages/servicos/Ciberseguranca';

function App() {
  return (
    <HelmetProvider>
      <BlogProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="solucoes" element={<Solucoes />} />
              <Route path="servicos/software" element={<DesenvolvimentoSoftware />} />
              <Route path="servicos/ia" element={<InteligenciaArtificial />} />
              <Route path="servicos/cloud" element={<CloudDevOps />} />
              <Route path="servicos/dados" element={<EngenhariaDados />} />
              <Route path="servicos/mobile" element={<Mobile />} />
              <Route path="servicos/seguranca" element={<Ciberseguranca />} />
              <Route path="consultoria" element={<Consultoria />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="contato" element={<Contato />} />
            </Route>
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </BlogProvider>
    </HelmetProvider>
  );
}

export default App;
