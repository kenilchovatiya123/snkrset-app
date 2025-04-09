import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import PrivacyPolicy from "../policies/PrivacyPolicy";
import RelatedProducts from "../components/product/RelatedProducts";

const Products = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState();

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        // console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 ">
          <h1 className="font-light text-lg uppercase">{productData.name}</h1>
          <h4 className="font-medium text-xl mt-1 capitalize">
            {productData.sub_name}
          </h4>
          <h1 className="font-light text-lg mt-1">
            {currency}
            {productData.price}
          </h1>
          <div className="flex items-center gap-1 mt-4">
            <img src={assets.star_icon} alt="" className="w-3.5"></img>
            <img src={assets.star_icon} alt="" className="w-3.5"></img>
            <img src={assets.star_icon} alt="" className="w-3.5"></img>
            <img src={assets.star_icon} alt="" className="w-3.5"></img>
            <img src={assets.star_dull_icon} alt="" className="w-3.5"></img>
            <p className="pl-2">(122)</p>
          </div>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border-2 border-gray-200 py-2 px-4 bg-white ${
                    item == size ? "border-gray-800" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => addToCart(productData._id, size)}
              className="bg-black text-white px-6.5 py-3 text-sm active:bg-gray-800"
            >
              ADD TO CART
            </button>
            <button className="bg-black text-white px-6.5 py-3 text-sm active:bg-gray-800">
              BUY IT NOW
            </button>
          </div>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>100% Polyamide</p>
          </div>
        </div>
      </div>
      {/* <PrivacyPolicy /> */}

      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (10)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* Display Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
