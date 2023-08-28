import Button from '@/components/helpers/Button/Button';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { NextImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { HoverImage } from './HoverImage';
interface HoverImageCardProps {
  imageObject: HoverImage;
}
const HoverImageCard = ({ imageObject }: HoverImageCardProps) => {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        !!(window.navigator.maxTouchPoints || 'ontouchstart' in document.documentElement)
      );
    };
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);

  return <></>;
};

export default HoverImageCard;
