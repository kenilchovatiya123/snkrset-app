import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext"; // Adjust the path as needed
import ProductItem from "../product/ProductItem";

const SbDunkPreview = () => {
  const { products } = useContext(ShopContext); // Get products from context

  // Filter for Air Jordan products (assuming the product model has a brand or category field)
  const previewProducts = products.filter((product) =>
    product.name.toLowerCase().includes("sb dunks")
  );

  return (
    <section className="my-8">
      {/* <h2 className="text-xl font-bold mb-4">Air Jordans</h2> */}
      <div className="pt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {previewProducts.map((item) => (
          <ProductItem
            key={item._id}
            name={item.name}
            sub_name={item.sub_name}
            id={item._id}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default SbDunkPreview;
