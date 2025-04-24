import React, { useState } from "react";
import ProductDetailsModal from "../components/Modals/ProductDetailsModal";
import ProductTable from "../components/Tables/ProductTable"; // Assuming you have ProductTable to list products

const ProductListPage = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <ProductTable products={products} onProductClick={handleProductClick} />

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProductListPage;
