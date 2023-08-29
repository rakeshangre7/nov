// Local
import Button from '@/components/helpers/Button/Button';
import Icon from '@/components/helpers/Icon/Icon';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import { LinkField, Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { MouseEventHandler, useRef } from 'react';
import Slider from 'react-slick';

export type ContentSliderProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: any;
};

interface onClickInterface {
  onClick?: MouseEventHandler;
}
const ContentSlider = ({ fields }: ContentSliderProps): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null);
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  function PrevArrow({ onClick }: onClickInterface) {
    return (
      <Icon
        className={
          'text-4xl absolute bottom-0 right-[58px] smd:left-1/3 h-[54px] w-[58px] smd:h-20 smd:w-20 pl-3 smd:pl-[26px] text-primary bg-gray-darkest icon-chevron-left z-[1] cursor-pointer basicFocus'
        }
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (onClick) {
            onClick(e);
          } else {
            sliderRef?.current?.slickGoTo(fields?.slides?.length - 1);
          }
        }}
      />
    );
  }
  function NextArrow({ onClick }: onClickInterface) {
    return (
      <Icon
        className={
          'text-4xl absolute bottom-0 right-0 smd:left-[calc(33.33%+80px)] h-[54px] w-[58px] smd:h-20 smd:w-20 pl-3 smd:pl-[26px] text-primary bg-gray-darkest icon-chevron-right z-[1] cursor-pointer after:content-[""] after:absolute after:h-full after:w-px after:left-0 after:bg-gray-dark basicFocus'
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
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    className:
      'overflow-hidden relative h-[620px] smd:h-[570px] [&_.slick-dots]:bottom-[100px] [&_.slick-dots]:left-[51px] [&_.slick-dots]:w-fit [&_.slick-dots>li]:w-2 [&_.slick-dots>li]:h-2 [&_.slick-dots>li]:mr-[5px] [&_.slick-active>button]:!bg-white [&_.slick-active>button]:!border-primary',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_current: number, next: number) => {
      if (next === fields?.slides?.length - 1) {
        setTimeout(function () {
          sliderRef?.current?.slickGoTo(0);
        }, 5000);
      }
    },
    customPaging: () => {
      return (
        <button className="cursor-pointer before:!content-none !border-2 !border-white !border-solid !bg-gray-novLight !h-1 !w-1 !smd:h-1.5 !smd:w-1.5 !p-1 smd:!p-[5px] rounded-[50%] basicFocus" />
      );
    },
  };
  return (
    <div className="h-[650px] min-w-[300px] w-full max-w-[1178px] my-[50px] pt-[30px] smd:pt-20 mx-auto">
      <Slider {...settings} ref={sliderRef}>
        {fields?.slides?.map(
          (content: {
            fields: {
              tallImage: any;
              squareImage: any;
              businessSegment: { fields: { businessSegmentName: TextField | undefined } };
              headline: TextField | undefined;
              metric: TextField | undefined;
              quote: TextField | undefined;
              cta: LinkField;
            };
          }) => (
            <div className="w-full h-[620px] smd:h-[570px] relative">
              <div className="absolute w-full smd:w-4/12 h-3/6 smd:h-full pt-4 pb-14 flex flex-col smd:justify-center items-left px-8 left-0 top-2/4 smd:top-0">
                <Text
                  tag="p"
                  field={content?.fields?.businessSegment?.fields?.businessSegmentName}
                  className="font-primary text-2xs my-2 text-gray-dark"
                />
                {content?.fields?.headline && (
                  <Text
                    tag="h2"
                    field={content.fields.headline}
                    className="text-black mb-[0.2em] font-primary font-bold text-2xl leading-32 lg:text-7xl lg:leading-56 tracking-normal"
                  />
                )}
              </div>
              <div className="absolute bg-primary w-[116px] smd:w-4/12 px-[50px] text-white pb-14 smd:pb-0 h-3/6 right-0 bottom-0 smd:top-0 flex flex-col justify-center items-center">
                {content?.fields?.metric && (
                  <Text
                    tag="p"
                    className="font-primary text-7xl leading-52 smd:text-9xl smd:leading-104 font-bold"
                    field={content.fields.metric}
                  />
                )}
                {content?.fields?.quote && (
                  <Text
                    tag="p"
                    className="font-primary min-w-[84px] text-2xs leading-14 smd:text-base smd:leading-24 mt-[9.6px] mb-[13px] smd:mt-[20.8px] smd:mb-5 text-center w-full"
                    field={content.fields.quote}
                  />
                )}
              </div>
              {content?.fields?.tallImage && (
                <ImageWrapper
                  className="absolute hidden smd:block left-1/3 right-1/3 w-4/12 h-full"
                  field={content.fields.tallImage}
                />
              )}
              {content?.fields?.squareImage && (
                <ImageWrapper
                  className="absolute top-0 smd:!top-2/4 max-h-[310px] smd:!left-2/3 smd:!bottom-0 w-full smd:w-4/12 smd:max-w-[33.33%] smd:max-h-3/6 h-3/6"
                  field={content.fields.squareImage}
                  layout="fill"
                />
              )}
              {content?.fields?.cta && (
                <Button
                  field={content.fields.cta}
                  className="bg-primary hover:!no-underline active:!no-underline absolute bottom-0 w-[calc(100%-116px)] smd:w-4/12 h-[54px] smd:h-20 text-white text-2xl leading-32 font-primary font-bold py-6 px-8"
                  variant="button"
                />
              )}
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentSliderProps>(ContentSlider);
export default ContentSlider;
