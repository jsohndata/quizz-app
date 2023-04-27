import { useState, useEffect } from 'react';
import bgData from "../data/bgRandom.json";

export default function useBgRandom() {
  const [bgImage, setBgImage] = useState('');

  const randomKey = Math.floor( (Math.random() * bgData.length) );
  const randomBgImg = bgData[randomKey].image

  const useBgRandom = () => {
    return setBgImage(`url(${randomBgImg})`);
  }
  
  useEffect(() => {
    document.body.style.backgroundImage = bgImage;
    }, [bgImage]);

  // console.table({randomKey, randomBgImg, bgImage});

  return useBgRandom;
}
