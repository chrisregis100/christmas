import { useEffect, useState } from "react";

const App = () => {
  const [flocons, setFlocons] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [etincelle, setEtincelle] = useState([]);

  // création des flocons de neige
  useEffect(() => {
    const flocons = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 2}s`,
      opacity: Math.random(),
      size: Math.random() * 10 + 5,
    }));
    setFlocons(flocons);

    // gestion de l'apparition des étincelles
    const sparkles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 2 + 1}s`,
      delay: `${Math.random() * 3}s`,
      color: Math.random() > 0.5 ? "text-red-500" : "text-green-500",
    }));
    setEtincelle(sparkles);

    setTimeout(() => setShowMessage(true), 500);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-red-900 via-green-900 to-red-900">
      {/* Fond animé */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#000_70%)] opacity-40" />

      {/* Étincelles */}
      {etincelle.map((etincelle) => (
        <div
          key={etincelle.id}
          className={`absolute text-lg ${etincelle.color} animate-etincelle`}
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

      {/* Flocons de neige */}
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

      {/* Sapin de Noël */}
      <div className="absolute left-1/2 bottom-32 transform -translate-x-1/2">
        <div className="w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-transparent border-b-green-400 relative animate-pulse" />
        <div className="w-0 h-0 border-l-[75px] border-r-[75px] border-b-[120px] border-transparent border-b-green-500 relative -mt-20 animate-pulse" />
        <div className="w-0 h-0 border-l-[90px] border-r-[90px] border-b-[140px] border-transparent border-b-green-600 relative -mt-28 animate-pulse" />
        <div className="w-10 h-24 bg-yellow-900 mx-auto -mt-4" />

        {/* Décorations du sapin */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-yellow-400 text-2xl animate-ping">⭐</div>
        </div>
      </div>

      <div
        className={`absolute top-1/3 w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-1000 ${
          showMessage ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <h1 className="christmas-title text-[150px]  font-bold text-red-500 mb-8 animate-float shadow-text">
          Merry Christmas !
        </h1>
        <p className="christmas-subtitle  text-3xl text-white animate-pulse shadow-text-sm">
          Que la magie de Noël illumine cette belle journée
        </p>
      </div>

      <div className="absolute top-10 left-10 text-5xl animate-float-slow">
        🎄
      </div>
      <div className="absolute top-10 right-10 text-5xl animate-spin-slow">
        ⭐
      </div>
      <div className="absolute bottom-10 left-10 text-5xl animate-bounce-slow">
        🎁
      </div>
      <div className="absolute bottom-10 right-10 text-5xl animate-slide">
        🎅
      </div>
    </div>
  );
};

export default App;
