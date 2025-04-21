import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import ProductItem from "../product/ProductItem";

const SbDunkPreview = () => {
  const { products } = useContext(ShopContext);

  const previewProducts = products
    .filter((product) => product.brand === "SB Dunks")
    .slice(0, 4); // Show only first 4

  return (
    <section className="my-10 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[18px] font-medium">SB DUNK'S</h2>
        <p className="text-[14px] text-white hover:underline bg-black px-4 py-2 rounded-sm">
          <Link to="/sneakers/sb-dunks">View All</Link>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
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
