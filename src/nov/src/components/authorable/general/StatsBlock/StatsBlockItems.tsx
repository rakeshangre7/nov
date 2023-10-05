import React, { useEffect, useRef, useState } from 'react';
import { LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Button from '@/components/helpers/Button/Button';

export type StatsBlockItemsProps = {
  statNumber?: string | number | undefined;
  alignment?: string;

  suffix?: string | number | undefined;
  statText?: string | number | undefined;
  statCTA?: LinkField | undefined;
};

const StatsBlockItems = ({
  statNumber,
  alignment,

  suffix,
  statText,
  statCTA,
}: StatsBlockItemsProps) => {
  const [animatedNumber, setAnimatedNumber] = useState<number | string>('');
  const statsBlockRef = useRef<HTMLDivElement | null>(null);
  const targetValue: string | number | undefined = statNumber;

  useEffect(() => {
    const startCountAnimation = (
      endNbr: number,
      setAnimatedValue: (value: number | string) => void
    ) => {
      let currentNumber = 0;
      const animationDuration = 50; // Adjust the animation duration as needed
      const step = (endNbr - currentNumber) / animationDuration;

      const animationInterval = setInterval(() => {
        currentNumber += step;
        currentNumber = Math.min(currentNumber, endNbr);

        setAnimatedValue(Math.floor(currentNumber).toLocaleString());

        if (currentNumber >= endNbr) {
          clearInterval(animationInterval);
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (animatedNumber === '') {
            const statNumberValue = statNumber || 0;

            const endNbr =
              typeof statNumberValue === 'number'
                ? statNumberValue
                : parseFloat(statNumberValue) || 0;
            startCountAnimation(endNbr, setAnimatedNumber);
          }
        }
      });
    });

    if (statsBlockRef.current) {
      observer.observe(statsBlockRef.current);
    }

    return () => {
      if (statsBlockRef.current) {
        observer.unobserve(statsBlockRef.current);
      }
    };
  }, [animatedNumber, statNumber]);

  const isString = typeof targetValue === 'string';
  const valueToDisplay = isString
    ? targetValue.includes('+')
      ? `${animatedNumber}+`
      : animatedNumber.toString()
    : animatedNumber.toLocaleString();

  return (
    <div className=" mb-[30px] last:mb-0  smd:mb-0 text-center flex-1 w-full" ref={statsBlockRef}>
      {statNumber && (
        <Text
          tag="span"
          field={{
            value: suffix
              ? alignment === 'right'
                ? `${statNumber} ${suffix || ''}`
                : `${suffix || ''} ${statNumber}`
              : typeof animatedNumber === 'number'
              ? animatedNumber.toLocaleString()
              : valueToDisplay,
          }}
          className={`text-black text-[72px] smd:text-[60px] xl:text-[88px] font-bold font-primary leading-[0.72] smd:leading-[0.82] `}
        />
      )}

      {statText && (
        <Text
          tag="p"
          field={{ value: statText }}
          className="text-dark text-sm font-primary leading-24 pt-20 text-center relative before:absolute before:content-[''] before:h-[2px] before:w-[30px] before:-mt-10 before:left-2/4 before:bg-red before:transform before:-translate-x-1/2"
        />
      )}

      {statCTA?.value?.text && statCTA?.value?.href && (
        <Button
          field={statCTA}
          className="pt-[5px] mt-[11px]"
          variant={'tertiary'}
          iconPosition="right"
          iconClassName="icon-chevron-right"
        ></Button>
      )}
    </div>
  );
};

export default StatsBlockItems;
