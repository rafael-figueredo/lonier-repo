import Image from "next/image";
import Backdrop from "../Backdrop";
import React from "react";
export default function CovidPolicy() {
  const [showPolicy, setShowPolicy] = React.useState(false);
  return (
    <div
      className="flex justify-center py-2 text-color"
      style={{ backgroundColor: "#fbfbef" }}
    >
      <div className="cursor-pointer" onClick={() => setShowPolicy(true)}>
        <picture>
          <source type="image/webp" srcSet="bell.webp" />
          <source type="image/png" srcSet="bell.png" />
          <img
            src="/bell.png"
            alt="Política"
            className="w-5 h-6 mr-2 inline-block"
          />
        </picture>
        <span className="font-bold">Política Covid-19</span>
        <span
          className="ml-3 underline font-light italic hidden lg:inline-block"
          style={{ fontSize: "16px", lineHeight: "27px" }}
        >
          saiba mais
        </span>
      </div>
      {/* Policy modal */}
      {showPolicy && (
        <>
          <div className={`absolute sm:w-max z-50`}>
            <div className="relative text-center">
              <Image
                src="https://res.cloudinary.com/dyj6lkekg/image/upload/tete/covid-policy.png"
                alt="Política COVID-19"
                width={597}
                height={657}
                quality={75}
              />
            </div>
            <span
              className="absolute cursor-pointer right-0 top-0 text-3xl"
              onClick={() => setShowPolicy(false)}
            >
              &times;
            </span>
          </div>
          <Backdrop
            toggle={showPolicy}
            onClick={() => setShowPolicy(false)}
            blur={true}
          />
        </>
      )}
    </div>
  );
}
