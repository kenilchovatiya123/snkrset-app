import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductFilterLayout from "../../components/productView/ProductFilterLayout";

const AirJordans = () => {
  const { products } = useContext(ShopContext);

  if (!products || products.length === 0)
    return <div className="p-6 text-center">Loading products...</div>;

  const airJordanProducts = products.filter(
    (product) => product.brand?.toLowerCase() === "air jordan's"
  );

  return (
    <ProductFilterLayout title="AIR JORDAN'S" products={airJordanProducts} />
  );
};

export default AirJordans;
