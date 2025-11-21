import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo-head.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const solutionsItems = [
    { name: 'Desenvolvimento de Software', path: '/servicos/software' },
    { name: 'Inteligência Artificial', path: '/servicos/ia' },
    { name: 'Cloud & DevOps', path: '/servicos/cloud' },
    { name: 'Engenharia de Dados', path: '/servicos/dados' },
    { name: 'Experiência Mobile', path: '/servicos/mobile' },
    { name: 'Cibersegurança', path: '/servicos/seguranca' },
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Soluções', path: '/solucoes' },
    { name: 'Consultoria', path: '/consultoria' },
    { name: 'Blog', path: '/blog' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="Bariti Tech" className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => {
              if (item.name === 'Soluções') {
                return (
                  <div key={item.name} className="relative group">
                    <button className="flex items-center text-bariti-dark hover:text-bariti-gold px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none">
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    <div className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                      <Link
                        to="/solucoes"
                        className="block px-4 py-2 text-sm text-bariti-dark hover:bg-gray-50 hover:text-bariti-rust font-semibold border-b border-gray-100"
                      >
                        Ver Todas as Soluções
                      </Link>
                      {solutionsItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-bariti-rust"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-bariti-dark hover:text-bariti-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-bariti-dark hover:text-bariti-rust focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              if (item.name === 'Soluções') {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-bariti-dark hover:text-bariti-gold hover:bg-gray-50"
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transform transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isSolutionsOpen && (
                      <div className="pl-4 space-y-1 bg-gray-50 rounded-md mt-1">
                        <Link
                          to="/solucoes"
                          className="block px-3 py-2 rounded-md text-sm font-medium text-bariti-dark hover:text-bariti-rust"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Ver Todas
                        </Link>
                        {solutionsItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-bariti-rust"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-bariti-dark hover:text-bariti-gold hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
