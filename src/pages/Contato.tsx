import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Consultoria Estratégica',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! (Simulação)');
    setFormData({ name: '', email: '', interest: 'Consultoria Estratégica', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contato | Bariti Tech Innovation</title>
        <meta name="description" content="Entre em contato com a Bariti Tech. Estamos prontos para discutir seu próximo projeto de inovação." />
      </Helmet>

      <div className="min-h-screen bg-bariti-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl font-bold text-bariti-dark mb-4">Vamos Conversar?</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para entender seus desafios e propor soluções que impulsionem seu negócio.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Contact Info - Left Side */}
              <div className="bg-bariti-dark text-white p-12 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-8 text-bariti-gold">Informações de Contato</h2>
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <Mail className="text-bariti-gold mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-medium text-lg">Email</h3>
                        <p className="text-gray-300">contato@bariti.com.br</p>
                        <p className="text-gray-300">comercial@bariti.com.br</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-bariti-gold mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-medium text-lg">Localização</h3>
                        <p className="text-gray-300">Av. Paulista, 1000 - Bela Vista</p>
                        <p className="text-gray-300">São Paulo - SP, Brasil</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-bariti-gold mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-medium text-lg">Telefone</h3>
                        <p className="text-gray-300">+55 (11) 99999-9999</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-sm text-gray-400">
                    Atendimento global com suporte em Português, Inglês e Espanhol.
                  </p>
                </div>
              </div>

              {/* Contact Form - Right Side */}
              <div className="p-12 bg-white">
                <h2 className="font-serif text-2xl font-bold text-bariti-dark mb-6">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bariti-rust focus:border-bariti-rust transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bariti-rust focus:border-bariti-rust transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interesse</label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bariti-rust focus:border-bariti-rust transition-colors"
                    >
                      <option>Consultoria Estratégica</option>
                      <option>Desenvolvimento de Software</option>
                      <option>Inteligência Artificial</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bariti-rust focus:border-bariti-rust transition-colors"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-bariti-rust text-white py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center font-medium"
                  >
                    <Send size={18} className="mr-2" />
                    Enviar Mensagem
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
