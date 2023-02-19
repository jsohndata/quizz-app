import { useState, useEffect } from 'react';

export default function useBgRandom(newImage) {
  const [bgImage, setBgImage] = useState('');

  const handleBgChange = newImage => setBgImage(`url(${newImage})`);
  
  useEffect(() => {
    document.body.style.backgroundImage = bgImage;
  }, [bgImage]);

  return handleBgChange ;
}