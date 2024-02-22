import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    product: {
        id: string, 
        name: string,
        image: string
    }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-6">
      <Link href={`/product/${product.id}`}>
        <div style={{ position: "relative" }}>
          <Image
            src={`/${product.image}`}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-48 object-cover object-center"
          />
        </div>
        <div className="p-4">
          <p className="text-gray-800 text-lg font-semibold">{product.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
