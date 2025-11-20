import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  challengeText: string;
  solutionText: string;
  features: Feature[];
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  subtitle,
  heroImage,
  challengeText,
  solutionText,
  features
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{title} | Bariti Tech</title>
        <meta name="description" content={subtitle} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-bariti-dark/70 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Intro Section: Challenge vs Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-bariti-dark font-bold border-l-4 border-red-500 pl-4">
                O Desafio
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {challengeText}
              </p>
            </div>
            
            <div className="bg-gray-50 p-10 rounded-lg border border-gray-100 shadow-sm">
              <h2 className="font-serif text-3xl text-bariti-rust font-bold mb-6 flex items-center">
                <CheckCircle2 className="mr-3" />
                A Solução Bariti
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {solutionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-bariti-dark font-bold mb-16">
            Nossa Abordagem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-transparent hover:border-bariti-rust group"
                >
                  <div className="mb-6 inline-block p-3 bg-orange-50 rounded-full group-hover:bg-bariti-rust/10 transition-colors">
                    <Icon className="w-8 h-8 text-bariti-rust" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-bariti-dark mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bariti-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Vamos conversar sobre como nossa tecnologia pode impulsionar seus resultados.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center bg-bariti-rust hover:bg-red-700 text-white font-bold py-4 px-10 rounded-md transition-all transform hover:-translate-y-1"
          >
            Falar com um Especialista
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
