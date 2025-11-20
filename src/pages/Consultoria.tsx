import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { LineChart, ShoppingBag, Stethoscope, ArrowRight } from 'lucide-react';

export default function Consultoria() {
  const [activeTab, setActiveTab] = useState<'finance' | 'retail' | 'healthcare'>('finance');

  const industries = {
    finance: {
      title: 'Setor Financeiro',
      icon: <LineChart size={24} />,
      description: 'Transformação digital para bancos, fintechs e seguradoras. Foco em segurança, compliance e experiência do usuário.',
      features: [
        'Detecção de fraude com IA',
        'Automação de processos de crédito',
        'Personalização de ofertas financeiras',
        'Modernização de sistemas legados'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    retail: {
      title: 'Varejo & E-commerce',
      icon: <ShoppingBag size={24} />,
      description: 'Otimização da jornada de compra e cadeia de suprimentos. Integração omnichannel e inteligência de dados.',
      features: [
        'Recomendação de produtos inteligente',
        'Previsão de demanda e estoque',
        'Chatbots de atendimento ao cliente',
        'Análise de sentimento de marca'
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
    },
    healthcare: {
      title: 'Saúde & Biotech',
      icon: <Stethoscope size={24} />,
      description: 'Inovação para hospitais, clínicas e laboratórios. Telemedicina, gestão de dados clínicos e diagnósticos assistidos.',
      features: [
        'Triagem automatizada de pacientes',
        'Análise de imagens médicas',
        'Gestão eficiente de prontuários',
        'Monitoramento remoto de saúde'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
    }
  };

  return (
    <>
      <Helmet>
        <title>Consultoria Estratégica | Bariti Tech Innovation</title>
        <meta name="description" content="Consultoria especializada em Finanças, Varejo e Saúde. Soluções de IA e tecnologia sob medida." />
      </Helmet>

      <section className="bg-bariti-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Consultoria de <span className="text-bariti-gold">Alto Impacto</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entregamos soluções tecnológicas precisas para os desafios mais complexos da sua indústria.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(industries) as Array<keyof typeof industries>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-bariti-rust text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{industries[key].icon}</span>
                {industries[key].title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-bariti-light rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold text-bariti-dark mb-4">
                  {industries[activeTab].title}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {industries[activeTab].description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {industries[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-bariti-gold/20 flex items-center justify-center mt-1">
                        <ArrowRight size={14} className="text-bariti-gold" />
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="self-start px-8 py-3 bg-bariti-dark text-white rounded-md hover:bg-opacity-90 transition-colors font-medium">
                  Agendar Diagnóstico
                </button>
              </div>
              
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={industries[activeTab].image} 
                  alt={industries[activeTab].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
