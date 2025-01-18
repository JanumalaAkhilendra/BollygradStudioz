import React, { useState, useEffect } from 'react';
import { Play, ChevronRight, ChevronLeft, ChevronUp, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const carouselItems = [
    {
      id: 1,
      title: "Karan Arjun 2",
      subtitle: "41 Interesting Facts",
      cast: "Salman khan | Shahrukh Khan | Deepika padukon | Katrina kaif",
      imageUrl: "./kgf-chapter-2_164784859710-e1682160065661.webp",
      videoUrl: "https://youtube.com/watch?v=example1"
    },
    {
      id: 2,
      title: "Movie 2",
      subtitle: "35 Interesting Facts",
      cast: "Cast Member 1 | Cast Member 2",
      imageUrl: "./ikj.webp",
      videoUrl: "https://youtube.com/watch?v=example2"
    },
    {
      id: 3,
      title: "Movie 3",
      subtitle: "28 Interesting Facts",
      cast: "Cast Member 3 | Cast Member 4",
      imageUrl: "./uhy-e1682075533400.png",
      videoUrl: "https://youtube.com/watch?v=example3"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    let interval =0;
    if (isPlaying) {
       interval = setInterval(() => {
        setActiveIndex(prev => (prev < carouselItems.length - 1 ? prev + 1 : 0));
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, carouselItems.length]);

  const handlePlayClick = (url : any) => {
    window.open(url, '_blank');
  };

  const handleNavigation = (direction : any) => {
    if (direction === 'prev') {
      setActiveIndex(prev => (prev > 0 ? prev - 1 : carouselItems.length - 1));
    } else {
      setActiveIndex(prev => (prev < carouselItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap w-[90vw] md:w-[75vw] h-auto  md:h-[600px] max-w-8xl mx-auto gap-8  p-2 md:p-8 bg-[#1b1f23]">
      {/* Left Vertical Carousel */}
      <div className="w-[90vw]  md:w-1/2 relative  h-[300px]   md:h-full">
        <div className="overflow-hidden h-full">
          <div 
            className="transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateY(-${activeIndex * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div 
                key={item.id} 
                className="p-0 md:p-2 h-full text-center my-auto"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full flex justify-center items-center flex-col  my-auto">
                  <h3 className="text-lg  md:text-3xl font-extrabold mb-2 mt-2 md:mt-32">{item.title}</h3>
                  <p className="text-gray-600 font-semibold text-sm md:text-2xl mb-4">{item.subtitle}</p>
                  <p className="text-sm  md:text-xl text-gray-500">{item.cast}</p>
                  <button 
                    className="mt-4 px-6 py-2 bg-rose-100 text-rose-600 rounded-full hover:bg-rose-200 transition-colors duration-300 flex items-center gap-2 m-auto"
                    onClick={() => handlePlayClick(item.videoUrl)}
                  >
                    WATCH NOW
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <button 
          onClick={() => handleNavigation('prev')}
          className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ChevronUp size={20} />
        </button>
        <button 
          onClick={() => handleNavigation('next')}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ChevronDown size={20} />
        </button> */}
      </div>

      {/* Right Horizontal Carousel */}
      <div className="w-[90vw]  md:w-1/2 relative h-full">
        <div className="overflow-hidden h-full">
          <div 
            className="transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <div className="flex h-full">
              {carouselItems.map((item) => (
                <div 
                  key={item.id} 
                  className="min-w-full relative"
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button 
                    onClick={() => handlePlayClick(item.videoUrl)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 p-6 rounded-full hover:bg-white transition-colors duration-300 shadow-lg"
                  >
                    <Play size={32} className="text-rose-600" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button 
          onClick={() => handleNavigation('prev')}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => handleNavigation('next')}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Auto-play toggle */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-4 right-4 px-4 py-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Portfolio;