// app/page.tsx
import ProductList from '@/components/product-list';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-150 flex items-center justify-center overflow-hidden bg-gray-900" id="home">
        
        {/* Vidéos en arrière-plan */}
        <div className="absolute inset-0 w-full h-full flex">
          <div className="w-1/2 h-full relative">
            <video className="absolute inset-0 w-full h-full object-cover opacity-60" autoPlay muted loop playsInline poster="/video-poster1.jpg">
              <source src="/Media-v-20260218/Vids20260212at0710PM.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-1/2 h-full relative">
            <video className="absolute inset-0 w-full h-full object-cover opacity-60" autoPlay muted loop playsInline poster="/video-poster2.jpg">
              <source src="/Media-v-20260218/Vids20260212at0710PM.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-1/2 h-full relative">
            <video className="absolute inset-0 w-full h-full object-cover opacity-60" autoPlay muted loop playsInline poster="/video-poster2.jpg">
              <source src="/Media-v-20260218/WhatsApp Video 2026-02-18 at 07.10.31 PM.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl flex flex-col items-center gap-6">
          <h1 className="flex flex-col gap-2 font-playfair">
            <span className="text-5xl md:text-7xl font-bold tracking-widest uppercase drop-shadow-lg">BOUTIQUE COGI</span>
            <span className="text-xl md:text-2xl tracking-[0.3em] font-light text-gray-200">MODE ÉLÉGANTE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-lato leading-relaxed">
            Découvrez la collection exclusive de vêtements pour femmes, hommes et enfants. Style unique, qualité exceptionnelle.
          </p>
          <a href="#boutique" className="mt-6 flex items-center gap-3 bg-white text-black px-8 py-4 rounded-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors">
            <span>DÉCOUVRIR LA COLLECTION</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        {/* Marquee (Bandeau défilant statique pour l'instant) */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex gap-8">
            <span>✨ NOUVELLES ARRIVÉES ✨</span>
            <span>🌟 COLLECTIONS EXCLUSIVES 🌟</span>
            {/* On double le texte manuellement ici pour la boucle infinie */}
            <span>✨ NOUVELLES ARRIVÉES ✨</span>
            <span>🌟 COLLECTIONS EXCLUSIVES 🌟</span>
          </div>
        </div>
      </section>

      {/* Boutique Section */}
      <section className="py-20 bg-gray-50" id="boutique">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-wider mb-4">NOTRE BOUTIQUE</h2>
            <p className="font-lato text-gray-500 text-lg">Découvrez nos collections par catégorie</p>
          </div>

          {/* Grille des catégories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Catégorie : Femme */}
            <div className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-gray-200 shadow-md">
              <img src="/Media-p-20260218/pict01.jpeg" alt="Habit Femme" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">HABIT FEMME</h3>
                <p className="text-gray-200 mb-6">Élégance et sophistication</p>
                <a href="#catalogue-femme" className="inline-block border border-white px-6 py-2 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-max">VOIR LA COLLECTION</a>
              </div>
            </div>

            {/* Catégorie : Homme */}
            <div className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-gray-200 shadow-md">
              <img src="/category-homme.jpeg" alt="Habit Homme" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">HABIT HOMME</h3>
                <p className="text-gray-200 mb-6">Style moderne et raffiné</p>
                <a href="#catalogue-homme" className="inline-block border border-white px-6 py-2 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-max">VOIR LA COLLECTION</a>
              </div>
            </div>

            {/* Catégorie : Enfant */}
            <div className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-gray-200 shadow-md">
              <img src="/category-enfant.jpg" alt="Habit Enfant" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">HABIT ENFANT</h3>
                <p className="text-gray-200 mb-6">Tendresse et qualité</p>
                <a href="#catalogue-enfant" className="inline-block border border-white px-6 py-2 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-max">VOIR LA COLLECTION</a>
              </div>
            </div>

            {/* Catégorie : Chaussure */}
            <div className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-gray-200 shadow-md">
              <img src="/category-chaussure.jpg" alt="Chaussure Dame" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">CHAUSSURE DAME</h3>
                <p className="text-gray-200 mb-6">Confort et élégance</p>
                <a href="#catalogue-chaussure" className="inline-block border border-white px-6 py-2 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-max">VOIR LA COLLECTION</a>
              </div>
            </div>

            {/* Catégorie : Sac */}
            <div className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-gray-200 shadow-md">
              <img src="/category-sac.jpg" alt="Sac Dame" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">SAC DAME</h3>
                <p className="text-gray-200 mb-6">Accessoires indispensables</p>
                <a href="#catalogue-sac" className="inline-block border border-white px-6 py-2 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-max">VOIR LA COLLECTION</a>
              </div>
            </div>

            {/* Catégorie : Accessoire */}
            <div className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-gray-200 shadow-md">
              <img src="/category-accessoire.jpg" alt="Accessoire" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">ACCESSOIRE</h3>
                <p className="text-gray-200 mb-6">Touches finales parfaites</p>
                <a href="#catalogue-accessoire" className="inline-block border border-white px-6 py-2 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-max">VOIR LA COLLECTION</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Catalogues */}
      <ProductList />

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-wider mb-4">CONTACTEZ-NOUS</h2>
            <p className="font-lato text-gray-500 text-lg">Nous sommes là pour vous aider</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Info Contact */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black text-xl shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-widest">E-mail</h4>
                  <p className="text-gray-600">contact@boutiquecogi.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center text-2xl shrink-0">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-widest">WhatsApp</h4>
                  <p className="text-gray-600">+243 XX XX XX XX XX</p>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <input type="text" placeholder="Votre nom" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white" />
                </div>
                <div>
                  <input type="email" placeholder="Votre e-mail" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white" />
                </div>
                <div>
                  <textarea placeholder="Votre message" rows={5} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white resize-none"></textarea>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors shadow-lg shadow-black/20">
                  <span>ENVOYER</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Networks Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200" id="reseaux">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="mb-12">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-wider mb-4">SUIVEZ-NOUS</h2>
            <p className="font-lato text-gray-500 text-lg">Restez connecté avec notre communauté</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#25D366] text-white transition-transform hover:-translate-y-2 shadow-lg shadow-[#25D366]/30 gap-2">
              <i className="fab fa-whatsapp text-3xl"></i>
              <span className="text-xs font-bold uppercase tracking-wider">WhatsApp</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#1877F2] text-white transition-transform hover:-translate-y-2 shadow-lg shadow-[#1877F2]/30 gap-2">
              <i className="fab fa-facebook text-3xl"></i>
              <span className="text-xs font-bold uppercase tracking-wider">Facebook</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#0088cc] text-white transition-transform hover:-translate-y-2 shadow-lg shadow-[#0088cc]/30 gap-2">
              <i className="fab fa-telegram text-3xl"></i>
              <span className="text-xs font-bold uppercase tracking-wider">Telegram</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-black text-white transition-transform hover:-translate-y-2 shadow-lg shadow-black/30 gap-2">
              <i className="fab fa-tiktok text-3xl"></i>
              <span className="text-xs font-bold uppercase tracking-wider">TikTok</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-linear-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white transition-transform hover:-translate-y-2 shadow-lg gap-2">
              <i className="fab fa-instagram text-3xl"></i>
              <span className="text-xs font-bold uppercase tracking-wider">Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Logo Footer */}
            <div className="flex flex-col items-start">
              <img src="/logo.png" alt="Boutique COGI" className="h-16 mb-6 brightness-0 invert" />
              <p className="text-gray-400 font-lato leading-relaxed">Mode élégante pour tous. Découvrez l'exclusivité à chaque vêtement.</p>
            </div>

            {/* Liens Boutique */}
            <div>
              <h4 className="font-bold mb-6 tracking-widest uppercase text-gray-100">BOUTIQUE</h4>
              <ul className="space-y-3 text-gray-400 font-lato">
                <li><a href="#catalogue-femme" className="hover:text-white transition-colors">Habit Femme</a></li>
                <li><a href="#catalogue-homme" className="hover:text-white transition-colors">Habit Homme</a></li>
                <li><a href="#catalogue-enfant" className="hover:text-white transition-colors">Habit Enfant</a></li>
                <li><a href="#catalogue-chaussure" className="hover:text-white transition-colors">Chaussure Dame</a></li>
                <li><a href="#catalogue-sac" className="hover:text-white transition-colors">Sac Dame</a></li>
                <li><a href="#catalogue-accessoire" className="hover:text-white transition-colors">Accessoire</a></li>
              </ul>
            </div>

            {/* Liens Contact */}
            <div>
              <h4 className="font-bold mb-6 tracking-widest uppercase text-gray-100">CONTACT</h4>
              <ul className="space-y-3 text-gray-400 font-lato">
                <li><a href="mailto:contact@boutiquecogi.com" className="hover:text-white transition-colors flex items-center gap-2"><i className="fas fa-envelope text-sm"></i> E-mail</a></li>
                <li><a href="https://wa.me/243XXXXXXXXX" className="hover:text-white transition-colors flex items-center gap-2"><i className="fab fa-whatsapp text-sm"></i> WhatsApp</a></li>
              </ul>
            </div>

            {/* Liens Réseaux */}
            <div>
              <h4 className="font-bold mb-6 tracking-widest uppercase text-gray-100">RÉSEAUX</h4>
              <ul className="space-y-3 text-gray-400 font-lato">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><i className="fab fa-whatsapp w-5"></i> WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><i className="fab fa-facebook w-5"></i> Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><i className="fab fa-telegram w-5"></i> Telegram</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><i className="fab fa-tiktok w-5"></i> TikTok</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><i className="fab fa-instagram w-5"></i> Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm font-lato">&copy; 2026 Boutique COGI. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}