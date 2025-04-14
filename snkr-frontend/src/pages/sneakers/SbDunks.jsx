import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductFilterLayout from "../../components/productView/ProductFilterLayout";

const SbDunks = () => {
  const { products } = useContext(ShopContext);

  const SbDunkProducts = products.filter((product) => product.brand === "SB Dunks");

  return <ProductFilterLayout title="SB Dunk" products={SbDunkProducts} />;
};

export default SbDunks;
