import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Product 1",
    image: "product1.jpg",
  },
  {
    id: "2",
    name: "Product 2",
    image: "product2.jpg",
  },

];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
