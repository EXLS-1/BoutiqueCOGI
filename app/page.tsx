import { ProductList } from "@/components/product-list";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-title-main">BOUTIQUE COGI</span>
              <span className="hero-title-sub">MODE ÉLÉGANTE</span>
            </h1>
            <p className="hero-description">
              Découvrez la collection exclusive de vêtements pour femmes, hommes et enfants.
              Style unique, qualité exceptionnelle.
            </p>
            <a href="#boutique" className="hero-cta">
              <span>DÉCOUVRIR LA COLLECTION</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="hero-videos">
            <div className="hero-video-container">
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                poster="/video-poster1.jpg"
              >
                <source src="/hero-video1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="hero-video-container">
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                poster="/video-poster2.jpg"
              >
                <source src="/hero-video2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="hero-marquee">
          <div className="marquee-content">
            <span>✨ NOUVELLES ARRIVÉES ✨</span>
            <span>🌟 COLLECTIONS EXCLUSIVES 🌟</span>
            <span>💎 QUALITÉ PREMIUM 💎</span>
            <span>🎨 STYLE UNIQUE 🎨</span>
            <span>✨ NOUVELLES ARRIVÉES ✨</span>
            <span>🌟 COLLECTIONS EXCLUSIVES 🌟</span>
            <span>💎 QUALITÉ PREMIUM 💎</span>
            <span>🎨 STYLE UNIQUE 🎨</span>
          </div>
        </div>
      </section>

      {/* Boutique Section */}
      <section className="boutique" id="boutique">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">NOTRE BOUTIQUE</h2>
            <p className="section-subtitle">Découvrez nos collections par catégorie</p>
          </div>
          <div className="boutique-grid">
            <div className="boutique-category" data-category="femme">
              <div className="category-image">
                <img src="/category-femme.jpg" alt="Habit Femme" />
                <div className="category-overlay">
                  <h3>HABIT FEMME</h3>
                  <p>Élégance et sophistication</p>
                  <a href="#catalogue-femme" className="category-link">VOIR LA COLLECTION</a>
                </div>
              </div>
            </div>
            <div className="boutique-category" data-category="homme">
              <div className="category-image">
                <img src="/category-homme.jpg" alt="Habit Homme" />
                <div className="category-overlay">
                  <h3>HABIT HOMME</h3>
                  <p>Style moderne et raffiné</p>
                  <a href="#catalogue-homme" className="category-link">VOIR LA COLLECTION</a>
                </div>
              </div>
            </div>
            <div className="boutique-category" data-category="enfant">
              <div className="category-image">
                <img src="/category-enfant.jpg" alt="Habit Enfant" />
                <div className="category-overlay">
                  <h3>HABIT ENFANT</h3>
                  <p>Tendresse et qualité</p>
                  <a href="#catalogue-enfant" className="category-link">VOIR LA COLLECTION</a>
                </div>
              </div>
            </div>
            <div className="boutique-category" data-category="chaussure">
              <div className="category-image">
                <img src="/category-chaussure.jpg" alt="Chaussure Dame" />
                <div className="category-overlay">
                  <h3>CHAUSSURE DAME</h3>
                  <p>Confort et élégance</p>
                  <a href="#catalogue-chaussure" className="category-link">VOIR LA COLLECTION</a>
                </div>
              </div>
            </div>
            <div className="boutique-category" data-category="sac">
              <div className="category-image">
                <img src="/category-sac.jpg" alt="Sac Dame" />
                <div className="category-overlay">
                  <h3>SAC DAME</h3>
                  <p>Accessoires indispensables</p>
                  <a href="#catalogue-sac" className="category-link">VOIR LA COLLECTION</a>
                </div>
              </div>
            </div>
            <div className="boutique-category" data-category="accessoire">
              <div className="category-image">
                <img src="/category-accessoire.jpg" alt="Accessoire" />
                <div className="category-overlay">
                  <h3>ACCESSOIRE</h3>
                  <p>Touches finales parfaites</p>
                  <a href="#catalogue-accessoire" className="category-link">VOIR LA COLLECTION</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalogues */}
      <ProductList />

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">CONTACTEZ-NOUS</h2>
            <p className="section-subtitle">Nous sommes là pour vous aider</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>E-mail</h4>
                  <p>contact@boutiquecogi.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+243 XX XX XX XX XX</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Votre e-mail" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Votre message" rows={5} required></textarea>
                </div>
                <button type="submit" className="contact-submit">
                  <span>ENVOYER</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Networks Section */}
      <section className="reseaux" id="reseaux">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">SUIVEZ-NOUS</h2>
            <p className="section-subtitle">Restez connecté avec notre communauté</p>
          </div>
          <div className="reseaux-grid">
            <a href="#" className="reseau-item whatsapp" data-social="whatsapp">
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            <a href="#" className="reseau-item facebook" data-social="facebook">
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </a>
            <a href="#" className="reseau-item telegram" data-social="telegram">
              <i className="fab fa-telegram"></i>
              <span>Telegram</span>
            </a>
            <a href="#" className="reseau-item tiktok" data-social="tiktok">
              <i className="fab fa-tiktok"></i>
              <span>TikTok</span>
            </a>
            <a href="#" className="reseau-item instagram" data-social="instagram">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo.png" alt="Boutique COGI" />
              <p>Mode élégante pour tous</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>BOUTIQUE</h4>
                <ul>
                  <li><a href="#catalogue-femme">Habit Femme</a></li>
                  <li><a href="#catalogue-homme">Habit Homme</a></li>
                  <li><a href="#catalogue-enfant">Habit Enfant</a></li>
                  <li><a href="#catalogue-chaussure">Chaussure Dame</a></li>
                  <li><a href="#catalogue-sac">Sac Dame</a></li>
                  <li><a href="#catalogue-accessoire">Accessoire</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>CONTACT</h4>
                <ul>
                  <li><a href="mailto:contact@boutiquecogi.com">E-mail</a></li>
                  <li><a href="https://wa.me/243XXXXXXXXX">WhatsApp</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>RÉSEAUX</h4>
                <ul>
                  <li><a href="#" data-social="whatsapp">WhatsApp</a></li>
                  <li><a href="#" data-social="facebook">Facebook</a></li>
                  <li><a href="#" data-social="telegram">Telegram</a></li>
                  <li><a href="#" data-social="tiktok">TikTok</a></li>
                  <li><a href="#" data-social="instagram">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Boutique COGI. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

