import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

const images = [assets.carousel_1, assets.carousel_2, assets.carousel_3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Desktop Carousel */}
      <div
        className="hidden sm:flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className="w-full flex-shrink-0 h-auto object-cover"
          />
        ))}
      </div>

      {/* Mobile Image */}
      <img
        src={assets.hero_img_mobile_screen}
        alt="hero-mobile"
        className="block sm:hidden w-full h-auto object-cover"
      />

      {/* Indicator Dots */}
      <div className="hidden sm:flex absolute bottom-6 left-6 gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full border border-white ${
              currentIndex === index ? "bg-white" : "bg-transparent"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
