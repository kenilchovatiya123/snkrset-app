import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../components/shared/Title";
import ProductItem from "../components/product/ProductItem";

const Sneakers = () => {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/list?type=Sneakers`
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching sneakers:", error);
      }
    };

    fetchSneakers();
  }, []);

  const sortProduct = () => {
    const sorted = [...products];
    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        // no sorting for "relavent"
        break;
    }
    setProducts(sorted);
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="pt-8 border-t border-t-gray-200">
      <div className="flex justify-between items-center mb-4">
        <Title text1="SNEAKER" text2="COLLECTION" />
        <select
          onChange={(e) => setSortType(e.target.value)}
          className="border border-gray-300 text-sm px-2"
        >
          <option value="relavent">Relevant</option>
          <option value="low-high">Low-High</option>
          <option value="high-low">High-Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
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

export default Sneakers;
