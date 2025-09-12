
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ClientsSection: React.FC = () => {
  const clientLogos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/030302c0964a70e510765e76200c7c713130bfab?placeholderIfAbsent=true",
      alt: "Client logos set 1"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/030302c0964a70e510765e76200c7c713130bfab?placeholderIfAbsent=true",
      alt: "Client logos set 2"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/030302c0964a70e510765e76200c7c713130bfab?placeholderIfAbsent=true",
      alt: "Client logos set 3"
    }
  ];

  return (
    <section id="clientes" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-4 h-1 bg-[rgba(86,51,208,1)] mb-6" />
            <h2 className="text-3xl text-[rgba(86,51,208,1)] font-semibold text-center lg:text-left">
              Nossos clientes
            </h2>
          </div>
          <div className="flex-1 w-full">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {clientLogos.map((logo, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-full object-contain rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
