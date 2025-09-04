import React, { useState, useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import TeamMember from "./TeamMember";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import members from "./members.js";
export default function Team() {
  // carousel controls
  const [currentSlide, setCurrentSlide] = useState(1);
  const lastSlide = members.length - 1;

  const next = () => {
    if (currentSlide >= lastSlide - 1 && !isMobile) {
      setCurrentSlide(1);
    } else if (currentSlide >= lastSlide && isMobile) {
      setCurrentSlide(0);
    } else {
      isMobile
        ? setCurrentSlide(currentSlide + 1)
        : setCurrentSlide(currentSlide + 3);
    }
  };
  const prev = () => {
    if (currentSlide === 1 && !isMobile) {
      setCurrentSlide(lastSlide);
    } else if (currentSlide === 0 && isMobile) {
      setCurrentSlide(lastSlide);
    } else {
      isMobile
        ? setCurrentSlide(currentSlide - 1)
        : setCurrentSlide(currentSlide - 3);
    }
  };
  // members
  const mapMembers = members.map((member) => (
    <TeamMember
      key={member.id}
      name={member.name}
      title={member.title}
      description={member.description}
      photo={member.photo}
      link={member.link}
    />
  ));
  // responsive carousel
  const [isMobile, setIsMobile] = useState(false);
  function mqChange(mq) {
    setIsMobile(mq.matches);
    mq.matches ? setCurrentSlide(0) : setCurrentSlide(1);
  }
  useEffect(() => {
    const mq = window.matchMedia("screen and (max-width: 960px)");
    mq.addListener(mqChange);
    mqChange(mq);

    return () => {
      mq.removeListener(mqChange);
    };
  }, []);
  const mobileSize = () => (isMobile ? false : true);
  const mobileWidth = () => (isMobile ? "250px" : "823px");
  return (
    <div className="container mx-auto">
      <SectionTitle title={"Conheça Nossa Equipe"} />
      <div className="flex flex-wrap flex-row justify-center relative mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-full team">
        <div className="w-11/12 text-primary-500 sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-80 mb-6">
          <p className="mt-4">
            Servimos a área de Newton desde 1999 e temos uma reputação impecável
            por nossos estilistas altamente treinados que continuamente aprimoram
            suas habilidades. Usando os melhores produtos do mercado e
            mantendo-se atualizados com os últimos desenvolvimentos em nossa indústria, somos
            capazes de oferecer a você uma experiência de beleza sempre moderna. Seja para
            manter seu visual ou receber uma transformação de beleza, você
            pode fazer tudo no Studio Lonier.
          </p>
        </div>

        <div className="flex mr-auto ml-auto">
          <div className="inline-block my-auto min-w-fit">
            <picture>
              <source type="image/webp" srcSet="left.webp" />
              <source type="image/png" srcSet="left.png" />
              <img
                onClick={prev}
                className="w-5 cursor-pointer mr-2 inline-block"
                src="left.png"
                alt="Membro anterior da equipe"
              ></img>
            </picture>
          </div>
          <div className="inline-block">
            <Carousel
              showThumbs={false}
              showArrows={false}
              infiniteLoop={false}
              showIndicators={false}
              autoPlay={false}
              showStatus={false}
              swipeable={true}
              centerMode={mobileSize()}
              centerSlidePercentage={33}
              width={mobileWidth()}
              selectedItem={currentSlide}
            >
              {mapMembers}
            </Carousel>
          </div>

          <div className="inline-block my-auto min-w-fit">
            <picture>
              <source type="image/webp" srcSet="right.webp" />
              <source type="image/png" srcSet="right.png" />
              <img
                onClick={next}
                className="w-5 cursor-pointer ml-2 inline-block"
                src="right.png"
                alt="Próximo membro da equipe"
              ></img>
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
