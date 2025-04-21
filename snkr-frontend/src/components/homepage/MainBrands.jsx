import React from "react";
import representImg from "../../assets/mainbrands/represent.jpg";
import brokenplanetImg from "../../assets/mainbrands/brokenplanet.jpeg";
import essentialsImg from "../../assets/mainbrands/essentials.jpg";
import { Link } from "react-router-dom";

const brandItems = [
  { name: "Represent", image: representImg },
  { name: "Broken Planet", image: brokenplanetImg },
  { name: "Essentials", image: essentialsImg },
];

const MainBrands = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-20">
      {brandItems.map((brand, index) => (
        <div
          key={index}
          className="relative group overflow-hidden h-[400px] sm:h-[450px] lg:h-[400px] cursor-pointer"
        >
          <img
            src={brand.image}
            alt={brand.name}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-800/60 to-transparent"></div>
          <div className="absolute bottom-12 left-6 text-white z-10 uppercase">
            <h2 className="text-xl font-medium">{brand.name}</h2>
            <Link
              to={`/brands/${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[12px] underline mt-1 inline-block"
            >
              Shop Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBrands;
