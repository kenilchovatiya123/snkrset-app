import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../shared/Title";
import ProductItem from "../product/ProductItem";
import { Link } from "react-router-dom";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    // Show only 5 products in Home preview
    setLatestProducts(products.slice(0, 5));
  }, [products]);

  return (
    <div className="my-6 mx-4 sm:mx-6">
      {/* Header with "LATEST COLLECTIONS" + View All button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        </h2>
        <Link to="/footwear">
          <button className="text-sm sm:text-base bg-black text-white px-4 py-1.5 rounded hover:bg-gray-800 transition">
            View All
          </button>
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            sub_name={item.sub_name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
