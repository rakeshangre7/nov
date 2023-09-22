import React, { useEffect, useRef, useState } from 'react';
import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import StatsBlockItem from './StatsBlockItem';
import clsx from 'clsx';

interface StatsBlock {
  suffix1?: Field<string>;
  suffix2?: Field<string>;
  suffix3?: Field<string>;
  statNumber1?: Field<string>;
  statNumber2?: Field<string>;
  statNumber3?: Field<string>;
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

const StatsBlock = ({ fields, params }: StatsBlockProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    const targetElement = targetRef.current;
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) {
    return <div ref={targetRef} />;
  }

  return (
    <div className="container mx-auto">
      <div
        className={clsx('w-full m-auto', {
          'text-right': params?.alignment === 'right',
          'text-left': params?.alignment !== 'right',
        })}
      >
        <div className="test1 flex flex-col smd:flex smd:flex-row justify-between items-center pt-[30px] smd:pt-20">
          {fields.statNumber1?.value && (
            <StatsBlockItem
              statNumber={fields.statNumber1}
              suffix={fields.suffix1}
              statText={fields.statText1}
              statCTA={fields.statCTA1}
            />
          )}
          {fields.statNumber2?.value && fields.suffix2 && fields.statText2 && fields.statCTA2 && (
            <StatsBlockItem
              statNumber={fields.statNumber2}
              suffix={fields.suffix2}
              statText={fields.statText2}
              statCTA={fields.statCTA2}
            />
          )}

          {fields.statNumber3?.value && fields.suffix3 && fields.statText3 && fields.statCTA3 && (
            <StatsBlockItem
              statNumber={fields.statNumber3}
              suffix={fields.suffix3}
              statText={fields.statText3}
              statCTA={fields.statCTA3}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsBlock;
