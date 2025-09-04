import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
export default function WelcomeCarousel() {
  const createCarouselItemImage = (index, options = {}) => (
    <div key={index} style={{ width: "max-content", height: "400px" }}>
      <Image
        src={`https://res.cloudinary.com/dyj6lkekg/image/upload/tete/carousel_${index}.jpg`}
        width={562}
        height={400}
        alt="Carousel welcome image"
        quality={75}
        loading={"eager"}
      />
    </div>
  );

  const baseChildren = <div>{[5, 3, 1, 7].map(createCarouselItemImage)}</div>;

  // handle media query
  const [isMobile, setIsMobile] = React.useState(false);
  function mqChange(mq) {
    setIsMobile(mq.matches);
  }
  React.useEffect(() => {
    const mq = window.matchMedia("screen and (max-width: 600px)");
    mq.addListener(mqChange);
    mqChange(mq);

    return () => {
      mq.removeListener(mqChange);
    };
  }, []);
  const mobileSize = () => {
    if (isMobile == true) {
      return 80;
    } else {
      return 40;
    }
  };
  return (
    <div className="mx-auto mb-6 mt-48 max-w-7xl xl:max-w-7xl lg:max-w-5xl md:max-w-full">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        autoPlay={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={mobileSize()}
        interval={3000}
      >
        {baseChildren.props.children}
      </Carousel>
    </div>
  );
}
