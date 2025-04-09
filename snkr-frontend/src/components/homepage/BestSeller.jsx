import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext"
import Title from "../shared/Title";
import ProductItem from "../product/ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-4 mx-4 sm:my-6 sm:mx-6">
      <div className="text-left py-2 text-lg">
        <Title text1={"BEST"} text2={"SELLERS"} />
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 gap-y-2 sm:gap-y-4">
        {bestSeller.map((item, index) => (
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

export default BestSeller;
