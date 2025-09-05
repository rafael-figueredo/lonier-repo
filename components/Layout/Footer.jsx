import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-gray-100 py-12" style={{ backgroundColor: "#5c3327" }}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Recursos */}
          <div className="footer-item">
            <div className="mb-4">
              <h4 className="text-primary-200 font-bold text-lg uppercase">Recursos</h4>
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Rastreamento de Pedidos</a></li>
              <li><a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Informações de Envio</a></li>
              <li><a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Política de Devolução</a></li>
              <li><a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Saldo do Cartão Presente</a></li>
              <li><a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Termos e Condições</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="footer-item">
            <div className="mb-4">
              <h4 className="text-primary-200 font-bold text-lg uppercase">Empresa</h4>
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Studio Lonier nas Notícias</a></li>
              <li><a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Nossa História</a></li>
            </ul>
          </div>

          {/* Atendimento ao Cliente */}
          <div className="footer-item">
            <div className="mb-4">
              <h4 className="text-primary-200 font-bold text-lg uppercase">Atendimento ao Cliente</h4>
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Entre em Contato</a></li>
              <li><a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Agendar Consulta</a></li>
            </ul>
          </div>

          {/* Siga-nos */}
          <div className="footer-item">
            <div className="mb-4">
              <h4 className="text-primary-200 font-bold text-lg uppercase">Siga-nos</h4>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/StudioLonierSalon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-primary-300 transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/studiolonier/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-primary-300 transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.796-1.418-1.947-1.418-3.244s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                </svg>
              </a>
              <a 
                href="tel:617-559-0660" 
                className="text-gray-100 hover:text-primary-300 transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.65 3 4.19C3 13.27 10.73 21 19.81 21c.54 0 .99-.45.99-.99v-3.64c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">

            {/* Copyright */}
            <div className="copyright text-primary-200">
              © {year} Studio Lonier Salon. Todos os direitos reservados.
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-4 text-center lg:text-left text-primary-200 text-sm">
          Endereço: R. Miguel Rotger Domingues, 268 - Centro, Itapecerica da Serra - SP, 06850-780
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <button className="bg-primary-200 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-primary-300 transition-colors">
          Chat
        </button>
      </div>
    </footer>
  );
}
