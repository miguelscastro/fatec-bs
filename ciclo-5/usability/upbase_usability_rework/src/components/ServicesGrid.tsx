import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonColor?: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonColor,
  link,
}) => {
  return (
    <article className="bg-white border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-6">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-12 h-12 object-contain flex-shrink-0 mt-2"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-black mb-4">{title}</h3>
          <p className="text-base text-[rgba(122,122,122,1)] leading-relaxed mb-6">
            {description}
          </p>
          {buttonText && (
            <a
              href={link}
              className={`${
                buttonColor || "bg-[rgba(97,206,112,1)]"
              } text-white text-sm font-medium px-6 py-3 rounded hover:opacity-90 transition-opacity`}
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/94aab08586912c8f1bc51f6b300a11e48ca41183?placeholderIfAbsent=true",
      title: "Tecnologia",
      description:
        "Somos especialista em softwares, criamos, gerimos e idealizamos junto com você. Agende uma reunião conosco.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/474e38ce47ea810261b59cbe78abeda7646a948f?placeholderIfAbsent=true",
      title: "Gestão",
      description:
        "Usando técnicas de gestão estratégica, ganhe conforto na tomada de decisão na areá de tecnologia, conheça nossos analistas de requisitos, pwo e scrum master.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/f9f04eb7adc83693766c47c1a5d995a5ad3028cb?placeholderIfAbsent=true",
      title: "Marketing Digital",
      description:
        "Uma excelente forma de expandir suas vendas e valorizar sua marca. Buscar uma Empresa de Marketing Digital que entenda de tecnologia parece um desafio, por isso nos criamos um Departamento só para atender as demandas do Mercado Digital, Fale com um de nossos Consultores.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/41d720ca38b836191c7fc6a045e976c86b2fe6a6?placeholderIfAbsent=true",
      title: "Terceirização e Hunting",
      description:
        "Conheça nossa Consultoria de RH. Tenha profissionais qualificados no seu time com a nossa Consultoria Especializada em Recrutamento.",
      buttonText: "Saiba mais",
      buttonColor: "bg-[rgba(97,206,112,1)]",
      link: "https://upbase.com.br/consultoriarh/",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
