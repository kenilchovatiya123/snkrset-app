import React from "react";
import representImg from "../../assets/mainbrands/represent.jpg";
import brokenplanetImg from "../../assets/mainbrands/brokenplanet.jpeg";
import essentialsImg from "../../assets/mainbrands/essentials.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const brandItems = [
  { name: "Represent", image: representImg },
  { name: "Broken Planet", image: brokenplanetImg },
  { name: "Essentials", image: essentialsImg },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MainBrands = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-20 px-4"
    >
      {brandItems.map((brand, index) => (
        <motion.div
          key={index}
          variants={card}
          className="relative group overflow-hidden h-[400px] sm:h-[450px] lg:h-[400px] cursor-pointer rounded-2xl shadow-lg"
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.15}
            scale={1.02}
            transitionSpeed={1500}
            className="w-full h-full"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-10 left-6 text-white z-10"
            >
              <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl">
                <h2 className="text-xl font-semibold tracking-wide uppercase">
                  {brand.name}
                </h2>
                <Link
                  to={`/brands/${brand.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-sm underline mt-1 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MainBrands;
