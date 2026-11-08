import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import imageMoi1 from "../assets/imageMoi1.jpeg";
import imageMoi2 from "../assets/imageMoi2.jpeg";
import imageMoi3 from "../assets/imageMoi3.jpeg";
// Nos données (images, titres). 
const slides = [
  {
    id: 1,
    url: imageMoi1,
    titleKey: "carousel.slide1_title",
    titleDefault: "Développeur Front-End",
    subtitleKey: "carousel.slide1_subtitle",
    subtitleDefault: "Création d'interfaces web modernes et réactives."
  },
  {
    id: 2,
    url: imageMoi2,
    titleKey: "carousel.slide2_title",
    titleDefault: "Passionné par le code",
    subtitleKey: "carousel.slide2_subtitle",
    subtitleDefault: "Apprentissage continu sur React, Tailwind et l'écosystème JS."
  },
  {
    id: 3,
    url: imageMoi3,
    titleKey: "carousel.slide3_title",
    titleDefault: "Créativité & Rigueur",
    subtitleKey: "carousel.slide3_subtitle",
    subtitleDefault: "Des expériences utilisateurs fluides et esthétiques."
  }
];

export default function HeroCarousel() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Défilement automatique toutes les 6 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    // Nettoyage de l'intervalle si le composant est démonté
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-80 md:h-[450px] group overflow-hidden rounded-2xl shadow-sm">
      
      {/* Container de l'image de fond */}
      <div 
        className="w-full h-full bg-center bg-cover duration-700 ease-out transition-all"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        {/* Filtre sombre pour garantir la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Contenu Texte */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg transition-all transform translate-y-0">
            {t(slides[currentIndex].titleKey, slides[currentIndex].titleDefault)}
          </h2>
          <p className="text-base md:text-xl text-slate-200 drop-shadow-md max-w-2xl">
            {t(slides[currentIndex].subtitleKey, slides[currentIndex].subtitleDefault)}
          </p>
        </div>
      </div>

      {/* Flèche Gauche (cachée par défaut, visible au survol) */}
      <button 
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-brand transition-all backdrop-blur-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Flèche Droite */}
      <button 
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-brand transition-all backdrop-blur-sm"
      >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Indicateurs en bas (Dots) */}
      <div className="absolute bottom-6 right-0 left-0 flex justify-center gap-3">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? "bg-brand w-8" : "bg-white/50 w-2 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}