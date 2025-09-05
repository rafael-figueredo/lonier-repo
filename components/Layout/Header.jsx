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
    setMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
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
              className="cursor-pointer font-semibold uppercase text-sm transition-all duration-300 relative inline-block px-6 lg:px-8 py-2 lg:py-3 rounded-full font-bold" 
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

             {/* Mobile Menu Overlay */}
       {mobileMenuOpen && (
         <div className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-white z-40" style={{ height: 'calc(100vh - 80px)' }}>
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
                className="flex items-center justify-between w-full py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer text-left" 
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
                className="flex items-center justify-between w-full py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer" 
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
                className="flex items-center justify-between w-full py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer" 
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
                className="flex items-center justify-between w-full py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer" 
                style={{ color: "#5c3327" }}
                onClick={closeMobileMenu}
              >
                <span className="font-semibold text-lg">Contato</span>
                <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Agendar Button */}
              <div className="pt-6">
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

              {/* Social Media */}
              <div className="pt-8">
                <div className="text-left mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">Siga-nos</h4>
                </div>
                <div className="flex justify-start space-x-6">
                  <a 
                    href="https://www.facebook.com/StudioLonierSalon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/studiolonier/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.796-1.418-1.947-1.418-3.244s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                    </svg>
                  </a>
                  <a 
                    href="tel:617-559-0660" 
                    className="text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.65 3 4.19C3 13.27 10.73 21 19.81 21c.54 0 .99-.45.99-.99v-3.64c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
