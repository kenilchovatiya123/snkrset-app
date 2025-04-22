import React from "react";
import ProductItem from "../product/ProductItem"; // Adjust if the path is different

const ProductGrid = ({ products }) => {
  return (
    <section className="px-4 pt-4 pb-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {products.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            sub_name={item.sub_name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
