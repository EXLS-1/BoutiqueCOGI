"use client";

import Image from "next/image";
import useCart from "@/store/use-cart";
import Link from "next/link";

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

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCart();
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
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

  const getCategoryName = (category: string) => {
    const names: { [key: string]: string } = {
      femme: "Habit Femme",
      homme: "Habit Homme",
      enfant: "Habit Enfant",
      chaussure: "Chaussure Dame",
      sac: "Sac Dame",
      accessoire: "Accessoire"
    };
    return names[category] || category;
  };

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-content">
          <div className="product-detail-image">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={600}
              className="product-detail-img"
            />
          </div>
          <div className="product-detail-info">
            <div className="product-category">
              <span>{getCategoryName(product.category)}</span>
            </div>
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-description">{product.description}</p>
            <div className="product-detail-price">
              <span className="price">{formatPrice(product.price)}</span>
            </div>

            <div className="product-detail-actions">
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => removeItem(product.id)}
                  disabled={quantity === 0}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="quantity">{quantity}</span>
                <button className="quantity-btn" onClick={onAddItem}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>

              <button
                className="add-to-cart-detail-btn"
                onClick={onAddItem}
              >
                <i className="fas fa-shopping-cart"></i>
                <span>AJOUTER AU PANIER</span>
              </button>
            </div>

            <div className="product-detail-meta">
              <div className="meta-item">
                <i className="fas fa-shield-alt"></i>
                <span>Garantie qualité</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-truck"></i>
                <span>Livraison gratuite</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-undo"></i>
                <span>Retours faciles</span>
              </div>
            </div>

            <div className="product-detail-share">
              <span>Partager:</span>
              <div className="share-buttons">
                <button className="share-btn whatsapp">
                  <i className="fab fa-whatsapp"></i>
                </button>
                <button className="share-btn facebook">
                  <i className="fab fa-facebook"></i>
                </button>
                <button className="share-btn telegram">
                  <i className="fab fa-telegram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="product-detail-navigation">
          <Link href="/" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Retour à l'accueil
          </Link>
          <Link href="/checkout" className="checkout-link">
            <span>Voir le panier</span>
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
