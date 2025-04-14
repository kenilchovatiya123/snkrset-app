import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import ProductItem from "../product/ProductItem";

const SbDunkPreview = () => {
  const { products } = useContext(ShopContext);

  const previewProducts = products
    .filter((product) => product.brand === "SB Dunks")
    .slice(0, 5); // Show only first 5

  return (
    <section className="my-10 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-medium">SB DUNK'S</h2>
        <Link
          to="/sneakers/sb-dunks"
          className="text-sm text-blue-600 hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
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
