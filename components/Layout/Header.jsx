import React from "react";
import useDocumentScrollThrottled from "../Hooks/useDocumentScrollThrottled";
import { useRouter } from "next/router";
import Link from "next/link";
import smoothscroll from "smoothscroll-polyfill";

export default function Header(props) {
  const router = useRouter();

  // Resize navbar on scroll //
  const [showMiniNav, setShowMiniNav] = React.useState(false);
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    setShowMiniNav(currentScrollTop > 100);
  });

  return (
    <div className="fixed z-30 top-0 w-screen">
      <nav
        className={`relative flex items-center justify-between px-4 transition-all duration-500 ${
          showMiniNav ? "h-16" : "h-24"
        } bg-gray-100 border-b-2 border-primary-300 shadow-lg`}
      >
                 <div className="container mx-auto flex items-center justify-between px-8">
           {/* Left Navigation Links */}
           <div className="flex items-center space-x-12">
            <Link
              passHref={true}
              scroll={false}
              href={{
                pathname: "/",
                query: { id: "services" },
              }}
            >
            <a 
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
          </a>
            </Link>
            <Link
              passHref={true}
              scroll={false}
              href={{
                pathname: "/",
                query: { id: "team" },
              }}
            >
      <a 
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
      </a>
            </Link>
          </div>

                     {/* Centered Logo */}
           <div className="flex-1 flex justify-center px-16">
            <a
              className="cursor-pointer"
              onClick={() =>
                router.push("/").then(() => {
                  smoothscroll.polyfill();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                })
              }
            >
              <img
                src="/images/logo.png"
                alt="Studio Lonier Logo"
                className={`hover:opacity-75 transition-all duration-700 ease-out ${
                  showMiniNav
                    ? "w-32 h-auto max-h-20 object-contain"
                    : "w-48 h-auto max-h-32 object-contain"
                }`}
              />
            </a>
          </div>

                     {/* Right Navigation Links */}
           <div className="flex items-center space-x-12">
            <Link
              passHref={true}
              scroll={false}
              href={{
                pathname: "/",
                query: { id: "products" },
              }}
            >
          <a 
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
            Produtos
            <span 
              className="absolute bottom-0 h-0.5 bg-primary-500 transition-all duration-300 ease-out" 
              style={{ 
                left: '50%',
                width: '0',
                transform: 'translateX(-50%)'
              }}
            ></span>
          </a>
            </Link>
            <Link
              passHref={true}
              scroll={false}
              href={{
                pathname: "/",
                query: { id: "contact" },
              }}
            >
              <a 
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
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
