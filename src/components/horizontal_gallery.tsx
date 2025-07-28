import React from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const HorizontalGallery = ({ images, onImageClick }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const topRowImages = images.slice(0, 10);
  const bottomRowImages = images.slice(10, 20);

  return (
    <div className="relative">
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => scroll('left')}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex flex-col space-y-4 min-w-max">
          <div className="flex space-x-4">
            {topRowImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg flex-shrink-0"
                style={{ width: '280px', height: '200px' }}
                onClick={() => onImageClick(index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ExternalLink size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-4">
            {bottomRowImages.map((image, index) => (
              <div
                key={index + 10}
                className="relative group cursor-pointer overflow-hidden rounded-lg flex-shrink-0"
                style={{ width: '280px', height: '200px' }}
                onClick={() => onImageClick(index + 10)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 11}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ExternalLink size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HorizontalGallery;