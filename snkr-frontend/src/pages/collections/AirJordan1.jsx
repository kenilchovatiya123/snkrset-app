import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../../components/product/ProductItem"; // 👈 update path if needed

const AirJordan1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/products/type?type=Air Jordan 1`
        );
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching Air Jordan 1 products:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Air Jordan 1 Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AirJordan1;
