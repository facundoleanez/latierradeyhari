import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const responsiveWidth = (width) => {
  if ( width <= 576) {
      return 320
  } else if (width <= 992) {
      return 480
  } else if (width <= 1600) {
      return 850  
  } else {
      return 1200
  }
};
export const responsiveHeight = (width) => {
  if ( width <= 576) {
      return 180
  } else if (width <= 992) {
      return 270
  } else if (width <= 1600) {
      return 475
  } else {
      return 675
  }
};
