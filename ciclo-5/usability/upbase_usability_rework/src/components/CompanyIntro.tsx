import React from "react";

export const CompanyIntro: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="fixed justify-between items-start mb-8 top-0 right-10 z-50">
          <div className="bg-[rgba(3,173,11,1)] shadow-lg text-white text-sm font-bold px-4 py-2 rounded">
            Translate »
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[rgba(86,51,208,1)] text-4xl font-medium leading-tight mb-6">
            Transforme sua Empresa em fonte de Inovação Tecnológica
          </h2>
          <p className="text-[rgba(122,122,122,1)] text-lg leading-relaxed">
            A ÜpBase tem se consolidado como uma das principais Empresas de
            Tecnologia da Informação e Transformação Digital no Brasil. Com uma
            abordagem 360°, nosso foco é oferecer soluções Inovadoras e de alta
            qualidade para atender nossos Clientes de forma completa e orientada
            para o Futuro.
          </p>
        </div>
      </div>
    </section>
  );
};
