import React from "react";

export const ContactSection: React.FC = () => {
  const scrollToFooter = () => {
    const element = document.getElementById("contato-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-96 overflow-hidden">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/1b14be22b3380a1775f5b5acef51e41f10b8186a?placeholderIfAbsent=true"
        alt="Team background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Equipe ÜpBase</h2>
          <p className="text-xl mb-12 leading-relaxed">
            Estamos prontos para impulsionar o Sucesso do seu Negócio. Conte
            conosco para encontrar Soluções Tecnológicas sob medida.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5513997318796&text=Ol%C3%A1+encontrei+a+upbase+na+web%2C+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"
            className="bg-white text-[rgba(86,51,208,1)] text-base font-medium px-8 py-4 rounded hover:bg-gray-100 transition-colors"
          >
            Fale com um de Nossos Consultores
          </a>
        </div>
      </div>
    </section>
  );
};
