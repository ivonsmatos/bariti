import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Bot, LineChart, Cpu } from 'lucide-react';

const InteligenciaArtificial: React.FC = () => {
  const features = [
    {
      title: "LLMs & IA Generativa",
      description: "Implementação de modelos de linguagem avançados para criar assistentes virtuais, geração de conteúdo e análise semântica de documentos.",
      icon: Bot
    },
    {
      title: "Análise Preditiva",
      description: "Modelos estatísticos e de Machine Learning para prever tendências de mercado, comportamento do consumidor e otimização de estoque.",
      icon: LineChart
    },
    {
      title: "Automação Inteligente",
      description: "Automatização de processos complexos que exigem tomada de decisão cognitiva, reduzindo erros operacionais e liberando capital humano.",
      icon: Cpu
    }
  ];

  return (
    <ServiceLayout
      title="Inteligência Artificial Estratégica"
      subtitle="Do Machine Learning à IA Generativa: automação real."
      heroImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200"
      challengeText="Empresas acumulam terabytes de dados sem extrair valor real, enquanto processos manuais repetitivos consomem recursos preciosos. A falta de inteligência nos processos impede a personalização em escala e a tomada de decisão baseada em dados."
      solutionText="Implementamos soluções de IA que vão além do hype. De chatbots inteligentes que melhoram o atendimento a modelos preditivos que antecipam demandas, transformamos seus dados em insights acionáveis e automação eficiente, com foco claro no ROI."
      features={features}
    />
  );
};

export default InteligenciaArtificial;
