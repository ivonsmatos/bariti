import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, Code, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Bariti Tech Innovation | Consultoria em IA e Software</title>
        <meta name="description" content="Transforme seu negócio com soluções de Inteligência Artificial e desenvolvimento de software de alta performance. Consultoria especializada em São Paulo." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-bariti-dark text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
            alt="Background Tech" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Inovação Estratégica através da <span className="text-bariti-gold">Inteligência Artificial</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Ajudamos empresas visionárias a construir o futuro. Consultoria de elite em tecnologia, desenvolvimento de software sob medida e transformação digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/consultoria" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bariti-rust hover:bg-opacity-90 transition-colors">
                Nossa Consultoria
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </Link>
              <Link to="/solucoes" className="inline-flex items-center justify-center px-8 py-3 border border-gray-500 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-colors">
                Conheça Soluções
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-bariti-dark mb-4">Excelência em Tecnologia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combinamos expertise técnica com visão de negócios para entregar resultados mensuráveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-bariti-light rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-bariti-purple/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="text-bariti-purple" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-bariti-dark mb-3">IA & Machine Learning</h3>
              <p className="text-gray-600">
                Implementação de modelos preditivos, processamento de linguagem natural e automação inteligente para otimizar processos.
              </p>
            </div>

            <div className="p-8 bg-bariti-light rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-bariti-rust/10 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-bariti-rust" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-bariti-dark mb-3">Desenvolvimento Sob Medida</h3>
              <p className="text-gray-600">
                Arquiteturas robustas e escaláveis. Web Apps, Mobile e Sistemas Corporativos desenvolvidos com as melhores práticas.
              </p>
            </div>

            <div className="p-8 bg-bariti-light rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-bariti-gold/10 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="text-bariti-gold" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-bariti-dark mb-3">Consultoria Estratégica</h3>
              <p className="text-gray-600">
                Diagnóstico tecnológico e roadmap de transformação digital alinhados aos objetivos de crescimento da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
