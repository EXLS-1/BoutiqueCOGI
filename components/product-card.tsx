"use client";

import Link from "next/link";
import Image from "next/image";
import useCart from "@/store/use-cart";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={400}
          className="product-image"
        />
        <div className="product-overlay">
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <i className="fas fa-shopping-cart"></i>
            <span>AJOUTER AU PANIER</span>
          </button>
          <Link href={`/products/${product.id}`} className="view-details-btn">
            <i className="fas fa-eye"></i>
            <span>DÉTAILS</span>
          </Link>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          <span className="price">{formatPrice(product.price)}</span>
        </div>
      </div>
    </div>
  );
};
