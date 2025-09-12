
import React from 'react';

export const AboutSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="relative w-full min-h-[469px] overflow-hidden">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/de26afe9618b4e636d1417904e9939256f69a67b?placeholderIfAbsent=true"
        alt="About us background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/58f135a5e9eef208d5decb2d1df7d1eefbff6a87?placeholderIfAbsent=true"
              alt="About us illustration"
              className="w-full max-w-xs object-contain"
            />
          </div>
          
          <div className="lg:col-span-2 text-white">
            <div className="w-16 h-1 bg-white mb-6" />
            <h2 className="text-3xl font-semibold mb-6">Sobre nós</h2>
            
            <div className="space-y-4 text-base mb-8">
              <p>
                ÜpBase é uma{" "}
                <span className="font-bold">Consultoria Digital</span>{" "}
                dedicada a oferecer soluções Inovadoras em{" "}
                <span className="font-bold">
                  Tecnologia, Gestão Estratégica de Tecnologias, Pessoas (RH) e Marketing Digital.
                </span>
              </p>
              
              <p>
                Com uma Equipe Comprometida com Resultados e Inovação nossos 
                Serviços abrangem desde o Desenvolvimento Personalizado de Software 
                até Consultoria de LGPD e Conformidade com a Segurança da Informação.
              </p>
              
              <p>
                Nossa atuação se estende a diferentes Setores conectando Profissionais 
                talentosos a grandes Projetos e Clientes buscando sempre otimizar e 
                apoiar as operações de Tecnologia e de Negócios dos nossos parceiros.
              </p>
            </div>

            <button 
              onClick={scrollToContact}
              className="bg-white text-[rgba(86,51,208,1)] text-base font-medium px-8 py-4 rounded hover:bg-gray-100 transition-colors"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
