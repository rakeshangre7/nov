import React, { MouseEventHandler, useRef } from 'react';

import {
  Placeholder,
  ComponentRendering,
  // PlaceholdersData,
  // ComponentFields,
  // ComponentParams,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icon from '@/components/helpers/Icon/Icon';
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
  };
}
interface VideoPlayerItem {
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
    'hero-slide': Array<VideoPlayerItem>;
  };
};

const HeroSlider = (fields: HeroSliderProps): JSX.Element => {
  // Fail out if fields aren't present
  const sliderRef = useRef<Slider | null>(null);
  function PrevArrow({ onClick }: onClickInterface) {
    return (
      <Icon
        className={
          'text-4xl absolute top-2/4 -mt-6 left-7 h-[30px] w-[30px]  text-primary icon-chevron-left z-[1] cursor-pointer basicFocus'
        }
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (onClick) {
            onClick(e);
          } else {
            if (fields?.rendering?.placeholders?.['hero-slide'].length) {
              sliderRef?.current?.slickGoTo(
                fields?.rendering?.placeholders?.['hero-slide'].length - 1
              );
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
          'text-4xl absolute top-2/4 -mt-6 right-7 h-[30px] w-[30px] text-primary icon-chevron-right z-[1] cursor-pointer  basicFocus'
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
    infinite: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dotsClass:
      'button__bar w-full !flex mt-6 justify-center [&>li>button]:w-3 [&>li>button]:h-3 [&>li>button]:mx-1.5 [&>li>button]:text-[0] [&>li>button]:bg-gray-novLight [&>li>button]:rounded-full [&>li>button]:border-2 [&>li>button]:border-white [&>.slick-active>button]:bg-white [&>.slick-active>button]:border-primary [&>li>button:hover]:bg-white [&>li>button:hover]:border-primary [&>li>button]:outline-0 [&>li>button]:transition [&>li>button]:duration-300 [&>li>button]:ease',
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       arrows: false,
    //     },
    //   },
    // ],
  };

  if (fields === null || fields === undefined) return <></>;
  return (
    <div className="w-full ">
      {fields.rendering && (
        <>
          {/* <Placeholder name="hero-slide" rendering={fields.rendering} /> */}
          <Placeholder
            name="hero-slide"
            rendering={fields.rendering}
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
