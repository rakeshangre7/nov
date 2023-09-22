import Button from '@/components/helpers/Button/Button';
import { Field, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

import React, { useState, useEffect } from 'react';

export type StatsBlockItemProps = {
  statNumber: Field<string>; // Use Field<string> for text fields
  suffix?: Field<string>; // Use Field<string> for text fields
  statText?: Field<string>;
  statCTA?: LinkField;
};
const StatsBlockItem = ({ statNumber, suffix, statText, statCTA }: StatsBlockItemProps) => {
  const statNumberValue = statNumber.value; // Extract the value property

  const [number, setNumber] = useState<number | string>(0);
  const targetValue: number = parseInt(statNumberValue); // Parse the targetValue as an integer
  const animationDuration = 1000;
  const initialValue = 0; // Start from 0

  useEffect(() => {
    let animationStartTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!animationStartTime) animationStartTime = timestamp;
      const progress: number = (timestamp - animationStartTime) / animationDuration;
      const animatedValue: number = Math.min(
        initialValue + Math.floor((targetValue - initialValue) * progress), // Round down to the nearest whole number
        targetValue
      );
      setNumber(
        statNumberValue.includes('+')
          ? `${animatedValue.toFixed(0)}+`
          : targetValue > 999
          ? `${animatedValue.toLocaleString()}`
          : animatedValue.toString()
      );
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [targetValue, statNumberValue]);

  return (
    <>
      <div className="mb-[30px] smd:mb-0  text-center flex-1 w-full">
        {suffix?.value ? (
          <>
            {statNumber && (
              <Text
                tag="span"
                field={statNumber}
                className=" text-black text-[72px] smd:text-[88px] font-bold font-primary leading-[0.72] smd:leading-[0.82]"
              />
            )}
            {suffix && (
              <Text
                tag="span"
                field={suffix}
                className=" text-black text-[72px] smd:text-[88px] font-bold font-primary leading-[0.72] smd:leading-[0.82]"
              />
            )}
          </>
        ) : (
          <Text
            tag="span"
            field={{
              value: number,
            }}
            className=" text-black text-[72px] smd:text-[88px] font-bold font-primary leading-[0.72] smd:leading-[0.82]"
          />
        )}

        {statText && (
          <Text
            field={statText}
            editable={true}
            tag="p"
            className="text-dark text-sm font-primary leading-24 pt-20 text-center relative before:absolute before:content-[''] before:h-[2px] before:w-[30px] before:-mt-10 before:left-2/4 before:bg-red before:transform before:-translate-x-1/2"
          />
        )}

        {statCTA?.value?.href && statCTA?.value?.text && (
          <Button
            field={statCTA}
            className="pt-[5px] mt-[11px]"
            variant={'tertiary'}
            iconPosition="right"
            iconClassName="icon-chevron-right"
          ></Button>
        )}
      </div>
    </>
  );
};

export default StatsBlockItem;
