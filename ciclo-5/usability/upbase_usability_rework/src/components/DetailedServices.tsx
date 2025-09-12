import React from "react";

interface DetailedServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const DetailedServiceCard: React.FC<DetailedServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-12 h-12 object-contain mx-auto mb-4"
      />
      <h3 className="text-lg font-bold text-[rgba(31,31,31,1)] mb-4">
        {title}
      </h3>
      <p className="text-base text-[rgba(104,104,104,1)] leading-relaxed">
        {description}
      </p>
    </article>
  );
};

export const DetailedServices: React.FC = () => {
  const servicesRow1 = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/c39bbf74acfebc4f7f516f6090958220eaa7ef49?placeholderIfAbsent=true",
      title: "Desenvolvimento de Software",
      description:
        "Crie soluções do ZERO. Conheça nossa Fábrica de Software. Desenvolvemos Soluções Personalizadas de acordo com sua demanda.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/c5d6ac49e36b4cd8a35491281f3c8c04c11e688c?placeholderIfAbsent=true",
      title: "Desenvolvimento SAP – ABAP",
      description:
        "Crie Ferramentas e Integre ao SAP com Tecnologias de Desenvolvimento.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/cfd2526f29b237e8283ed364d37b17d855223eb8?placeholderIfAbsent=true",
      title: "Design e Prototipação de Softwares",
      description:
        "Conheça nossa Equipe de Design e Prototipação. Desenvolva o Protótipo e integre seu Software antes mesmo de lançar.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/a6ddc8a7b2b8e3d0523c7c805506a0d22db85af8?placeholderIfAbsent=true",
      title: "Gestão Estratégica de Projetos de Tecnologia",
      description:
        "Contrate nosso time de Gestão de Tecnologia para o seu Projeto. Scrum Master, PWO, Arquiteto de Soluções e Líderes Técnicos. Conte com nosso time.",
    },
  ];

  const servicesRow2 = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/0015c664212bedef16ed7a016be7fc5662f736ba?placeholderIfAbsent=true",
      title: "Integração de Sistemas e APIs",
      description:
        "Conexão e Sincronização de diferentes Sistemas para facilitar a troca de Informações.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/eca9b37d5b735e6d66aee46fc8cdbb8db0ee6058?placeholderIfAbsent=true",
      title: "Serviços de Arquitetura de Software",
      description:
        "Desenho e Planejamento de Arquitetura de Sistemas para a Otimização de Processos. Serviços AWS, Google Cloud e Azure.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/6784f1694bbb89c468a7f05d6c31875126ed9099?placeholderIfAbsent=true",
      title: "Segurança da Informação e Conformidade com a LGPD",
      description:
        "Consultoria para garantir a Conformidade com Regulamentações da Segurança e Privacidade de Dados.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/e17b0d64ca0890894929d0d072abc0466b6659ef?placeholderIfAbsent=true",
      title: "Análise e Otimização de Processos de Negócios",
      description:
        "Identificação de Melhorias e Otimizações em Processos Internos das Empresas.",
    },
  ];

  const servicesRow3 = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/9c8e2afc113e266cd4fdcf692b4b2676c8aaeab9?placeholderIfAbsent=true",
      title: "Suporte Técnico e Manutenção de Software",
      description:
        "Serviços de Suporte e atualização contínua para garantir o funcionamento Eficiente das Soluções.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/aa6abadbe77ab055c758d162ef20e5bb206d5165?placeholderIfAbsent=true",
      title: "Hunting",
      description:
        "Encontre os Profissionais, Especialistas de Tecnologia para compor o seu time. Conheça nosso Serviço de Hunting. Saiba mais.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/f51620b606679f90b78fa05b7b7effa4cf8a5479?placeholderIfAbsent=true",
      title: "Terceirização",
      description:
        "Soluções para você ganhar velocidade e não se preocupar com a burocracia. Saiba mais.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/8a7b2f0c66c355c71e93dba8d13f5ccaa851ec42?placeholderIfAbsent=true",
      title: "Treinamentos e Capacitação em Tecnologia",
      description:
        "Programas de formação para capacitar Equipes em novas Ferramentas do Mercado.",
    },
  ];

  return (
    <section className="w-full bg-[rgba(244,241,255,1)] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className=" text-3xl text-[rgba(86,51,208,1)] font-semibold inline-block px-6 py-3 rounded">
            Conheça nossos Serviços!
          </h2>

          <p className="text-[rgba(104,104,104,1)] text-base max-w-4xl mx-auto">
            Nossa Equipe está sempre em busca de novas perspectivas, se
            antecipando a tendências e priorizando a Experiência do Usuário para
            entregar Soluções verdadeiramente diferenciadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicesRow1.map((service, index) => (
            <DetailedServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicesRow2.map((service, index) => (
            <DetailedServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesRow3.map((service, index) => (
            <DetailedServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
