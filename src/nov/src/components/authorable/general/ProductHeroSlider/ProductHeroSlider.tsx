import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';

import { ComponentRendering, LinkField, Text, Item } from '@sitecore-jss/sitecore-jss-nextjs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icon from '@/components/helpers/Icon/Icon';
// import Button from '@/components/helpers/Button/Button';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
// Local
import TextOnlyButton from '@/components/authorable/general/TextOnlyHero/TextOnlyButton';
import ProductHeroFull from './ProductHeroFull';
import ProductHeroImage from './ProductHeroImage';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface onClickInterface {
  onClick?: MouseEventHandler;
}

interface heroData {
  contentTag?: {
    jsonValue?: {
      id?: string;
      url?: string;
      name?: string;
      displayName?: string;
      fields?: {
        tag?: {
          value?: string;
        };
      };
    } | null;
  };
  cardCtaText?: {
    jsonValue?: {
      value?: string;
    };
  };
  heading?: {
    jsonValue?: {
      value?: string;
    };
  };
  image?: {
    jsonValue?: {
      value?: {
        height?: string;
        width?: string;
        src?: string;
        alt?: string;
      };
    };
  };
  backgroundVideo?: {
    jsonValue?: {
      value?: string;
    };
  };
  subheading?: {
    jsonValue?: {
      value?: string;
    };
  };
  cta?: {
    jsonValue?: LinkField | undefined;
  };
}
interface ProductHeroSliderItem {
  rendering?: { componentName: string };
  params?: {
    [key: string]: string;
    addGradient: string;
    textColor: string;
  };
  uid?: string;
  componentName?: string;
  dataSource?: string;
  fields?: {
    data?: {
      datasource?: heroData | null;
      contextItem?: heroData;
    };
  };
}
export type ProductHeroSliderProps = {
  rendering: ComponentRendering;
  params: {
    [key: string]: string;
    addGradient: string;
    textColor: string;
    enableAutoplay: string;
    waitTime: string;
  };
  uid: string;
  componentName: string;
  dataSource?: string;
  placeholders?: {
    'product-hero'?: Array<ProductHeroSliderItem>;
  };
  fields?: {
    placeholders?: {
      'product-hero'?: Array<ProductHeroSliderItem>;
    };
    data?: {
      datasource?: heroData | null;
      contextItem?: heroData;
    };
  };
};

