import React from "react";
import useDocumentScrollThrottled from "../Hooks/useDocumentScrollThrottled";
import { useRouter } from "next/router";
import Link from "next/link";
import smoothscroll from "smoothscroll-polyfill";

export default function Header(props) {
  const router = useRouter();

  // Resize navbar on scroll //
  const [showMiniNav, setShowMiniNav] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    // Só aplica a animação em telas médias e maiores (md: 768px+)
    if (window.innerWidth >= 768) {
      setShowMiniNav(currentScrollTop > 50);
    } else {
      setShowMiniNav(false); // Sempre false no mobile
    }
  });

  // Cleanup effect to remove body class when component unmounts
  React.useEffect(() => {
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, []);

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    if (newState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
      document.body.classList.remove('menu-open');
    }, 300); // Tempo da animação
  };

  return (
         <div className="fixed z-50 top-0 w-screen">
      <nav
        className={`relative flex items-center justify-between px-4 transition-all duration-500 ${
          showMiniNav ? "h-20 lg:h-16" : "h-20 lg:h-20"
        } bg-gray-100 border-b-2 border-primary-300 shadow-lg`}
      >
                 <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6">
           {/* Mobile Menu Button */}
           <div className="lg:hidden">
             <button
               onClick={toggleMobileMenu}
               className="text-primary-600 hover:text-primary-700 focus:outline-none focus:text-primary-700"
               aria-label={mobileMenuOpen ? "Fechar menu" : "Expandir menu"}
             >
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 {mobileMenuOpen ? (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 ) : (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                 )}
               </svg>
             </button>
           </div>

          {/* Left Navigation Links - Hidden on Mobile */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link
              scroll={false}
              href={{
                pathname: "/",
                query: { id: "services" },
              }}
              className="cursor-pointer font-semibold uppercase text-sm hover:text-primary-600 transition-colors relative" 
              style={{ 
                color: "#5c3327",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                const span = e.currentTarget.querySelector('span');
                span.style.width = '100%';
                span.style.left = '0';
                span.style.transform = 'translateX(0)';
              }}
              onMouseLeave={(e) => {
                const span = e.currentTarget.querySelector('span');
                span.style.width = '0';
                span.style.left = '50%';
                span.style.transform = 'translateX(-50%)';
              }}
            >
              Serviços
              <span 
                className="absolute bottom-0 h-0.5 bg-primary-500 transition-all duration-300 ease-out" 
                style={{ 
                  left: '50%',
                  width: '0',
                  transform: 'translateX(-50%)'
                }}
              ></span>
            </Link>
            <Link
              scroll={false}
              href={{
                pathname: "/",
                query: { id: "team" },
              }}
              className="cursor-pointer font-semibold uppercase text-sm hover:text-primary-600 transition-colors relative" 
              style={{ 
                color: "#5c3327",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                const span = e.currentTarget.querySelector('span');
                span.style.width = '100%';
                span.style.left = '0';
                span.style.transform = 'translateX(0)';
              }}
              onMouseLeave={(e) => {
                const span = e.currentTarget.querySelector('span');
                span.style.width = '0';
                span.style.left = '50%';
                span.style.transform = 'translateX(-50%)';
              }}
            >
              Nossa equipe
              <span 
                className="absolute bottom-0 h-0.5 bg-primary-500 transition-all duration-300 ease-out" 
                style={{ 
                  left: '50%',
                  width: '0',
                  transform: 'translateX(-50%)'
                }}
              ></span>
            </Link>
          </div>

                     {/* Centered Logo */}
           <div className="flex-1 flex justify-center px-4 lg:px-8">
             <a
               className="cursor-pointer"
               onClick={() => {
                 router.push("/").then(() => {
                   smoothscroll.polyfill();
                   window.scrollTo({ top: 0, behavior: "smooth" });
                 });
                 closeMobileMenu();
               }}
             >
               <img
                 src="/images/logo.png"
                 alt="Studio Lonier Logo"
                                   className={`hover:opacity-75 transition-all duration-700 ease-out ${
                    showMiniNav
                      ? "w-28 lg:w-28 h-auto max-h-16 lg:max-h-16 object-contain"
                      : "w-28 lg:w-40 h-auto max-h-16 lg:max-h-20 object-contain"
                  }`}
                 style={{
                   transition: 'all 0.7s ease-out'
                 }}
               />
             </a>
           </div>

           {/* Empty div for mobile layout balance */}
           <div className="lg:hidden w-6"></div>

          {/* Right Navigation Links - Hidden on Mobile */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link
              scroll={false}
              href={{
                pathname: "/",
                query: { id: "products" },
              }}
              className="cursor-pointer font-semibold uppercase text-sm hover:text-primary-600 transition-colors relative" 
              style={{ 
                color: "#5c3327",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                const span = e.currentTarget.querySelector('span');
                span.style.width = '100%';
                span.style.left = '0';
                span.style.transform = 'translateX(0)';
              }}
              onMouseLeave={(e) => {
                const span = e.currentTarget.querySelector('span');
                span.style.width = '0';
                span.style.left = '50%';
                span.style.transform = 'translateX(-50%)';
              }}
            >
              Contato
              <span 
                className="absolute bottom-0 h-0.5 bg-primary-500 transition-all duration-300 ease-out" 
                style={{ 
                  left: '50%',
                  width: '0',
                  transform: 'translateX(-50%)'
                }}
              ></span>
            </Link>
            <Link
              scroll={false}
              href={{
                pathname: "/",
                query: { id: "contact" },
              }}
              className="cursor-pointer font-bold uppercase text-sm transition-all duration-300 relative inline-block px-6 lg:px-8 py-2 lg:py-3 rounded-full" 
              style={{ 
                background: 'transparent',
                border: '1px solid #edcb17',
                color: "#5c3327",
                position: "relative",
                boxShadow: '0 2px 8px rgba(237, 203, 23, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(237, 203, 23, 0.05)';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(237, 203, 23, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(237, 203, 23, 0.1)';
              }}
            >
              Agendar
            </Link>
          </div>
        </div>
      </nav>

             {/* Mobile Menu */}
       {mobileMenuOpen && (
         <div className={`lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-white z-40 ${isClosing ? 'animate-slide-up' : 'animate-slide-down'}`} style={{ height: 'calc(100vh - 80px)' }}>
                     {/* Main Content - Left Aligned */}
           <div className="flex flex-col h-full px-6 pt-4">
            {/* Navigation Links */}
            <div className="space-y-6 text-left">
              <Link
                scroll={false}
                href={{
                  pathname: "/",
                  query: { id: "services" },
                }}
                className={`flex items-center justify-between w-full py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer text-left animate-fade-in-up menu-item-delay-1`}
                style={{ color: "#5c3327" }}
                onClick={closeMobileMenu}
              >
                <span className="font-semibold text-lg">Nossos Serviços</span>
                <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                scroll={false}
                href={{
                  pathname: "/",
                  query: { id: "team" },
                }}
                className={`flex items-center justify-between w-full py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer animate-fade-in-up menu-item-delay-2`}
                style={{ color: "#5c3327" }}
                onClick={closeMobileMenu}
              >
                <span className="font-semibold text-lg">Nossa Equipe</span>
                <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                scroll={false}
                href={{
                  pathname: "/",
                  query: { id: "products" },
                }}
                className={`flex items-center justify-between w-full py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer animate-fade-in-up menu-item-delay-3`}
                style={{ color: "#5c3327" }}
                onClick={closeMobileMenu}
              >
                <span className="font-semibold text-lg">Produtos</span>
                <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                scroll={false}
                href={{
                  pathname: "/",
                  query: { id: "contact" },
                }}
                className={`flex items-center justify-between w-full py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer animate-fade-in-up menu-item-delay-4`}
                style={{ color: "#5c3327" }}
                onClick={closeMobileMenu}
              >
                <span className="font-semibold text-lg">Contato</span>
                <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Agendar Button */}
              <div className="pt-6 animate-fade-in-up menu-item-delay-5">
                <Link
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "contact" },
                  }}
                  className="block w-full text-left py-4 px-6 rounded-full font-bold text-lg transition-all duration-300" 
                  style={{ 
                    background: 'linear-gradient(135deg, #edcb17 0%, #ca8a04 100%)',
                    color: "#5c3327",
                    boxShadow: '0 4px 15px rgba(237, 203, 23, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(237, 203, 23, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(237, 203, 23, 0.3)';
                  }}
                  onClick={closeMobileMenu}
                >
                  Agendar Horário
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
