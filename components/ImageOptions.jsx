import React, { useState } from 'react';

const ImageOptions = ({ src, fallbackSrc, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);
  
  const onError = () => {
    setImageSrc(fallbackSrc);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={onError}
      {...props}
    />
  );
};

export default ImageOptions