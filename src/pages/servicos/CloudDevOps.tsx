import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Cloud, GitBranch, Container } from 'lucide-react';

const CloudDevOps: React.FC = () => {
  const features = [
    {
      title: "Arquitetura Cloud",
      description: "Design e implementação de infraestruturas seguras e escaláveis em AWS, Azure ou Google Cloud, otimizadas para performance e custo.",
      icon: Cloud
    },
    {
      title: "CI/CD Pipelines",
      description: "Automação completa do ciclo de entrega de software, permitindo deploys frequentes, seguros e com rollback automático em caso de falhas.",
      icon: GitBranch
    },
    {
      title: "Kubernetes & Containers",
      description: "Orquestração de containers para garantir alta disponibilidade, escalabilidade automática e portabilidade entre diferentes ambientes.",
      icon: Container
    }
  ];

  return (
    <ServiceLayout
      title="Cloud & DevOps Modernos"
      subtitle="Infraestrutura resiliente e deploys automatizados."
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200"
      challengeText="Infraestrutura instável, custos de nuvem descontrolados e processos de deploy manuais e arriscados colocam a operação em perigo. A falta de automação gera 'medo de deploy' e retarda significativamente o time-to-market de novas funcionalidades."
      solutionText="Construímos infraestruturas em nuvem seguras, resilientes e escaláveis. Com práticas modernas de DevOps e IaC (Infrastructure as Code), garantimos entregas contínuas, alta disponibilidade e uma gestão eficiente de recursos, permitindo que seu time foque no produto."
      features={features}
    />
  );
};

export default CloudDevOps;
