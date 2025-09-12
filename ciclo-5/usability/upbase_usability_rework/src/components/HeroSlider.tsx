
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    {
      id: 1,
      backgroundImage: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/5e06c580b22d99daec72f3a9e566bc76140cd82e?placeholderIfAbsent=true",
      title: "Integre seu ERP",
      subtitle: "SAP, Totvs",
      description: "Com soluções personalizadas e inteligentes",
      buttonText: "Saiba mais sobre nossos consultores ABAP"
    },
    {
      id: 2,
      backgroundImage: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/9d6fec8f4137fce28ac2e295452fdc6e75ade11e?placeholderIfAbsent=true",
      title: "Agregue profissionais a sua squad.",
      subtitle: "Encontre os profissionais de tecnologia você procura com nossa consultoria de RH.",
      description: "Hunting e Terceirização",
      buttonText: "Saiba mais."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="inicio" className="relative w-full h-[600px] overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.backgroundImage}
              alt={`Slide ${slide.id} background`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4">
              <div className="text-white max-w-lg">
                <h1 className="text-5xl font-bold leading-tight mb-6">
                  {slide.title}
                </h1>
                <h2 className="text-2xl font-normal mb-6">
                  {slide.subtitle}
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <button 
                  onClick={scrollToContact}
                  className="bg-[rgba(86,51,208,1)] text-white text-sm font-medium px-8 py-4 rounded hover:bg-[rgba(86,51,208,0.9)] transition-colors"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
        <div 
          className="h-full bg-[rgba(86,51,208,1)] transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};
