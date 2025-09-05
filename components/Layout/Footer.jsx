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
