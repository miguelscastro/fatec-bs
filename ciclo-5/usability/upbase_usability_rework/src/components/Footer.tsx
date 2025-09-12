import React, { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const Footer: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const socialLinks = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/2391f6a2086f04980e47c4ae5c372ad1cfeee11f?placeholderIfAbsent=true",
      alt: "Facebook",
      url: "https://www.facebook.com/upBaseConsultoriaTi",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/682d4ac7b48061fb5aedfcc7703d5a6b4122b6a1?placeholderIfAbsent=true",
      alt: "Instagram",
      url: "https://www.instagram.com/consultoria.upbase/",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/73c1f40725b749a86b6bd8c57e545c8935f43bc4?placeholderIfAbsent=true",
      alt: "LinkedIn",
      url: "https://www.linkedin.com/company/upbase-tech/",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/415f6405b01f3fec0e04f66eff058768b6cf9acb?placeholderIfAbsent=true",
      alt: "YouTube",
      url: "https://www.youtube.com/@upcode1765",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/607e111d16afbd3402a99757d2087f58b9cbe047?placeholderIfAbsent=true",
      alt: "WhatsApp",
      url: "https://api.whatsapp.com/send/?phone=5513997318796&text=Ol%C3%A1+encontrei+a+upbase+na+web%2C+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0",
    },
  ];

  const menuItems = [
    { label: "Home", url: "#" },
    {
      label: "Programa de Estágio",
      url: "https://upbase.com.br/programa-de-estagios/",
    },
    { label: "Trabalhe Conosco", url: "https://recrutamento.upbase.com.br/" },
    { label: "Cases", url: "https://upbase.com.br/blog/" },
  ];

  return (
    <footer id="contato" className="bg-[rgba(86,51,208,1)] w-full">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/12c740a5be3ad1a65290637b93a646e3ff9ce482?placeholderIfAbsent=true"
              alt="ÜpBase Logo"
              className="h-16 mb-6"
            />
            <div className="flex space-x-2 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 bg-white bg-opacity-10 rounded flex items-center justify-center hover:bg-opacity-20 transition-colors"
                  aria-label={social.alt}
                >
                  <img src={social.icon} alt={social.alt} className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-white">
              <p className="font-bold mb-4">
                Unindo Pessoas à Tecnologia, e a Tecnologia as Pessoas.
              </p>
              <p>(13) 99731-8796</p>
            </div>
          </div>

          <nav className="text-white">
            <h3 className="text-xl font-semibold mb-6">Menu</h3>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div id="contato-form" className="text-white">
            <div className="mb-6">
              <p className="text-base">
                <span className="font-bold">Fale Conosco.</span>
                <span> Deixe seu contato e ligaremos para você.</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nome"
                required
                className="w-full px-4 py-3 rounded border border-gray-300 text-black focus:outline-none focus:border-[rgba(86,51,208,1)] transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded border border-gray-300 text-black focus:outline-none focus:border-[rgba(86,51,208,1)] transition-colors"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(DD) 00000-0000"
                required
                className="w-full px-4 py-3 rounded border border-gray-300 text-black focus:outline-none focus:border-[rgba(86,51,208,1)] transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Deixe aqui sua mensagem"
                required
                rows={4}
                className="w-full px-4 py-3 rounded border border-gray-300 text-black resize-none focus:outline-none focus:border-[rgba(86,51,208,1)] transition-colors"
              />
              <button
                type="submit"
                className="bg-[rgba(97,206,112,1)] text-white font-medium px-8 py-3 rounded hover:bg-[rgba(97,206,112,0.9)] transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(14,0,65,1)] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-white text-sm">
          Todos os Direitos Reservados © Upbase - 2025
        </div>
      </div>
    </footer>
  );
};
