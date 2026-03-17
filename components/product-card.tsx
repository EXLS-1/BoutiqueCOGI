"use client";

import Link from "next/link";
import Image from "next/image";
import useCart from "@/store/use-cart";
import useWishlist from "@/store/use-wishlist";

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
  const wishlist = useWishlist();
  const isFavorite = wishlist.items.some((item) => item.id === product.id);

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
      <div className="product-image-container relative">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={400}
          className="product-image"
        />
        <button
          onClick={() => wishlist.toggleItem(product)}
          className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition ${
            isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-400"
          }`}
        >
          <svg className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
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
