import React from "react";

export default function Differentials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#5c3327" }}>
            Nossos Diferenciais
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Qualidade Garantida */}
          <div 
            className="rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            style={{ backgroundColor: "#f9f9f9" }}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "#fef3c7" }}
            >
              <svg 
                className="w-8 h-8" 
                fill="#edcb17" 
                viewBox="0 0 512.001 512.001"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M336.079,427.329c-0.718,0.029-1.703-0.157-2.426-0.157h-26.607v-0.001c-2.877,0-5.435-0.029-8.19-0.467
                  c-0.281,1.299-0.172,2.85-0.172,4.234v15.458c0,15.457-13.106,27.622-28.561,27.622H93.038c-11.17,0-20.258-9.088-20.258-20.258
                  c0-11.17,9.088-20.258,20.258-20.258h38.403c29.789,0,54.024-24.031,54.024-53.82c0-2.083-0.13-4.021-0.361-6.042
                  c-3.067-26.9-25.957-47.757-53.663-47.757h-12.992c-10.489,0-18.992,8.503-18.992,18.992c0,10.488,8.503,18.992,18.992,18.992
                  h12.992c8.845,0,16.04,6.981,16.04,15.826c0,8.845-7.197,15.826-16.04,15.826H93.038c-32.114,0-58.241,26.128-58.241,58.241
                  c0,32.115,26.128,58.241,58.241,58.241h177.083c36.401,0,66.544-29.204,66.544-65.605v-15.458
                  C336.665,429.775,336.279,428.435,336.079,427.329z"/>
                <path d="M278.424,213.943v159.961c0,15.634,12.987,27.944,28.62,27.944h26.609c13.201,0,24.845-9.151,27.689-22.042
                  l34.893-158.687L278.424,213.943z"/>
                <path d="M74.033,20.933C55.96,22.051,41.661,37.11,41.661,55.216v86.419c0,18.108,14.299,33.168,32.373,34.286l19.537,1.2V19.732
                  L74.033,20.933z"/>
                <path d="M457.37,16.966C445.646,5.944,430.546,0,414.62,0c-1.323,0-2.688,0.041-4.022,0.124L118.894,18.165v160.522
                  l291.667,18.042c17.396,1.084,34.11-4.906,46.808-16.842c12.698-11.937,19.835-28.109,19.835-45.537V62.503
                  C477.204,45.075,470.068,28.903,457.37,16.966z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#5c3327" }}>
              Produtos Premium
            </h3>
            <p className="leading-relaxed" style={{ color: "#6b7280" }}>
              Utilizamos apenas produtos de alta qualidade e marcas renomadas para garantir os melhores resultados em seus tratamentos.
            </p>
          </div>

          {/* Card 2 - Variedade de Produtos */}
          <div 
            className="rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            style={{ backgroundColor: "#f9f9f9" }}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "#fef3c7" }}
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: "#edcb17" }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#5c3327" }}>
              Serviços Completos
            </h3>
            <p className="leading-relaxed" style={{ color: "#6b7280" }}>
              Oferecemos uma ampla gama de serviços de beleza: cortes, coloração, tratamentos capilares, manicure, pedicure e muito mais.
            </p>
          </div>

          {/* Card 3 - Atendimento Personalizado */}
          <div 
            className="rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            style={{ backgroundColor: "#f9f9f9" }}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "#fef3c7" }}
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: "#edcb17" }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#5c3327" }}>
              Profissionais Especializados
            </h3>
            <p className="leading-relaxed" style={{ color: "#6b7280" }}>
              Nossa equipe é formada por profissionais altamente qualificados e experientes, prontos para cuidar da sua beleza com carinho e dedicação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
