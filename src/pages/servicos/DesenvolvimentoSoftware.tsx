import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Code2, Server, RefreshCw } from 'lucide-react';

const DesenvolvimentoSoftware: React.FC = () => {
  const features = [
    {
      title: "Desenvolvimento Web Moderno",
      description: "Criamos interfaces ricas e responsivas utilizando React e ecossistemas modernos, garantindo a melhor experiência para o usuário final.",
      icon: Code2
    },
    {
      title: "APIs e Backend Robustos",
      description: "Arquiteturas de servidor escaláveis com Node.js e Python, projetadas para suportar alto tráfego e integrações complexas com segurança.",
      icon: Server
    },
    {
      title: "Modernização de Legado",
      description: "Transformamos sistemas antigos em aplicações modernas, melhorando a performance e a manutenibilidade sem perder as regras de negócio vitais.",
      icon: RefreshCw
    }
  ];

  return (
    <ServiceLayout
      title="Engenharia de Software de Alto Desempenho"
      subtitle="Aplicações robustas que escalam com o seu negócio."
      heroImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200"
      challengeText="Sistemas legados lentos, código difícil de manter e arquiteturas que não suportam o crescimento do negócio são gargalos comuns que impedem a inovação e frustram usuários. O débito técnico acumula-se, tornando cada nova feature mais cara e demorada para implementar."
      solutionText="Desenvolvemos software sob medida com foco em performance, escalabilidade e manutenibilidade. Utilizamos as melhores práticas de engenharia (Clean Code, TDD, DDD) para entregar produtos digitais que não apenas funcionam, mas geram valor real e sustentável para sua empresa."
      features={features}
    />
  );
};

export default DesenvolvimentoSoftware;
