import { useEffect, useState } from "react";

const App = () => {
  const [flocons, setFlocons] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [etincelle, setEtincelle] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fonction pour détecter si on est sur mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    // Nombre d'éléments adapté selon la taille d'écran
    const floconCount = isMobile ? 25 : 50;
    const etincelleCount = isMobile ? 15 : 30;

    const flocons = Array.from({ length: floconCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 2}s`,
      opacity: Math.random(),
      size: Math.random() * (isMobile ? 8 : 10) + 5,
    }));
    setFlocons(flocons);

    const sparkles = Array.from({ length: etincelleCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 2 + 1}s`,
      delay: `${Math.random() * 3}s`,
      color: Math.random() > 0.5 ? "text-red-500" : "text-green-500",
    }));
    setEtincelle(sparkles);

    setTimeout(() => setShowMessage(true), 500);

    // Gestionnaire de redimensionnement
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-red-900 via-green-900 to-red-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#000_70%)] opacity-40" />

      {etincelle.map((etincelle) => (
        <div
          key={etincelle.id}
          className={`absolute text-lg ${etincelle.color} animate-etincelle hidden sm:block`}
          style={{
            left: etincelle.left,
            top: etincelle.top,
            animationDuration: etincelle.animationDuration,
            animationDelay: etincelle.delay,
          }}
        >
          ✧
        </div>
      ))}

      {flocons.map((flocon) => (
        <div
          key={flocon.id}
          className="absolute text-white animate-fall"
          style={{
            left: flocon.left,
            animation: `fall ${flocon.animationDuration} linear infinite`,
            animationDelay: flocon.delay,
            opacity: flocon.opacity,
            fontSize: `${flocon.size}px`,
          }}
        >
          ❅
        </div>
      ))}

      {/* Sapin responsive */}
      <div className="absolute left-1/2 bottom-16 sm:bottom-10 transform -translate-x-1/2">
        <div className="w-0 h-0 border-l-[30px] sm:border-l-[60px] border-r-[30px] sm:border-r-[60px] border-b-[50px] sm:border-b-[100px] border-transparent border-b-green-400 relative animate-pulse" />
        <div className="w-0 h-0 border-l-[40px] sm:border-l-[75px] border-r-[40px] sm:border-r-[75px] border-b-[60px] sm:border-b-[120px] border-transparent border-b-green-500 relative -mt-10 sm:-mt-20 animate-pulse" />
        <div className="w-0 h-0 border-l-[50px] sm:border-l-[90px] border-r-[50px] sm:border-r-[90px] border-b-[70px] sm:border-b-[140px] border-transparent border-b-green-600 relative -mt-14 sm:-mt-28 animate-pulse" />
        <div className="w-6 sm:w-10 h-16 sm:h-24 bg-yellow-900 mx-auto -mt-2 sm:-mt-4" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-yellow-400 text-xl sm:text-2xl animate-ping">
            ⭐
          </div>
        </div>
      </div>

      {/* Message responsive */}
      <div
        className={`absolute top-1/4 sm:top-1/3 w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-1000 px-4 ${
          showMessage ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <h1 className="christmas-title font-bold text-red-500 lg:text-[150px] md:text-[100px] text-5xl mb-4 sm:mb-8 animate-float shadow-text">
          Merry Christmas !
        </h1>
        <p className="christmas-subtitle text-xl sm:text-2xl md:text-3xl lg:text-[50px] text-white animate-pulse shadow-text-sm">
          Que la magie de Noël illumine cette belle journée
        </p>
      </div>

      {/* Décorations responsives */}
      <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-3xl sm:text-5xl animate-float-slow">
        🎄
      </div>
      <div className="absolute top-4 sm:top-10 right-4 sm:right-10 text-3xl sm:text-5xl animate-spin-slow">
        ⭐
      </div>
      <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 text-3xl sm:text-5xl animate-bounce-slow">
        🎁
      </div>
      <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 text-3xl sm:text-5xl animate-slide">
        🎅
      </div>
    </div>
  );
};

export default App;
