import React, { useEffect, useState, useRef } from 'react';

// Local
import clsx from 'clsx';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import TextOnlyButton from './TextOnlyButton';
import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

interface Fields {
  contentTag: {
    jsonValue: {
      id: string;
      url: string;
      name: string;
      displayName: string;
      fields: {
        tag: Field<string>;
      };
    };
  };
  heading?: { jsonValue: Field<string> };
  subheading?: { jsonValue: Field<string> };
  cta?: { jsonValue: LinkField };
}

export type TextOnlyHeroProps = {
  uid: string;
  componentName: string;
  dataSource?: string;
  params?: { [key: string]: string };
  fields: { data: { datasource: Fields | null; contextItem: Fields } };
};

const TextOnlyHero = ({ fields }: TextOnlyHeroProps): JSX.Element => {
  // Fail out if fields aren't present

  const useDataSource = fields?.data?.datasource && fields?.data?.datasource !== null;
  const currentData =
    useDataSource && useDataSource ? fields?.data?.datasource : fields?.data?.contextItem;
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const currentHeightRef = useRef<HTMLDivElement | null>(null);
  const [wrapperHeight, setWrapperHeight] = useState<number>(0);

  // function to handle scroll and cta behaviour
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsSticky(currentScrollPos > wrapperHeight);
  };

  // function to calculate height
  const calHeight = () => {
    setWrapperHeight((currentHeightRef?.current as HTMLDivElement).getBoundingClientRect().height);
  };

  // useEffect to calculate height of the component
  useEffect(() => {
    currentHeightRef.current && calHeight();
  }, []);

  // useEffect to attach scroll event to the component
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [calHeight]);

  if (fields === null || fields === undefined) return <></>;
  return (
    <>
      <div
        className={clsx(
          'smd:min-h-[720px]',
          'min-h-screen',
          'bg-white',
          'border',
          'border-lime',
          'relative'
        )}
        ref={currentHeightRef}
      >
        <div
          className={clsx(
            'container',
            'smd:min-h-[720px]',
            'min-h-screen',
            'flex',
            'justify-center',
            'flex-col',
            'flex-nowrap'
          )}
        >
          {currentData?.contentTag && currentData?.contentTag !== null && (
            <div className={clsx('pt-2', 'pb-2', 'font-bold', 'text-black')}>
              {currentData?.contentTag?.jsonValue?.fields?.tag?.value}
            </div>
          )}
          <RichTextA11yWrapper
            tag="h1"
            field={currentData?.heading?.jsonValue}
            className={clsx(
              'lg:[&_h1]:text-8xl',
              'lg:[&_h1]:leading-80',
              'lg:text-8xl',
              'lg:leading-80',
              'smd:[&_h1]:text-[64px]',
              'smd:[&_h1]:leading-[64px]',
              'smd:text-[64px]',
              'smd:leading-[64px]',
              '[&_h1]:text-7xl',
              '[&_h1]:leading-56',
              'text-black'
            )}
          />
          <RichTextA11yWrapper
            field={currentData?.subheading?.jsonValue}
            className={clsx(
              'lg:w-[512px]',
              'smd:w-[592px]',
              'text-lg',
              'leading-28',
              'mt-[37px]',
              'text-black',
              '[&_p]:text-lg',
              '[&_p]:leading-28',
              '[&_p]:last:!mb-[22.5px]'
            )}
          />
        </div>
        {currentData?.cta?.jsonValue?.value?.text && currentData?.cta?.jsonValue?.value?.href && (
          <TextOnlyButton ctaLink={currentData?.cta?.jsonValue} isSticky={isSticky} />
        )}
      </div>
    </>
  );
};

export default TextOnlyHero;
