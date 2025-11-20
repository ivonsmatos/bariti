import { Helmet } from 'react-helmet-async';
import { Users, Globe, Target } from 'lucide-react';

export default function Sobre() {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Bariti Tech Innovation</title>
        <meta name="description" content="Conheça a Bariti Tech Innovation, nossa visão, liderança e presença global." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-bariti-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Redefinindo o Futuro com <span className="text-bariti-gold">Inteligência</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Somos uma consultoria de elite focada em transformar grandes desafios em oportunidades estratégicas através da tecnologia.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section - Split Screen */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="text-bariti-rust mr-3" size={32} />
                <h2 className="font-serif text-3xl font-bold text-bariti-dark">Nossa Visão</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Acreditamos que a tecnologia não é apenas uma ferramenta, mas o motor central da estratégia de negócios moderna. Nossa missão é capacitar organizações a liderar seus mercados através da adoção inteligente de IA e desenvolvimento de software de classe mundial.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Buscamos a excelência em cada linha de código e em cada decisão arquitetural, garantindo que nossos clientes estejam sempre à frente da curva de inovação.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Team collaboration" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-bariti-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-bariti-dark mb-4">Liderança</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uma equipe multidisciplinar com experiência em grandes corporações e startups de tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden">
                  <Users className="w-full h-full p-8 text-gray-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-bariti-dark">Líder Executivo {i}</h3>
                <p className="text-bariti-rust font-medium mb-3">Cargo / Especialidade</p>
                <p className="text-gray-500 text-sm">
                  Expertise em transformação digital e estratégias de crescimento acelerado.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-bariti-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
            alt="World Map" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="mx-auto text-bariti-gold mb-6" size={48} />
          <h2 className="font-serif text-3xl font-bold mb-6">Presença Global</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Com sede em São Paulo e atuação remota global, atendemos clientes na América Latina, Estados Unidos e Europa, levando a excelência brasileira para o mundo.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-bariti-gold mb-2">50+</div>
              <div className="text-gray-400">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bariti-gold mb-2">15+</div>
              <div className="text-gray-400">Países Alcançados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bariti-gold mb-2">98%</div>
              <div className="text-gray-400">Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bariti-gold mb-2">24/7</div>
              <div className="text-gray-400">Suporte Especializado</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
