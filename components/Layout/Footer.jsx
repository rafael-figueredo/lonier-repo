import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-gray-100 py-12" style={{ backgroundColor: "#5c3327" }}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">

            {/* Copyright */}
            <div className="copyright text-primary-200">
              © {year} Studio Lonier Salon. Todos os direitos reservados.
            </div>

            {/* Legal Links */}
            <div className="bottom-menu flex flex-wrap justify-center lg:justify-end space-x-4 text-sm">
              <a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Mapa do Site</a>
              <span className="text-primary-600">|</span>
              <a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Termos de Uso</a>
              <span className="text-primary-600">|</span>
              <a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Política de Privacidade</a>
              <span className="text-primary-600">|</span>
              <a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">LGPD</a>
              <span className="text-primary-600">|</span>
              <a href="#" className="text-gray-100 hover:text-primary-300 transition-colors flex items-center">
                Escolhas de Privacidade
                <span className="ml-1 text-blue-400">☐</span>
                <span className="ml-1">×</span>
              </a>
              <span className="text-primary-600">|</span>
              <a href="#" className="text-gray-100 hover:text-primary-300 transition-colors">Declaração de Acessibilidade</a>
            </div>

            {/* Payment Methods */}
            <div className="accepted-payments flex items-center space-x-2">
              <span className="text-primary-200 text-sm mr-2">Aceitamos:</span>
              <div className="flex space-x-1">
                <span className="text-white bg-gray-800 px-2 py-1 rounded text-xs font-semibold">VISA</span>
                <span className="text-white bg-gray-800 px-2 py-1 rounded text-xs font-semibold">MC</span>
                <span className="text-white bg-gray-800 px-2 py-1 rounded text-xs font-semibold">AMEX</span>
                <span className="text-white bg-gray-800 px-2 py-1 rounded text-xs font-semibold">DISCOVER</span>
              </div>
            </div>

            {/* Country Selector */}
            <div className="dropdown flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary-200 rounded-full"></div>
              <a href="#" className="text-gray-100 hover:text-primary-300 transition-colors text-sm">
                Brasil
              </a>
              <span className="text-primary-200">▲</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-4 text-center lg:text-left text-primary-200 text-sm">
            617.559.0660 | 765 Beacon St. Newton Centre, MA 02459
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
