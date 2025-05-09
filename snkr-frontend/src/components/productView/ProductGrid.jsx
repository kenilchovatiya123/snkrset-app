import React from "react";
import ProductItem from "../product/ProductItem"; // Adjust if the path is different

const ProductGrid = ({ products }) => {
  return (
    <section className="my-10 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
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
