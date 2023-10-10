import React from 'react';
import Slider from 'react-slick';
import { ComponentRendering, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

interface Fields {
  data?: {
    item?: {
      videoURL?: {
        value?: string;
      };
    };
  };
}
type SliderSettings = {
  dots: boolean;
  infinite: boolean;
  arrows: boolean;
  nextArrow: React.ReactElement;
  prevArrow: React.ReactElement;
  autoplay: boolean;
  autoplaySpeed: number;
  speed: number;
  beforeChange: (current: number, next: number) => void;
  slidesToShow: number;
  slidesToScroll: number;
  dotsClass: string;
};
export type ProductHeroFullProps = {
  // rendering: { componentName: string };
  rendering: ComponentRendering;
  params?: { [key: string]: string };
  uid?: string;
  componentName?: string;
  dataSource?: string;
  fields?: Fields;
  displayMode: string;
  sliderSettings?: SliderSettings;
  sliderRef?: React.Ref<Slider>;
};
const ProductHeroFull = ({
  rendering,
  displayMode,
  sliderSettings,
  sliderRef,
}: ProductHeroFullProps): JSX.Element => {
  return (
    <div className="w-full absolute top-0 left-0 h-full z-0 [&_div]:h-full">
      <Placeholder
        name="product-hero"
        rendering={rendering}
        displayMode={displayMode}
        render={(components) => (
          <Slider {...sliderSettings} ref={sliderRef}>
            {components}
          </Slider>
        )}
      />
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<VideoPlayerSlideProps>(VideoPlayerSlide);
export default ProductHeroFull;
