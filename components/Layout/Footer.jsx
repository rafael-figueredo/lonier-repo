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
                href="https://www.facebook.com/studiolonierespacobeleza/" 
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
