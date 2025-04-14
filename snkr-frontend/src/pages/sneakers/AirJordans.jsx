import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductFilterLayout from "../../components/productView/ProductFilterLayout";

const AirJordans = () => {
  const { products } = useContext(ShopContext);

  const airJordanProducts = products.filter(
    (product) => product.brand === "Air Jordan's"
  );

  return (
    <ProductFilterLayout title="Air Jordans" products={airJordanProducts} />
  );
};

export default AirJordans;
