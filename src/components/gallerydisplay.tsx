import React, { useState, useEffect, useRef } from "react";

const SpreadingGallery = () => {
  const [isInView, setIsInView] = useState(false);
  const galleryRef = useRef(null);

  const images = [
    { id: 1, title: "Oppenheimer", url: "./1314905.webp" },
    { id: 2, title: "Mission Impossible", url: "./maxresdefault-2.webp" },
    { id: 3, title: "Leo First Look", url: "./desktop-wallpaper-tom-cruise-to-run-towards-his-own-death-in-mission-impossible-7-mission-impossible-7.webp" },
    { id: 4, title: "Jawaan", url: "./wallpapersden.com_hd-into-the-spider-verse_1920x1094.webp" },
    { id: 5, title: "Leo First Look", url: "./Jawan-2022.webp" },
    { id: 6, title: "Jawaan", url: "./maxresdefault-1.webp" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => {
      if (galleryRef.current) observer.unobserve(galleryRef.current);
    };
  }, [isInView]);

  return (
    <div className="relative min-h-screen bg-[#1b1f23] overflow-hidden p-8" ref={galleryRef}>
      <div className="max-w-7xl mx-auto pt-20 pb-5 md:pb-40">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">GALLERY</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore more images and dive deeper into our world of creativity and inspiration.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center px-4">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-rose-800 to-rose-600 rounded-xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">EXPLORE MORE</h1>
          <p className="text-gray-200 mb-6">
            Discover our full gallery and get inspired by our collection of stunning visuals.
          </p>
          <button className="px-8 py-3 bg-white text-rose-800 rounded-full font-semibold hover:bg-rose-100 transition-all duration-300">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpreadingGallery;