'use client'
import React, { useState, useEffect } from 'react';

interface SlideshowProps {
  delay?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ delay = 5000 }) => {
  // image size 624*320
  const images = [
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1682083353_Web_Home_Bannerfdsfds.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1681816172_Web_Home_Bannersvdvds.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1681816867_Web_Home_Bannersguguui.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1671640109_Web_Home_Kareena.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1681400129_Web_Home_Bannerggr.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex, delay]);

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          className="bg-transparent border-none text-2xl px-4 py-1 hover:bg-gray-300"
          style={{backgroundColor: 'transparent'}}
          onClick={() =>
            setCurrentImageIndex(
              currentImageIndex === 0
                ? images.length - 1
                : currentImageIndex - 1
            )
          }
        >
          &#10094;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          className="bg-transparent border-none text-2xl px-4 py-1 hover:bg-gray-300"
          style={{backgroundColor: 'transparent'}}
          onClick={() =>
            setCurrentImageIndex(
              currentImageIndex === images.length - 1
                ? 0
                : currentImageIndex + 1
            )
          }
        >
          &#10095;
        </button>
      </div>
      {images && images.length > 0 && (
        <img
          src={images[currentImageIndex]}
          alt="slideshow"
          className="w-full max-h-80 px-11"
        />
      )}
    </div>
  );
};

export default Slideshow;
