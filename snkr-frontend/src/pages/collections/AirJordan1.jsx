import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductItem from "../../components/product/ProductItem";
import Title from "../../components/shared/Title";

const AirJordan1 = () => {
  const { products } = useContext(ShopContext);

  // Filter only Air Jordan 1 sneakers
  const jordan1Products = products.filter(
    (item) =>
      item.category?.toLowerCase() === "air jordan 1" ||
      item.name?.toLowerCase().includes("air jordan 1")
  );

  return (
    <div className="my-6 mx-4 sm:mx-6">
      <div className="mb-4">
        <Title text1="AIR" text2="JORDAN 1" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {jordan1Products.length > 0 ? (
          jordan1Products.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              sub_name={item.sub_name}
              price={item.price}
            />
          ))
        ) : (
          <p>No products found for Air Jordan 1.</p>
        )}
      </div>
    </div>
  );
};

export default AirJordan1;
