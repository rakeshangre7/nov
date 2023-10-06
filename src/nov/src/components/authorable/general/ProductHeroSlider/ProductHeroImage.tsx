import React from 'react';
import Slider from 'react-slick';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

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
export type ProductHeroImageProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  uid: string;
  componentName: string;
  dataSource?: string;
  fields: Fields;
};
const ProductHeroImage = ({
  rendering,
  displayMode,
  sliderSettings,
  sliderRef,
}: ProductHeroImageProps): JSX.Element => {
  return (
    <div className="w-full overflow-hidden">
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
export default ProductHeroImage;
