import React from "react";
import useScrollAnimation from "./Hooks/useScrollAnimation";

export default function Hero() {
  const [heroRef, isHeroVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="home"
      ref={heroRef}
      className={`py-12 lg:py-16 flex items-center scroll-animate ${isHeroVisible ? 'animate-fade-up' : ''}`}
      style={{ 
        background: 'linear-gradient(135deg, #fcfcec 0%, #f9f9f9 100%)',
        paddingTop: '100px' // Para compensar o header fixo
      }}
    >
      <div className="container mt-16 mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                <span style={{ color: "#FFD700" }}>Beleza e elegância</span>
                <br />
                <span style={{ color: "#5c3327" }}>para você se sentir única</span>
              </h1>
            </div>

            {/* Subheading */}
            <div>
              <p 
                className="text-base lg:text-lg leading-relaxed"
                style={{ color: "#6b7280" }}
              >
                No Studio Lonier, oferecemos serviços de alta qualidade com profissionais especializados 
                para realçar sua beleza natural e garantir que você saia ainda mais radiante.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Primary Button */}
              <a 
                href="https://wa.me/5511951316040"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:transform hover:scale-105 inline-block text-center"
                style={{ 
                  backgroundColor: "#edcb17",
                  color: "#5c3327",
                  boxShadow: "0 4px 15px rgba(237, 203, 23, 0.3)",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(237, 203, 23, 0.4)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(237, 203, 23, 0.3)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Agendar Horário
              </a>

              {/* Secondary Button */}
              <button 
                className="px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:transform hover:scale-105"
                style={{ 
                  backgroundColor: "transparent",
                  color: "#5c3327",
                  border: "2px solid #edcb17",
                  boxShadow: "0 2px 8px rgba(237, 203, 23, 0.1)"
                }}
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    smoothscroll.polyfill();
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(237, 203, 23, 0.05)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(237, 203, 23, 0.2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(237, 203, 23, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Nossos Serviços
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div 
            className="relative"
            onMouseEnter={(e) => {
              const container = e.currentTarget.querySelector('.image-container');
              
              container.style.transform = 'translateY(-8px)';
              container.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              const container = e.currentTarget.querySelector('.image-container');
              
              container.style.transform = 'translateY(0)';
              container.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div 
              className="image-container relative rounded-xl overflow-hidden shadow-xl"
              style={{
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
            >
              {/* Imagem real do Studio Lonier */}
              <img 
                src="https://i.imgur.com/wMZv6rG.jpeg"
                alt="Studio Lonier - Serviço de lavagem de cabelo"
                className="w-full h-64 lg:h-80 object-cover"
                style={{ 
                  objectPosition: "center",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
