import React from "react";
import useDocumentScrollThrottled from "../components/Hooks/useDocumentScrollThrottled";
import smoothscroll from "smoothscroll-polyfill";
export default function ScrollButton() {
  const [showScroll, setShowScroll] = React.useState(false);
  const [moveScroll, setMoveScroll] = React.useState(false);
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    const bottom = document.body.scrollHeight - 1100;
    setShowScroll(currentScrollTop > 400);
    setMoveScroll(currentScrollTop > bottom);
  });
  const scrollTop = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <picture>
        <source type="image/webp" srcSet="scrollToTop.webp" />
        <source type="image/png" srcSet="scrollToTop.png" />
        <img
          src="scrollToTop.png"
          alt="Scroll to top"
          className={`fixed bottom-15 right-2.5 z-50 cursor-pointer transition-all duration-300 opacity-50 hover:opacity-100 ${
            moveScroll ? "transform translate-y-[-110px]" : "transform translate-y-8"
          } ${showScroll ? "flex" : "hidden"}`}
          onClick={scrollTop}
          style={{
            height: 40,
            width: 40,
          }}
        />
      </picture>
    </div>
  );
}
