import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
export default function Products() {
  const [brand, setBrandOpen] = React.useState(false);
  const [green, setGreenOpen] = React.useState(false);
  return (
    <div className="container mx-auto max-w-screen-xl xl:max-w-7xl lg:max-w-5xl md:max-w-4xl products">
      <SectionTitle title={"Produtos de Alta Qualidade"} />
      {/* wraper */}
      <div className="flex flex-wrap flex-row">
        {/* top brands */}
        <div className="w-full p-4 sm:w-full md:w-1/2 lg:w-1/2">
          <div
            className="mb-8 text-center cursor-pointer sm:cursor-pointer lg:cursor-default md:cursor-default xl:cursor-default"
            onClick={() => setBrandOpen(!brand)}
          >
            <picture>
              <source type="image/webp" srcSet="top-brands-icon.webp" />
              <source type="image/png" srcSet="top-brands-icon.png" />
              <img
                src="/top-brands-icon.png"
                alt="Marcas Premium"
                className="w-10 mr-2 inline-block"
              />
            </picture>
            <h2 className="inline-block text-2xl leading-7 text-primary-700">Marcas Premium</h2>
            <picture>
              <source type="image/webp" srcSet="arrow.webp" />
              <source type="image/png" srcSet="arrow.png" />
              <img
                src="arrow.png"
                className={
                  "inline-block w-6 ml-4 sm:inline-block md:hidden lg:hidden transition-transform duration-300 " +
                  (brand ? "transform rotate-180" : null)
                }
              />
            </picture>
          </div>
          <div
            className={"lg:block md:block " + (brand ? "block mb-6" : "hidden")}
          >
            <Image
              src="https://res.cloudinary.com/dyj6lkekg/image/upload/tete/top-brands.png"
              alt="Marcas Premium"
              width={604}
              height={426}
              quality={75}
              loading={"eager"}
            />
          </div>
          <hr className="block sm:block md:hidden lg:hidden" />
        </div>

        {/* green choices */}
        <div className="w-full sm:p-4 pt-4 sm:w-full md:w-1/2 lg:w-1/2">
          <div
            className="mb-8 text-center cursor-pointer sm:cursor-pointer lg:cursor-default md:cursor-default xl:cursor-default"
            onClick={() => setGreenOpen(!green)}
          >
            <picture>
              <source type="image/webp" srcSet="green-choices-icon.webp" />
              <source type="image/png" srcSet="green-choices-icon.png" />
              <img
                src="/green-choices-icon.png"
                alt="Escolhas Verdes"
                className="w-10 mr-2 inline-block"
              />
            </picture>
            <h2 className="inline-block text-2xl leading-7 text-primary-700">Escolhas Verdes</h2>
            <picture>
              <source type="image/webp" srcSet="arrow.webp" />
              <source type="image/png" srcSet="arrow.png" />
              <img
                src="arrow.png"
                alt="Seta Abrir/Ocultar"
                className={
                  "inline-block w-6 ml-4 sm:inline-block md:hidden lg:hidden transition-transform duration-300 " +
                  (green ? "transform rotate-180" : null)
                }
              />
            </picture>
          </div>
          <div
            className={
              "lg:block md:block " +
              (green ? "block sm:block" : "hidden sm:hidden")
            }
          >
            <Image
              src="https://res.cloudinary.com/dyj6lkekg/image/upload/tete/green-choices.png"
              alt="Escolhas Verdes"
              width={604}
              height={426}
              quality={75}
              loading={"eager"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
