import Button from '@/components/helpers/Button/Button';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { HoverImage } from './HoverImage';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import { useRouter } from 'next/router';
interface HoverImageCardProps {
  imageObject: HoverImage;
}
const HoverImageCard = ({ imageObject }: HoverImageCardProps) => {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const router = useRouter();
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

  return (
    <div
      onClick={() => {
        if (imageObject?.cta?.value?.href) {
          router.push(imageObject.cta.value.href);
        }
      }}
      onKeyUp={(e) => {
        if (e.keyCode === 13 && imageObject?.cta?.value?.href) {
          router.push(imageObject.cta.value.href);
        }
      }}
      tabIndex={0}
      className={clsx(
        "flex w-full h-[270px] sm:h-[330px] smd:h-[520px] relative cursor-pointer decoration-white before:content[''] group before:bg-black/[.2]  before:absolute before:left-0 before:top-0 before:h-full before:w-full basicFocus",
        {
          'hover:!no-underline hover:before:bg-black/[.6] active:!no-underline': !isTouchDevice,
        }
      )}
    >
      {imageObject?.image?.value?.src && (
        <ImageWrapper
          layout="fill"
          field={imageObject.image}
          className="absolute left-0 top-0 w-full -z-[1] h-[270px] sm:h-[330px] smd:h-[520px]"
        />
      )}
      <div className="w-full h-full p-[50px] flex justify-center text-white flex-col items-center z-0 mt-[-2px] md:mt-px">
        {imageObject?.headLine && (
          <Text
            className={clsx(
              '!text-white text-center font-primary font-semibold  mb-4 mt-[15px] group-active:underline !text-2xl ',
              {
                'group-hover:md:mt-[7px] group-active:!no-underline': !isTouchDevice,
              }
            )}
            tag="p"
            field={imageObject.headLine}
          />
        )}
        {imageObject?.body && (
          <RichTextA11yWrapper
            className={clsx(
              '!text-white body2 mb-4 mt-[13px] block group-active:underline text-center',
              {
                'md:hidden group-hover:block group-active:!no-underline': !isTouchDevice,
              }
            )}
            field={imageObject.body}
          />
        )}
        {imageObject.cta && (
          <Button
            className={clsx(
              '!text-white inline-flex text-center mt-[19px] !leading-normal !font-medium mb-[13px] [&_i]:ml-[7px] group-active:[&_span]:!underline ',
              {
                'md:hidden group-hover:inline-flex group-active:[&_span]:!no-underline':
                  !isTouchDevice,
              }
            )}
            field={imageObject.cta}
            iconClassName="icon-chevron-right group-active:underline decoration-transparent"
            iconPosition="right"
            variant="tertiary"
          />
        )}
      </div>
    </div>
  );
};

export default HoverImageCard;
