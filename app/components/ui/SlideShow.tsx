'use client'
import React, { useState, useEffect } from 'react';

interface SlideshowProps {
  images: string[];
  delay?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, delay = 5000 }) => {
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
    <div>
      {images && images.length > 0 && (
        <img src={images[currentImageIndex]} alt="slideshow" />
      )}
    </div>
  );
};

export default Slideshow;
