// components/ui/footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo Footer */}
          <div className="flex flex-col items-start">
            <img
              src="/logo.png"
              alt="Boutique COGI"
              className="h-16 mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 font-lato leading-relaxed">
              Mode élégante pour tous. Découvrez l'exclusivité à chaque
              vêtement.
            </p>
          </div>

          {/* Liens Boutique */}
          <div>
            <h4 className="font-bold mb-6 tracking-widest uppercase text-gray-100">
              BOUTIQUE
            </h4>
            <ul className="space-y-3 text-gray-400 font-lato">
              <li>
                <a href="#catalogue-femme" className="hover:text-white transition-colors">
                  Habit Femme
                </a>
              </li>
              <li>
                <a href="#catalogue-homme" className="hover:text-white transition-colors">
                  Habit Homme
                </a>
              </li>
              <li>
                <a href="#catalogue-enfant" className="hover:text-white transition-colors">
                  Habit Enfant
                </a>
              </li>
              <li>
                <a href="#catalogue-chaussure" className="hover:text-white transition-colors">
                  Chaussure Dame
                </a>
              </li>
              <li>
                <a href="#catalogue-sac" className="hover:text-white transition-colors">
                  Sac Dame
                </a>
              </li>
              <li>
                <a href="#catalogue-accessoire" className="hover:text-white transition-colors">
                  Accessoire
                </a>
              </li>
            </ul>
          </div>

          {/* Liens Contact */}
          <div>
            <h4 className="font-bold mb-6 tracking-widest uppercase text-gray-100">
              CONTACT
            </h4>
            <ul className="space-y-3 text-gray-400 font-lato">
              <li>
                <a
                  href="mailto:contact@boutiquecogi.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-envelope text-sm"></i> E-mail
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/243XXXXXXXXX"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <i className="fab fa-whatsapp text-sm"></i> WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Liens Réseaux */}
          <div>
            <h4 className="font-bold mb-6 tracking-widest uppercase text-gray-100">
              RÉSEAUX
            </h4>
            <ul className="space-y-3 text-gray-400 font-lato">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <i className="fab fa-whatsapp w-5"></i> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <i className="fab fa-facebook w-5"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <i className="fab fa-telegram w-5"></i> Telegram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <i className="fab fa-tiktok w-5"></i> TikTok
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <i className="fab fa-instagram w-5"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm font-lato">
            &copy; 2026 Boutique COGI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}