const ProductHeroSlider = ({ fields, rendering, params }: ProductHeroSliderProps): JSX.Element => {
  //   // Fail out if fields aren't present
  const useDataSource = fields?.data?.datasource != null;
  const heroData = useDataSource ? fields?.data?.datasource : fields?.data?.contextItem;
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const currentHeightRef = useRef<HTMLDivElement | null>(null);
  const [wrapperHeight, setWrapperHeight] = useState<number>(0);
  const [textColor, setTextColor] = useState<string>('#ffffff');
  const [sliderIndex, setSliderIndex] = useState(0);

  // function to handle scroll and cta behaviour
  const handleScroll = () => {
    const footer = document.getElementById('footer');
    const scrollY = window?.scrollY;
    let footerOffsetTop = 0;

    if (footer) {
      footerOffsetTop = document.body.offsetHeight - footer.offsetHeight;
    }

    const windowHeight = window.innerHeight;
    if (footerOffsetTop && footerOffsetTop < scrollY + windowHeight) {
      setIsSticky(false);
    } else if (scrollY > wrapperHeight - 65 && scrollY < footerOffsetTop - 104) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // function to calculate height
  const calHeight = () => {
    setWrapperHeight((currentHeightRef?.current as HTMLDivElement).getBoundingClientRect().height);
  };

  // useEffect to calculate height of the component
  useEffect(() => {
    currentHeightRef.current && calHeight();
    window.addEventListener('resize', calHeight);

    return () => {
      window.removeEventListener('scroll', calHeight);
    };
  }, []);

  // useEffect to attach scroll event to the component
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [calHeight]);
  useEffect(() => {
    setTextColor(
      params?.textColor?.split('-')?.[1] ? `#${params?.textColor?.split('-')?.[1]}` : '#ffffff'
    );
  }, []);

  const sliderRef = useRef<Slider | null>(null);

  function PrevArrow({ onClick }: onClickInterface) {
    const handlePrevClick = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      e.preventDefault();
      if (onClick) {
        onClick(e);
      } else {
        if (sliderRef?.current) {
          sliderRef.current.slickPrev();
        }
      }
    };

    return (
      <Icon
        className="text-[52px] absolute top-1/2 -translate-y-1/2 left-0 smd:left-2 lg:left-8 h-[50px] w-[50px] text-white icon-chevron-left z-[1] cursor-pointer basicFocus"
        onClick={handlePrevClick}
        style={{ color: textColor }}
      />
    );
  }

  function NextArrow({ onClick }: onClickInterface) {
    const handleNextClick = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      e.preventDefault();
      if (onClick) {
        onClick(e);
      } else {
        if (sliderRef?.current) {
          sliderRef.current.slickNext();
        }
      }
    };

    return (
      <Icon
        className="text-[52px] absolute top-1/2 -translate-y-1/2 right-0 smd:right-2 lg:right-8 h-[50px] w-[50px] text-white icon-chevron-right z-[1] cursor-pointer basicFocus"
        onClick={handleNextClick}
        style={{ color: textColor }}
      />
    );
  }
  const CustomDots = ({
    slides,
    activeSlide,
    onClick,
  }: {
    slides: ProductHeroSliderItem[];
    activeSlide: number;
    onClick: (index: number) => onClickInterface;
  }) => {
    if (!slides || slides.length === 0) {
      return null;
    }

    return (
      <ul className="flex space-x-2 button__bar z-[1] container w-full !flex absolute left-1/2 -translate-x-1/2 bottom-6 justify-center lg:justify-start [&>li>button]:w-3 [&>li>button]:h-3 [&>li>button]:mx-1.5 [&>li>button]:text-[0] [&>li>button]:bg-gray-novLight [&>li>button]:rounded-full [&>li>button]:border-2 [&>li>button]:border-white [&>.slick-active>button]:bg-white [&>.slick-active>button]:border-primary [&>li>button:hover]:bg-white [&>li>button:hover]:border-primary [&>li>button]:outline-0 [&>li>button]:transition [&>li>button]:duration-300 [&>li>button]:ease">
        {slides.map((slide, index) => (
          <li key={index}>
            <button
              className={`w-4 h-4 rounded-full bg-gray-novLight border-2 border-white ${
                index === activeSlide ? 'bg-white border-primary' : ''
              }`}
              onClick={() => onClick(index)}
            />
          </li>
        ))}
      </ul>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: params?.displayMode === 'full size' && true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: params?.enableAutoplay === 'true',
    autoplaySpeed: 50000,
    speed: 300,
    beforeChange: (current, next) => setSliderIndex(next),
    slidesToShow: 1,
    slidesToScroll: 1,

    dotsClass:
      'button__bar z-[1] container w-full !flex absolute left-1/2 -translate-x-1/2 bottom-6 justify-center lg:justify-start [&>li>button]:w-3 [&>li>button]:h-3 [&>li>button]:mx-1.5 [&>li>button]:text-[0] [&>li>button]:bg-gray-novLight [&>li>button]:rounded-full [&>li>button]:border-2 [&>li>button]:border-white [&>.slick-active>button]:bg-white [&>.slick-active>button]:border-primary [&>li>button:hover]:bg-white [&>li>button:hover]:border-primary [&>li>button]:outline-0 [&>li>button]:transition [&>li>button]:duration-300 [&>li>button]:ease',
  };

  useEffect(() => {
    setTextColor(
      params?.textColor?.split('-')?.[1] ? `#${params?.textColor?.split('-')?.[1]}` : '#000'
    );
  }, []);

  const displayMode = params?.displayMode;
  const displayModeFull = displayMode === 'full size';
  const displayModeImage = displayMode === 'product image';
  // const hasStaticText = false;
  // const perantGradient = params?.addGradient == '1';

  // const heroData = fields?.data?.datasource;
  if (fields === null || fields === undefined) return <></>;
  return (
    <div
      className={`w-full flex flex-column items-center relative py-[100px] ${
        displayModeFull ? 'min-h-screen' : 'min-h-[720px]'
      }`}
      ref={currentHeightRef}
    >
      {displayModeImage && (
        <>
          <NextArrow />
          <CustomDots
            slides={rendering.placeholders['product-hero'] || []}
            activeSlide={sliderIndex}
            onClick={(index) => sliderRef.current?.slickGoTo(index)}
          />
          <PrevArrow />
        </>
      )}
      <div
        className="container px-[40px] sm:px-[62px] l:px-[25px] z-[1] relative"
        style={{ color: textColor }}
      >
        {heroData?.contentTag?.jsonValue?.fields?.tag?.value && (
          <Text
            tag="div"
            className="text-base font-bold leading-none pl-[5px] mb-4"
            field={heroData?.contentTag?.jsonValue?.fields?.tag}
          />
        )}
        {heroData?.heading?.jsonValue?.value && (
          <Text
            tag="h1"
            className="text-7xl leading-56 smd:text-[72px] smd:leading-[72px] lg:text-8xl lg:leading-80"
            field={heroData?.heading?.jsonValue}
          />
        )}
        <div className="B6-product-hero__inner flex flex-row w-full">
          {heroData?.subheading?.jsonValue?.value && (
            <div className={`${displayModeImage && 'w-[448px]'}`}>
              <RichTextA11yWrapper
                className="min-w-[640px] mt-[37px] text-lg leading-28 [&>p]:text-lg [&>p]:leading-28 [&>p]:mb-5"
                data-testid="contentblock"
                field={heroData?.subheading?.jsonValue}
                editable
              />
            </div>
          )}

          {displayModeImage && (
            <ProductHeroImage
              rendering={rendering}
              displayMode={displayMode}
              sliderSettings={sliderSettings}
              sliderRef={sliderRef}
            />
          )}
        </div>
      </div>

      {displayModeFull && (
        <ProductHeroFull
          rendering={rendering}
          displayMode={displayMode}
          sliderSettings={sliderSettings}
          sliderRef={sliderRef}
        />
      )}

      {heroData?.cta?.jsonValue?.value?.text && heroData?.cta?.jsonValue?.value?.href && (
        <TextOnlyButton ctaLink={heroData?.cta?.jsonValue} isSticky={isSticky} />
      )}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ProductHeroSliderProps>(ProductHeroSlider);
export default ProductHeroSlider;
