import React from "react";

export const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/6c6686bb5e99ff4ea44fcdaeafb17b3fd93638e0?placeholderIfAbsent=true"
              alt="ÜpBase Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center space-x-8 text-base text-[rgba(86,51,208,1)] font-semibold">
              <li className="flex flex-col items-center">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="px-4 py-2 hover:text-[rgba(86,51,208,0.8)] transition-colors"
                >
                  Inicio
                </button>
                <div className="w-full h-1 bg-[rgba(86,51,208,1)] rounded-full mt-1" />
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="px-4 py-2 hover:text-[rgba(86,51,208,0.8)] transition-colors"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("clientes")}
                  className="px-4 py-2 hover:text-[rgba(86,51,208,0.8)] transition-colors"
                >
                  Clientes
                </button>
              </li>
              <li>
                <a
                  href="https://upbase.com.br/blog/"
                  className="px-4 py-2 hover:text-[rgba(86,51,208,0.8)] transition-colors"
                >
                  Cases
                </a>
              </li>
              <li>
                <a
                  href="https://upbase.com.br/programa-de-estagios/"
                  className="px-4 py-2 hover:text-[rgba(86,51,208,0.8)] transition-colors"
                >
                  Estágios
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
