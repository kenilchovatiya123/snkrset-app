import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, sub_name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="relative bg-neutral-100 p-2 sm:p-4 rounded-sm overflow-hidden group cursor-pointer">
      {/* NEW Label */}
      <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 uppercase">
        New
      </span>

      {/* Product Image */}
      <div className="flex justify-center items-center h-36 sm:h-64">
        <img
          className="w-auto h-40 md:h-44 sm:h-64 object-contain mix-blend-multiply"
          src={image?.[0]}
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
          alt={name || "Product Image"}
          loading="lazy"
          width="2048"
          height="2048"
        />
      </div>

      <hr className="text-gray-200 py-2" />

      {/* Product Details */}
      <Link className="block" to={`/products/${id}`}>
        <h4 className="pt-2 pb-1 text-[12px] text-gray-900 font-semibold uppercase">
          {name}
        </h4>
        <p className="pb-1 text-[12px] text-gray-900 capitalize max-w-fit">
          {sub_name}
        </p>
        <p className="text-[14px] text-gray-900">
          {currency}
          {price}
        </p>
      </Link>
    </div>
  );
};

export default ProductItem;
