import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../../components/layout/Title";
import ProductItem from "../../components/product/ProductItem";

const Shirts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchShirts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/list`
        );
        const filtered = res.data.products.filter(
          (item) => item.brand === "Shirts"
        );
        setProducts(filtered);
      } catch (error) {
        console.error("Error fetching Shirts:", error);
      }
    };

    fetchShirts();
  }, []);

  return (
    <div className="pt-8">
      <Title text1="MEN'S SHIRTS" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {products.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            sub_name={item.sub_name}
            id={item._id}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Shirts;
