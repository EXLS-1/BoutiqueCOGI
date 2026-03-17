"use client";

import { ProductCard } from "./product-card";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface Props {
  category?: string;
}

export const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const params = new URLSearchParams()
        if (category && category !== 'all') {
          params.append('category', category)
        }

        const response = await fetch(`/api/products?${params}`)
        const data = await response.json()

        if (data.status === 'success') {
          setProducts(data.products)
        } else {
          console.error('Error loading products:', data.message)
        }
      } catch (error) {
        console.error('Error loading products:', error)
      } finally {
        setLoading(false)
      }
    };

    loadProducts();
  }, [category]);

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description.toLowerCase().includes(term);

    return nameMatch || descriptionMatch;
  });

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Chargement des produits...</p>
      </div>
    );
  }

  const getCategoryTitle = (cat: string) => {
    const titles: { [key: string]: string } = {
      femme: "HABIT FEMME",
      homme: "HABIT HOMME",
      enfant: "HABIT ENFANT",
      chaussure: "CHAUSSURE DAME",
      sac: "SAC DAME",
      accessoire: "ACCESSOIRE"
    };
    return titles[cat] || "PRODUITS";
  };

  return (
    <div>
      {/* Catalogue Sections */}
      {!category && (
        <>
          {/* Femme Catalogue */}
          <section className="catalogue" id="catalogue-femme">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">HABIT FEMME</h2>
                <p className="section-subtitle">Collection élégante pour femmes</p>
              </div>
              <div className="products-grid">
                {products.filter(p => p.category === 'femme').slice(0, 6).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="catalogue-footer">
                <a href="/products/femme" className="catalogue-link">
                  <span>VOIR TOUS LES HABITS FEMME</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </section>

          {/* Homme Catalogue */}
          <section className="catalogue" id="catalogue-homme">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">HABIT HOMME</h2>
                <p className="section-subtitle">Style moderne pour hommes</p>
              </div>
              <div className="products-grid">
                {products.filter(p => p.category === 'homme').slice(0, 6).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="catalogue-footer">
                <a href="/products/homme" className="catalogue-link">
                  <span>VOIR TOUS LES HABITS HOMME</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </section>

          {/* Enfant Catalogue */}
          <section className="catalogue" id="catalogue-enfant">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">HABIT ENFANT</h2>
                <p className="section-subtitle">Tendresse et qualité pour enfants</p>
              </div>
              <div className="products-grid">
                {products.filter(p => p.category === 'enfant').map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          {/* Chaussure Catalogue */}
          <section className="catalogue" id="catalogue-chaussure">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">CHAUSSURE DAME</h2>
                <p className="section-subtitle">Confort et élégance</p>
              </div>
              <div className="products-grid">
                {products.filter(p => p.category === 'chaussure').slice(0, 6).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="catalogue-footer">
                <a href="/products/chaussure" className="catalogue-link">
                  <span>VOIR TOUTES LES CHAUSSURES</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </section>

          {/* Sac Catalogue */}
          <section className="catalogue" id="catalogue-sac">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">SAC DAME</h2>
                <p className="section-subtitle">Accessoires indispensables</p>
              </div>
              <div className="products-grid">
                {products.filter(p => p.category === 'sac').slice(0, 6).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="catalogue-footer">
                <a href="/products/sac" className="catalogue-link">
                  <span>VOIR TOUS LES SACS</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </section>

          {/* Accessoire Catalogue */}
          <section className="catalogue" id="catalogue-accessoire">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">ACCESSOIRE</h2>
                <p className="section-subtitle">Touches finales parfaites</p>
              </div>
              <div className="products-grid">
                {products.filter(p => p.category === 'accessoire').map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Single Category View */}
      {category && (
        <section className="catalogue">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{getCategoryTitle(category)}</h2>
              <p className="section-subtitle">Découvrez notre collection complète</p>
            </div>

            {/* Search Bar */}
            <div className="search-container">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher des produits..."
                className="search-input"
              />
              <i className="fas fa-search search-icon"></i>
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && searchTerm && (
              <div className="no-results">
                <p>Aucun produit trouvé pour "{searchTerm}"</p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};
