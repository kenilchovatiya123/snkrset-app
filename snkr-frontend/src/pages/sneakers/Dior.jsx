import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductFilterLayout from "../../components/productView/ProductFilterLayout";

const Dior = () => {
  const { products } = useContext(ShopContext);

  const diorProducts = products.filter((product) => product.brand === "Dior");

  return <ProductFilterLayout title="Dior" products={diorProducts} />;
};

export default Dior;
