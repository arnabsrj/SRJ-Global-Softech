import { useState, useEffect } from "react";

const AdPopup = () => {
  const ads = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmNCtUxGTpR8gFKlx_lWZyT0-2LIb8Om63g&s",
      title: "Master Physics with Physics Wala!",
      description: "Get 50% off on all JEE/NEET courses. Limited time offer!",
      buttonText: "Enroll Now",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/05/52/90/05/360_F_552900530_D4WF1c3zGsvIGfLgKaRBrEmbvPlk6O6E.jpg",
      title: "Chemistry Made Easy!",
      description: "Interactive lessons for every level. Join today!",
      buttonText: "Learn More",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_640.jpg",
      title: "Boost Your Math Skills",
      description: "Crack concepts with AI-driven courses.",
      buttonText: "Try Free",
    },
  ];

  const [visibleAds, setVisibleAds] = useState([]);
  const [dismissedAds, setDismissedAds] = useState([]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      const timers = ads.map((_, index) =>
        setTimeout(() => {
          setVisibleAds((prev) => [...prev, index]);
        }, index * 500)
      );

      // Cleanup function for the nested timers
      return () => timers.forEach((t) => clearTimeout(t));
    }, 5000);

    return () => clearTimeout(initialDelay);
  }, []);

  const handleDismiss = (index) => {
    setDismissedAds((prev) => [...prev, index]);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex justify-start items-end pointer-events-none">
      <div className="relative m-5 space-y-4 w-full max-w-sm pointer-events-auto">
        {visibleAds
          .filter((i) => !dismissedAds.includes(i))
          .reverse()
          .map((i) => {
            const ad = ads[i];
            return (
              <div
                key={i}
                className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-4 flex gap-4 items-center transition-transform duration-500 translate-y-0 opacity-100 animate-[fadeSlideUp_0.4s_ease]"
              >
                {/* Close Button on Every Ad */}
                <button
                  onClick={() => handleDismiss(i)}
                  className="absolute top-2 right-3 text-xl font-bold text-gray-700 dark:text-gray-300 hover:text-red-600"
                >
                  &times;
                </button>

                {/* Left Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-md font-bold text-indigo-900 dark:text-white">
                    {ad.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {ad.description}
                  </p>
                  <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm transition-all">
                    {ad.buttonText}
                  </button>
                </div>

                {/* Right Image */}
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-24 h-auto rounded-md shadow-md"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AdPopup;
