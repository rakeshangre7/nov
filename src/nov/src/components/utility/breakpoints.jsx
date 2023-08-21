import { useState, useEffect } from 'react';

export const useBreakpoints = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize(); // Call initially
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isMiniDesktop = screenWidth < 1280;
  const isDesktop = screenWidth >= 1024;

  return { isMobile, isTablet, isDesktop, isMiniDesktop };
};
