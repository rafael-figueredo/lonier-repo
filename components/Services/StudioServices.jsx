import React from "react";
import useScrollAnimation from "../Hooks/useScrollAnimation";

export default function StudioServices() {
  const [servicesRef, isServicesVisible] = useScrollAnimation({ threshold: 0.1 });

  const professionals = [
    {
      id: 1,
      name: "Carla",
      title: "Cabeleireira & Camuflagem Paramédica",
      schedule: "DE SEGUNDA A SÁBADO",
      services: "Escova, Botox, Luzes, Tintura, Corte, Penteados, Camuflagem de Estrias e Cicatrizes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#edcb17" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 2,
      name: "Cassia",
      title: "Esteticista & Unhas",
      schedule: "DE SEGUNDA A SÁBADO",
      services: "Design Sobrancelhas, Micro Labial, Micro Sobrancelhas, Unhas de Gel, Limpeza de Pele, Drenagem Linfática, Massagem Redutora e Modeladora",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#edcb17" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: 3,
      name: "Vanusa",
      title: "Manicure e Pedicure",
      schedule: "SEGUNDA, QUINTA E SEXTA",
      services: "Manicure e Pedicure",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#edcb17" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    },
    {
      id: 4,
      name: "Keisse",
      title: "Spa dos Pés",
      schedule: "SEXTA E SÁBADO",
      services: "Manicure, Pedicure e Spa dos Pés",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#edcb17" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 5,
      name: "Fran",
      title: "Cabeleireira",
      schedule: "DE TERÇA A QUINTA",
      services: "Escova, Botox, Tranças, Manicure e Pedicure",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#edcb17" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 6,
      name: "Milena",
      title: "Extensão de Cílios",
      schedule: "SEGUNDA, QUINTA, SEXTA E SÁBADO",
      services: "Extensionista de Cílios",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#edcb17" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="professionals"
      ref={servicesRef}
      className={`py-16 bg-white scroll-animate ${isServicesVisible ? 'animate-fade-up' : ''}`}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#5c3327" }}>
            Conheça Nossas Profissionais
          </h2>
          <p className="text-lg" style={{ color: "#6b7280" }}>
            Especialistas em beleza prontas para cuidar de você
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {professionals.map((professional, index) => (
            <div 
              key={professional.id}
              className="rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: "#f9f9f9" }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#fef3c7" }}
                >
                  {professional.icon}
                </div>
                
                {/* Professional Info */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold" style={{ color: "#5c3327" }}>
                    {professional.name}
                  </h3>
                  <p className="text-sm font-semibold" style={{ color: "#edcb17" }}>
                    {professional.title}
                  </p>
                  <p className="text-xs font-medium" style={{ color: "#6b7280" }}>
                    {professional.schedule}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm" style={{ color: "#6b7280" }}>
                      <strong>Serviços:</strong> {professional.services}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6" style={{ color: "#6b7280" }}>
            Agende seu horário com nossas profissionais especializadas
          </p>
          <a 
            href="https://wa.me/5511951316040"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 inline-block"
            style={{ 
              backgroundColor: "#edcb17",
              boxShadow: "0 8px 25px rgba(237, 203, 23, 0.3)",
              textDecoration: "none"
            }}
          >
            Agendar Horário
          </a>
        </div>
      </div>
    </section>
  );
}