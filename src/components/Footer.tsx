import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bariti-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-bariti-gold mb-4">BARITI</h3>
            <p className="text-gray-300 max-w-md">
              Transformando negócios através da Inteligência Artificial e inovação tecnológica. 
              Excelência e sofisticação em cada linha de código.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-bariti-light">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/solucoes" className="text-gray-300 hover:text-bariti-gold transition-colors">Soluções</Link></li>
              <li><Link to="/consultoria" className="text-gray-300 hover:text-bariti-gold transition-colors">Consultoria</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-bariti-gold transition-colors">Blog</Link></li>
              <li><Link to="/admin" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Área Administrativa</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-bariti-light">Contato</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-bariti-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-bariti-gold transition-colors"><Instagram size={20} /></a>
              <a href="mailto:contato@bariti.com.br" className="text-gray-300 hover:text-bariti-gold transition-colors"><Mail size={20} /></a>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              São Paulo, Brasil
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bariti Tech Innovation. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
