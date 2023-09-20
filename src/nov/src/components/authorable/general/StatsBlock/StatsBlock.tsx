import React, { useEffect, useState } from 'react';
import { Field, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Button from '@/components/helpers/Button/Button';

export interface StatsBlock {
  suffix1?: Field<string>;
  suffix2?: Field<string>;
  suffix3?: Field<string>;
  statNumber1?: Field<string | number>;
  statNumber2?: Field<string | number>;
  statNumber3?: Field<string | number>;
  statText1?: Field<string>;
  statText2?: Field<string>;
  statText3?: Field<string>;
  statCTA1?: LinkField;
  statCTA2?: LinkField;
  statCTA3?: LinkField;
}

export type StatsBlockProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: StatsBlock;
};

const StatsBlock = ({ fields }: StatsBlockProps) => {
  const [animatedNumber1, setAnimatedNumber1] = useState(0);
  const [animatedNumber2, setAnimatedNumber2] = useState(0);
  const [animatedNumber3, setAnimatedNumber3] = useState(0);

  useEffect(() => {
    const startCountAnimation = (
      _id: string,
      endNbr: number,
      setAnimatedValue: (value: number) => void
    ) => {
      let currentNumber = 0;
      const animationDuration = 50;
      const step = (endNbr - currentNumber) / animationDuration;

      const animationInterval = setInterval(() => {
        currentNumber += step;
        setAnimatedValue(currentNumber);

        if (currentNumber >= endNbr) {
          clearInterval(animationInterval);
        }
      }, 16);

      return () => {
        clearInterval(animationInterval);
      };
    };

    const statNumber1Value = fields.statNumber1?.value || 0;
    const endNbr1 =
      typeof statNumber1Value === 'number' ? statNumber1Value : parseFloat(statNumber1Value) || 0;

    const cleanup1 =
      typeof endNbr1 === 'number' && !isNaN(endNbr1)
        ? startCountAnimation('statNumber1', endNbr1, setAnimatedNumber1)
        : () => {};

    const statNumber2Value = fields.statNumber2?.value || 0;
    const endNbr2 =
      typeof statNumber2Value === 'number' ? statNumber2Value : parseFloat(statNumber2Value) || 0;

    const cleanup2 =
      typeof endNbr2 === 'number' && !isNaN(endNbr2)
        ? startCountAnimation('statNumber2', endNbr2, setAnimatedNumber2)
        : () => {};

    const statNumber3Value = fields.statNumber3?.value || 0;
    const endNbr3 =
      typeof statNumber3Value === 'number' ? statNumber3Value : parseFloat(statNumber3Value) || 0;

    const cleanup3 =
      typeof endNbr3 === 'number' && !isNaN(endNbr3)
        ? startCountAnimation('statNumber3', endNbr3, setAnimatedNumber3)
        : () => {};

    // Clean up the intervals when the component unmounts
    return () => {
      cleanup1();
      cleanup2();
      cleanup3();
    };
  }, [fields]);

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="" data-component="authorable/general/statsblock" data-testid="statsblock">
          <div className="flex flex-col smd:flex smd:flex-row justify-between items-center flex-wrap pt-[30px] smd:pt-20">
            <div className="mb-[30px] smd:mb-0  text-center flex-1 w-full">
              <Text
                tag="span"
                field={{
                  value: fields.suffix1?.value ? (
                    <>
                      {fields.statNumber1?.value} {fields.suffix1?.value}
                    </>
                  ) : (
                    animatedNumber1.toLocaleString()
                  ),
                }}
                className=" text-black text-[72px] smd:text-[88px] font-bold font-primary leading-[0.72] smd:leading-[0.82]"
              />

              <Text
                tag="p"
                field={fields?.statText1}
                className="text-dark text-sm font-primary leading-24 pt-20 text-center relative before:absolute before:content-[''] before:h-[2px] before:w-[30px] before:-mt-10 before:left-2/4 before:bg-red before:transform before:-translate-x-1/2"
              ></Text>
              {fields.statCTA1 && (
                <Button
                  field={fields?.statCTA1}
                  className="pt-[5px] mt-[11px]"
                  variant={'tertiary'}
                  iconPosition="right"
                  iconClassName="icon-chevron-right"
                ></Button>
              )}
            </div>
            <div className="mb-[30px] smd:mb-0 text-center flex-1 w-full">
              {fields?.statNumber2?.value && (
                <Text
                  tag="span"
                  field={{
                    value: fields.suffix2?.value ? (
                      <>
                        {fields.statNumber2?.value} {fields.suffix2?.value}
                      </>
                    ) : typeof animatedNumber2 === 'number' ? (
                      fields.statNumber2?.value === '50+' ? (
                        `${animatedNumber2.toLocaleString()}+`
                      ) : (
                        animatedNumber2.toLocaleString()
                      )
                    ) : (
                      ''
                    ),
                  }}
                  className=" text-black text-[72px] smd:text-[88px] font-bold font-primary leading-[0.72] smd:leading-[0.82]"
                />
              )}

              <Text
                tag="p"
                field={fields?.statText2}
                className="text-dark text-sm font-primary leading-24 pt-20 text-center relative before:absolute before:content-[''] before:h-[2px] before:w-[30px] before:-mt-10 before:left-2/4 before:bg-red before:transform before:-translate-x-1/2"
              ></Text>
              {fields.statCTA2 && (
                <Button
                  field={fields?.statCTA2}
                  className="pt-[5px] mt-[11px]"
                  variant={'tertiary'}
                  iconPosition="right"
                  iconClassName="icon-chevron-right"
                ></Button>
              )}
            </div>
            <div className="mb-[30px] smd:mb-0 text-center flex-1 w-full">
              <Text
                tag="span"
                field={{
                  value: fields.suffix3?.value ? (
                    <>
                      {fields.statNumber3?.value} {fields.suffix3?.value}
                    </>
                  ) : (
                    animatedNumber3.toLocaleString()
                  ),
                }}
                className=" text-black text-[72px] smd:text-[88px] font-bold font-primary leading-[0.72] smd:leading-[0.82]"
              />
              <Text
                tag="p"
                field={fields?.statText3}
                className="text-dark text-sm font-primary leading-24 pt-20 text-center relative before:absolute before:content-[''] before:h-[2px] before:w-[30px] before:-mt-10 before:left-2/4 before:bg-red before:transform before:-translate-x-1/2"
              ></Text>
              {fields.statCTA3 && (
                <Button
                  field={fields?.statCTA3}
                  className="pt-[5px] mt-[11px]"
                  variant={'tertiary'}
                  iconPosition="right"
                  iconClassName="icon-chevron-right"
                ></Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBlock;
