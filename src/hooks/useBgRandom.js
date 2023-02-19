import { useState, useEffect } from 'react';
import bgData from "../data/bgRandom.json";

export default function useBgRandom() {
  const [bgImage, setBgImage] = useState('');

  const randomKey = Math.floor( (Math.random() * bgData.length) );
  const randomBgImg = bgData[randomKey].image
  console.table({randomKey, randomBgImg, bgImage})

  const handleBgChange = () => setBgImage(`url(${randomBgImg})`);
  
  useEffect(() => {
    document.body.style.backgroundImage = bgImage;
  }, [bgImage]);

  return handleBgChange ;
}