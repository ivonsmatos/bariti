import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Database, BarChart3, Workflow } from 'lucide-react';

const EngenhariaDados: React.FC = () => {
  const features = [
    {
      title: "Data Lakes & Warehouses",
      description: "Arquitetura e implementação de repositórios de dados centralizados, eliminando silos e garantindo uma fonte única de verdade para a organização.",
      icon: Database
    },
    {
      title: "Pipelines ETL/ELT",
      description: "Processos automatizados de extração, transformação e carga de dados, garantindo integridade e disponibilidade para análise em tempo real.",
      icon: Workflow
    },
    {
      title: "Business Intelligence",
      description: "Dashboards interativos e relatórios gerenciais que transformam números complexos em visualizações claras para suporte à decisão executiva.",
      icon: BarChart3
    }
  ];

  return (
    <ServiceLayout
      title="Engenharia de Dados & Analytics"
      subtitle="Transformando dados brutos em decisões estratégicas."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200"
      challengeText="Organizações modernas geram volumes massivos de dados, mas frequentemente sofrem com informações fragmentadas em silos, baixa qualidade de dados e incapacidade de obter insights em tempo hábil. A falta de uma estratégia de dados coesa resulta em decisões baseadas em intuição, não em fatos."
      solutionText="Estruturamos sua jornada de dados ponta a ponta. Desde a ingestão e governança até a visualização avançada, criamos a infraestrutura necessária para que sua empresa se torne verdadeiramente Data-Driven. Nossas soluções garantem que a informação certa chegue à pessoa certa, no momento exato."
      features={features}
    />
  );
};

export default EngenhariaDados;
