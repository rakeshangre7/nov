import React, { MouseEventHandler, useRef } from 'react';

import {
  Placeholder,
  ComponentRendering,
  LinkField,
  Field,
  Text,

  // PlaceholdersData,
  // ComponentFields,
  // ComponentParams,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icon from '@/components/helpers/Icon/Icon';
import Button from '@/components/helpers/Button/Button';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
// Local

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface onClickInterface {
  onClick?: MouseEventHandler;
}
interface Fields {
  data?: {
    item?: {
      videoURL?: {
        value?: string;
      };
    };
    datasource?: {
      contactLink?: {
        jsonValue?: LinkField;
      };
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
        };
      };
      staticHeading?: {
        jsonValue?: {
          value?: string;
        };
      };
      staticSubheading?: {
        jsonValue?: {
          value?: string;
        };
      };
    };
  };
}
interface HeroSliderItem {
  uid: string;
  componentName: string;
  dataSource?: string;
  fields: Fields;
}
export type HeroSliderProps = {
  rendering: ComponentRendering;
  params: { [key: string]: string };
  uid: string;
  componentName: string;
  dataSource?: string;
  placeholders: {
    'hero-slide': Array<HeroSliderItem>;
  };
  fields: {
    placeholders: {
      'hero-slide': Array<HeroSliderItem>;
    };
    data: {
      datasource: {
        contactLink: {
          jsonValue: LinkField;
        };
        contentTag: {
          jsonValue: {
            fields: {
              tag: Field<string>;
            };
          };
        };
      };
    };
  };
};

const HeroSlider = ({ fields, rendering, params }: HeroSliderProps): JSX.Element => {
  // Fail out if fields aren't present
  const sliderRef = useRef<Slider | null>(null);
  function PrevArrow({ onClick }: onClickInterface) {
    return (
      <Icon
        className={
          'text-[52px] absolute top-1/2 -translate-y-1/2 left-8 h-[50px] w-[50px]  text-primary icon-chevron-left z-[1] cursor-pointer basicFocus'
        }
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (onClick) {
            onClick(e);
          } else {
            if (fields?.placeholders?.['hero-slide'].length) {
              sliderRef?.current?.slickGoTo(fields?.placeholders?.['hero-slide'].length - 1);
            }
          }
        }}
      />
    );
  }
  function NextArrow({ onClick }: onClickInterface) {
    return (
      <Icon
        className={
          'text-[52px] absolute top-1/2 -translate-y-1/2 right-8 h-[50px] w-[50px] text-primary icon-chevron-right z-[1] cursor-pointer  basicFocus'
        }
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (onClick) {
            onClick(e);
          } else {
            sliderRef?.current?.slickGoTo(0);
          }
        }}
      />
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: params?.enableAutoplay,
    autoplaySpeed: +params?.waitTime || 5000,
    speed: 300,

    slidesToShow: 1,
    slidesToScroll: 1,

    dotsClass:
      'button__bar container w-full !flex absolute left-1/2 -translate-x-1/2 bottom-6 justify-start	 [&>li>button]:w-3 [&>li>button]:h-3 [&>li>button]:mx-1.5 [&>li>button]:text-[0] [&>li>button]:bg-gray-novLight [&>li>button]:rounded-full [&>li>button]:border-2 [&>li>button]:border-white [&>.slick-active>button]:bg-white [&>.slick-active>button]:border-primary [&>li>button:hover]:bg-white [&>li>button:hover]:border-primary [&>li>button]:outline-0 [&>li>button]:transition [&>li>button]:duration-300 [&>li>button]:ease',
  };
  // const hasStaticText =
  //   fields?.data?.datasource?.staticHeading?.jsonValue.value === '' ||
  //   fields?.data?.datasource === null;
  const hasStaticText = true;
  const heroData = fields.data.datasource;
  if (fields === null || fields === undefined) return <></>;
  return (
    <div className="w-full ">
      <div className="container  max-h-[calc(100vh-200px)] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-[1] ">
        {heroData?.contentTag?.jsonValue?.fields?.tag?.value && (
          <Text
            tag="div"
            className="text-base font-bold leading-none pl-[5px] mb-4"
            field={heroData?.contentTag?.jsonValue?.fields?.tag}
          />
        )}
        {heroData?.staticHeading?.jsonValue?.value && (
          <Text
            tag="h1"
            className="text-7xl leading-56 smd:text-[72px] smd:leading-[72px] lg:text-8xl lg:leading-80"
            field={heroData?.staticHeading?.jsonValue}
          />
        )}
        {heroData?.staticSubheading?.jsonValue?.value && (
          <RichTextA11yWrapper
            className="max-w-[640px] mt-[37px] text-lg leading-28 [&>p]:text-lg [&>p]:leading-28 [&>p]:mb-5"
            data-testid="contentblock"
            field={heroData?.staticSubheading?.jsonValue}
            editable
          />
        )}
        {heroData?.contactLink?.jsonValue?.value &&
          heroData?.contactLink?.jsonValue?.value.href && (
            <Button
              auto
              className={clsx('text-white mt-[6px] font-semibold', {
                '!text-black': params?.textColor === 'black',
              })}
              field={heroData?.contactLink?.jsonValue}
              variant="primary"
              tabIndex={0}
            />
          )}
      </div>
      {rendering && (
        <>
          {/* <Placeholder name="hero-slide" rendering={fields.rendering} /> */}

          <Placeholder
            name="hero-slide"
            rendering={rendering}
            hasStaticText={hasStaticText}
            render={(components) => (
              <Slider {...sliderSettings} ref={sliderRef}>
                {components}
              </Slider>
            )}
          />
        </>
      )}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<HeroSliderProps>(HeroSlider);
export default HeroSlider;
