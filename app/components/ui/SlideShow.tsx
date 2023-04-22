'use client'
import React, { useState, useEffect } from 'react';

interface SlideshowProps {
  delay?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ delay = 5000 }) => {
  // image size 624*320
  const images = [
    "https://pixabay.com/get/g093ee11afc00181000bc6e71774681e4da306bb93ff8d018fb7f0898e4864638558fcd64842c2d2d7ba45ab18cfb119f4e3985a8e347ea39936acf0d3413529978649fc2b96d0491251535fbd7cc6d31_640.png",
    "https://imgs.search.brave.com/_-GjcGu5DsRle43_oTv8VprQrWx8mDSrV3L0UOT09FU/rs:fit:826:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/d19ZOHR3Tlkxbi1x/TC13WWlrZEZnSGFF/USZwaWQ9QXBp",
    "https://cdn.pixabay.com/photo/2016/12/05/19/49/syringe-1884784__340.jpg",
    "https://pixabay.com/get/gea5af821dbb19ad2de2fb256dcd64f5a44d480b830f148c0b049d2fc2e4c19da9dc234311ed881a9ed5678b872c81c39f7ac813776a7621b6b9d92f8cefc75be5d4ed7a04f5084d7527d0965c896082a_640.jpg",
    "https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541__340.jpg",
    "https://pixabay.com/get/ge229c2f1af6a3c3f412f7002bc0663f066ab8b538c299486b60c3c1ebdec1d5ac511dd1691badbcb6255878dd98ba47dde05df84360f9a9403e565c10086ecc71fc06ba6494642503622c4c17f9d6654_640.jpg",
    "https://pixabay.com/get/ga331353743e13fe92187fc5139bc9093880cc65c2e3722388a80b8440d07ccc253009240ed910c94d404d8efcc21f04cfea9853ce1a95a8ee5c29a4a9872bf594a9b3235aed53b981cbebee6d0c8d9c7_640.jpg"
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
