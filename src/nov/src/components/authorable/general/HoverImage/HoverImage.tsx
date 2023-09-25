import Icon from '@/components/helpers/Icon/Icon';
import HoverImageCard from './HoverImageCard';
import Slider from 'react-slick';
import { MouseEventHandler, useRef } from 'react';
import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import SearchResults from 'components/authorable/search/SearchResult/SearchResults';
interface onClickInterface {
  onClick?: MouseEventHandler;
}
export interface HoverImage {
  headLine: Field<string>;
  body: Field<string>;
  image: ImageField;
  imageCropRegion: Field<string>;
  cta: LinkField;
}
interface Fields {
  hoverImages: HoverImage[];
}
export type HoverImageProps = {
  rendering?: { componentName: string };
  params?: { [key: string]: string };
  fields: Fields;
};

const HoverImage = ({ fields }: HoverImageProps): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null);

  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  function SamplePrevArrow({ onClick }: onClickInterface) {
    return (
      <Icon
        className={
          'text-4xl absolute top-[calc(50%-15px)] text-white icon-chevron-left z-[1] !left-0 cursor-pointer'
        }
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (onClick) {
            onClick(e);
          } else {
            sliderRef?.current?.slickGoTo(fields?.hoverImages?.length - 1);
          }
        }}
      />
    );
  }
  function SampleNextArrow({ onClick }: onClickInterface) {
    return (
      <Icon
        className={
          'text-4xl absolute top-[calc(50%-15px)] text-white icon-chevron-right z-[1] !right-0 cursor-pointer'
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
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: 'overflow-hidden relative',
    beforeChange: (_current: number, next: number) => {
      if (next === fields?.hoverImages?.length - 1) {
        setTimeout(function () {
          sliderRef?.current?.slickGoTo(0);
        }, 5000);
      }
    },
  };
  return (
    <>
      {fields?.hoverImages?.length > 0 && (
        <div className="h-[300px] sm:h-[360px] smd:h-[600px] min-w-[300px] w-full max-w-[1178px] my-[50px] pt-[30px] smd:pt-20 mx-auto">
          <div className="hidden w-full h-full md:flex">
            {fields?.hoverImages?.map((imageObject: HoverImage, index: number) => {
              return <HoverImageCard imageObject={imageObject} key={index} />;
            })}
          </div>
          <div className="md:hidden w-full h-full">
            <Slider {...settings} ref={sliderRef}>
              {fields?.hoverImages?.map((imageObject: HoverImage, index: number) => {
                return <HoverImageCard imageObject={imageObject} key={index} />;
              })}
            </Slider>
          </div>
        </div>
      )}
      <SearchResults />
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<HoverImageProps>(HoverImage);
export default HoverImage;
