
export function Hero() {
  return (
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

      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap absolute bottom-0 w-full bg-black/50 py-2">
        <div className="animate-marquee flex gap-8 text-white">
          <span>✨ NOUVELLES ARRIVÉES ✨</span>
          <span>🌟 COLLECTIONS EXCLUSIVES 🌟</span>
          <span>✨ NOUVELLES ARRIVÉES ✨</span>
          <span>🌟 COLLECTIONS EXCLUSIVES 🌟</span>
        </div>
      </div>
    </section>
  );
}