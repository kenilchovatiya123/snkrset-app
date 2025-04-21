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
    <div className="pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-2 flex flex-col-reverse sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full"></div>
          <div className="w-full sm:w-[70%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 ">
          <h1 className="font-light text-lg uppercase">{productData.name}</h1>
          <h4 className="font-medium text-xl mt-1 capitalize">
            {productData.sub_name}
          </h4>

          <div className="mt-1 flex items-center gap-2">
            <h1 className="font-light text-lg">
              {currency}
              {productData.price}
            </h1>
            {productData.originalPrice && (
              <span className="line-through text-sm text-gray-500">
                {currency}
                {productData.originalPrice}
              </span>
            )}
          </div>

          {productData.stockStatus && (
            <div className="mt-2">
              <span
                className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                  productData.stockStatus === "low stock"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {productData.stockStatus}
              </span>
            </div>
          )}

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2 flex-wrap">
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
          <div className="mt-4 text-sm text-gray-600">
            <p>{productData.description}</p>
          </div>
        </div>
      </div>

      {/* Review Grid Section */}
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold mb-6">
          What Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Amelia R.",
              rating: 5,
              comment:
                "Super fast shipping and the product is top-notch. Love it!",
            },
            {
              name: "Ethan M.",
              rating: 4,
              comment: "Good quality but I wish it came in more color options.",
            },
            {
              name: "Sophia L.",
              rating: 5,
              comment: "These are my go-to sneakers now. Stylish and comfy!",
            },
            {
              name: "Noah D.",
              rating: 4,
              comment: "Decent shoes, but sizing runs a little small.",
            },
          ].map((review, idx) => (
            <div key={idx} className="border p-4 rounded shadow-sm bg-neutral-100">
              <p className="font-medium text-sm mb-2">{review.name}</p>
              <p className="text-yellow-500 text-xs mb-2">
                {"⭐".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p className="text-sm text-gray-600">{review.comment}</p>
            </div>
          ))}
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
