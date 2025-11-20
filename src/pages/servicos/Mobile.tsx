import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Smartphone, Palette, Zap } from 'lucide-react';

const Mobile: React.FC = () => {
  const features = [
    {
      title: "Desenvolvimento Híbrido & Nativo",
      description: "Criação de aplicativos robustos utilizando React Native para máxima eficiência ou desenvolvimento nativo para performance crítica.",
      icon: Smartphone
    },
    {
      title: "User Centric Design",
      description: "Interfaces intuitivas e fluidas, projetadas com foco total na jornada do usuário, garantindo altas taxas de retenção e engajamento.",
      icon: Palette
    },
    {
      title: "Performance & Otimização",
      description: "Aplicações otimizadas para baixo consumo de bateria e dados, com tempos de carregamento instantâneos e animações suaves.",
      icon: Zap
    }
  ];

  return (
    <ServiceLayout
      title="Experiência Mobile (UX/UI)"
      subtitle="Apps nativos e híbridos que engajam usuários."
      heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200"
      challengeText="No cenário mobile atual, a tolerância para aplicativos lentos ou confusos é zero. Usuários esperam experiências impecáveis, e uma interface mal projetada pode significar a perda imediata de clientes para a concorrência. O desafio é equilibrar funcionalidade complexa com simplicidade de uso."
      solutionText="Desenvolvemos experiências móveis de classe mundial. Combinamos design de interface refinado com engenharia de software rigorosa para entregar aplicativos que não apenas funcionam perfeitamente em qualquer dispositivo, mas que encantam os usuários e fortalecem a presença digital da sua marca."
      features={features}
    />
  );
};

export default Mobile;
