import React, { useState, useEffect } from 'react';

const SlideShow = ({ images, interval}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [images, interval]);

  return (
    <div className="slideshow">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
};

export default SlideShow;
