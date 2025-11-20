import { Helmet } from 'react-helmet-async';
import { Code, Database, Cloud, Shield, Smartphone, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solucoes() {
  const solutions = [
    {
      icon: <Code size={32} />,
      title: 'Desenvolvimento de Software',
      description: 'Aplicações web e mobile robustas, escaláveis e centradas no usuário. Utilizamos as tecnologias mais modernas (React, Node.js, Python) para entregar produtos digitais de alta performance.',
      link: '/servicos/software'
    },
    {
      icon: <Cpu size={32} />,
      title: 'Inteligência Artificial',
      description: 'Integração de modelos de LLM, Machine Learning e análise preditiva para automatizar processos, gerar insights e criar experiências personalizadas para seus clientes.',
      link: '/servicos/ia'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & DevOps',
      description: 'Arquitetura em nuvem (AWS, Azure, GCP) segura e eficiente. Implementação de pipelines CI/CD para acelerar o ciclo de desenvolvimento e garantir a estabilidade.',
      link: '/servicos/cloud'
    },
    {
      icon: <Database size={32} />,
      title: 'Engenharia de Dados',
      description: 'Estruturação de Data Lakes e Warehouses. Transforme dados brutos em ativos estratégicos com pipelines de ETL modernos e dashboards de Business Intelligence.',
      link: '/servicos/dados'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Experiência Mobile',
      description: 'Apps nativos e híbridos que engajam. Foco total em UX/UI para garantir que sua marca esteja presente no dia a dia dos seus usuários com qualidade.',
      link: '/servicos/mobile'
    },
    {
      icon: <Shield size={32} />,
      title: 'Cibersegurança',
      description: 'Proteção de ativos digitais e conformidade com LGPD. Auditorias de segurança, testes de intrusão e implementação de práticas de DevSecOps.',
      link: '/servicos/seguranca'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Soluções Tecnológicas | Bariti Tech Innovation</title>
        <meta name="description" content="Nossas soluções em desenvolvimento de software, IA, Cloud e Dados para transformar seu negócio." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-bariti-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Soluções para a <span className="text-bariti-gold">Era Digital</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Da concepção à implementação, oferecemos um portfólio completo de serviços tecnológicos para impulsionar a inovação na sua empresa.
          </p>
          <Link to="/contato" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-bariti-dark bg-white hover:bg-gray-100 transition-colors">
            Fale com um Especialista
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-bariti-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link to={solution.link} key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group block">
                <div className="w-14 h-14 bg-bariti-light rounded-lg flex items-center justify-center mb-6 text-bariti-rust group-hover:bg-bariti-rust group-hover:text-white transition-colors">
                  {solution.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-bariti-dark mb-4 flex items-center justify-between">
                  {solution.title}
                  <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-bariti-rust group-hover:text-white" />
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-bariti-rust group-hover:underline">
                  Saiba mais &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bariti-rust rounded-2xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Agende uma consultoria gratuita e descubra como nossas soluções podem acelerar seu crescimento.
              </p>
              <Link to="/contato" className="inline-block px-8 py-3 bg-white text-bariti-rust font-bold rounded-md hover:bg-gray-100 transition-colors">
                Iniciar Projeto
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 -mt-10 -ml-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>
    </>
  );
}
