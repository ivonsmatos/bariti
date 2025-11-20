import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ShieldCheck, FileCheck, Eye } from 'lucide-react';

const Ciberseguranca: React.FC = () => {
  const features = [
    {
      title: "Pentesting & Análise de Vulnerabilidades",
      description: "Testes de intrusão controlados para identificar e corrigir brechas de segurança antes que sejam exploradas por agentes maliciosos.",
      icon: ShieldCheck
    },
    {
      title: "Compliance & LGPD",
      description: "Consultoria especializada para adequação à Lei Geral de Proteção de Dados, garantindo a privacidade dos usuários e evitando sanções legais.",
      icon: FileCheck
    },
    {
      title: "Monitoramento Contínuo",
      description: "Sistemas de vigilância 24/7 para detecção e resposta a incidentes em tempo real, protegendo seus ativos digitais mais críticos.",
      icon: Eye
    }
  ];

  return (
    <ServiceLayout
      title="Cibersegurança & Compliance"
      subtitle="Proteção de ativos digitais e conformidade LGPD."
      heroImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200"
      challengeText="O cenário de ameaças cibernéticas evolui diariamente, e a superfície de ataque das empresas cresce com a digitalização. Violações de dados não causam apenas prejuízos financeiros, mas danos irreparáveis à reputação e confiança da marca."
      solutionText="Adotamos uma abordagem 'Security by Design'. Nossas soluções de cibersegurança são integradas desde a concepção do projeto, não apenas como uma camada final. Protegemos seu negócio com estratégias proativas, garantindo conformidade legal e tranquilidade operacional."
      features={features}
    />
  );
};

export default Ciberseguranca;
