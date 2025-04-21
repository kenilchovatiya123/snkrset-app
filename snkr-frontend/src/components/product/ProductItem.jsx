import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import QuickviewModal from "../../pages/QuickviewModal";

const ProductItem = ({ id, image, name, sub_name, price }) => {
  const { currency } = useContext(ShopContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative bg-neutral-100 p-2 sm:p-3 overflow-hidden group cursor-pointer">
      {/* Image container with aspect ratio */}
      <div className="relative w-full aspect-[4/5] flex items-center justify-center overflow-hidden">
        <img
          src={image?.[0]}
          alt={name || "Product Image"}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
          loading="lazy"
          srcSet={
            image?.[0]
              ? `
            ${image[0]}?width=165 165w,
            ${image[0]}?width=360 360w,
            ${image[0]}?width=533 533w,
            ${image[0]}?width=720 720w,
            ${image[0]}?width=940 940w,
            ${image[0]}?width=1066 1066w,
            ${image[0]}?width=1200 1200w,
            ${image[0]}?width=1600 1600w,
            ${image[0]}?width=2000 2000w,
            ${image[0]}?width=2048 2048w
          `
              : ""
          }
          sizes="(min-width: 1170px) calc((1170px - 130px) / 4), 
                (min-width: 990px) calc((100vw - 130px) / 4), 
                (min-width: 750px) calc((100vw - 120px) / 3), 
                calc(50vw - 2.1rem)"
          width="2048"
          height="2048"
        />

        {/* QUICKVIEW Overlay */}
        <div
          onClick={handleOpenModal}
          className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-center py-2 text-sm font-medium text-black opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300"
        >
          QUICKVIEW
        </div>
      </div>

      <hr className="my-2 border-gray-200" />

      {/* Product Details */}
      <Link to={`/products/${id}`} className="block">
        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase truncate">
          {name}
        </h4>
        <p className="text-xs sm:text-sm text-gray-800 capitalize truncate">
          {sub_name}
        </p>
        <p className="text-sm sm:text-base text-gray-900 font-medium">
          {currency}
          {price}
        </p>
      </Link>

      {/* Quickview Modal */}
      {isModalOpen && (
        <QuickviewModal
          product={{ _id: id, image, name, sub_name, price }}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProductItem;
