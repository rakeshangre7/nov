// Local
import Icon from '@/components/helpers/Icon/Icon';
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
          'text-4xl absolute bottom-0 left-[33.33%] h-[80px] w-[80px] pl-[26px] text-primary bg-gray-darkest icon-chevron-left z-[1] cursor-pointer'
        }
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (onClick) {
            onClick(e);
          } else {
            sliderRef?.current?.slickGoTo(3);
          }
        }}
      />
    );
  }
  function NextArrow({ onClick }: onClickInterface) {
    return (
      <Icon
        className={
          'text-4xl absolute bottom-0 left-[calc(33.33%+80px)] h-[80px] w-[80px] pl-[26px] text-primary bg-gray-darkest icon-chevron-right z-[1] cursor-pointer'
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
    autoplay: true,
    autoplaySpeed: 5000,
    className:
      'overflow-hidden relative h-[620px] smd:h-[570px] [&_.slick-dots]:bottom-[100px] [&_.slick-dots]:left-[51px] [&_.slick-dots]:w-fit [&_.slick-dots>li]:w-[8px] [&_.slick-dots>li]:h-[8px] [&_.slick-dots>li]:mr-[5px] [&_.slick-active>button]:!bg-white [&_.slick-active>button]:!border-primary',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_current: number, next: number) => {
      if (next === 4 - 1) {
        setTimeout(function () {
          sliderRef?.current?.slickGoTo(0);
        }, 5000);
      }
    },
    customPaging: () => {
      return (
        <button className="cursor-pointer before:!content-none !border-[2px] !border-white !border-solid !bg-gray-novLight !h-[6px] !w-[6px] rounded-[50%]" />
      );
    },
  };
  return (
    <div className="mb-[300px]">
      <div className="h-[650px] min-w-[300px] w-full max-w-[1178px] my-[50px] pt-[30px] smd:pt-[80px] mx-auto">
        <Slider {...settings} ref={sliderRef}>
          <div className="bg-purple w-full h-[620px] smd:h-[570px] relative">
            <div className="absolute w-[33.33%] h-full pt-[16px] pb-[56px] flex flex-col justify-center items-left px-[32px] left-0 top-0">
              <p className="font-primary text-[12px] my-[8px] text-gray-dark">
                Wellbore Technologies
              </p>
              <h2 className="text-black mb-[0.2em]">
                Lorem ipsum dolor sit amet consectetur adipiscing
              </h2>
            </div>
            <div className="absolute bg-primary w-[33.33%] px-[50px] text-white h-[50%] right-0 top-0 flex flex-col justify-center items-center">
              <p className="font-primary text-[104px] leading-[104px] font-bold">50%</p>
              <p className="font-primary text-[16px] leading-[24px] mt-[20.8px] mb-[20px] text-center w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <a
              href="/krushna"
              className="bg-primary hover:!no-underline active:!no-underline absolute bottom-0 w-[33.33%] h-[80px] text-white text-[24px] leading-32 font-primary font-bold py-[24px] px-[32px]"
            >
              Krushna
            </a>
          </div>
          <div className="w-full h-[620px] smd:h-[570px] relative">
            <div className="absolute w-[33.33%] h-full pt-[16px] pb-[56px] flex flex-col justify-center items-left px-[32px] left-0 top-0">
              <p className="font-primary text-[12px] my-[8px] text-gray-dark">
                Wellbore Technologies
              </p>
              <h2 className="text-black mb-[0.2em]">
                Lorem ipsum dolor sit amet consectetur adipiscing
              </h2>
            </div>
            <div className="absolute bg-primary w-[33.33%] px-[50px] text-white h-[50%] right-0 top-0 flex flex-col justify-center items-center">
              <p className="font-primary text-[104px] leading-[104px] font-bold">50%</p>
              <p className="font-primary text-[16px] leading-[24px] mt-[20.8px] mb-[20px] text-center w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <a
              href="/krushna"
              className="bg-primary hover:!no-underline active:!no-underline absolute bottom-0 w-[33.33%] h-[80px] text-white text-[24px] leading-32 font-primary font-bold py-[24px] px-[32px]"
            >
              Krushna
            </a>
          </div>
          <div className="w-full h-[620px] smd:h-[570px] relative">
            <div className="absolute w-[33.33%] h-full pt-[16px] pb-[56px] flex flex-col justify-center items-left px-[32px] left-0 top-0">
              <p className="font-primary text-[12px] my-[8px] text-gray-dark">
                Wellbore Technologies
              </p>
              <h2 className="text-black mb-[0.2em]">
                Lorem ipsum dolor sit amet consectetur adipiscing
              </h2>
            </div>
            <div className="absolute bg-primary w-[33.33%] px-[50px] text-white h-[50%] right-0 top-0 flex flex-col justify-center items-center">
              <p className="font-primary text-[104px] leading-[104px] font-bold">50%</p>
              <p className="font-primary text-[16px] leading-[24px] mt-[20.8px] mb-[20px] text-center w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <a
              href="/krushna"
              className="bg-primary hover:!no-underline active:!no-underline absolute bottom-0 w-[33.33%] h-[80px] text-white text-[24px] leading-32 font-primary font-bold py-[24px] px-[32px]"
            >
              Krushna
            </a>
          </div>
          <div className="w-full h-[620px] smd:h-[570px] relative">
            <div className="absolute w-[33.33%] h-full pt-[16px] pb-[56px] flex flex-col justify-center items-left px-[32px] left-0 top-0">
              <p className="font-primary text-[12px] my-[8px] text-gray-dark">
                Wellbore Technologies
              </p>
              <h2 className="text-black mb-[0.2em]">
                Lorem ipsum dolor sit amet consectetur adipiscing
              </h2>
            </div>
            <div className="absolute bg-primary w-[33.33%] px-[50px] text-white h-[50%] right-0 top-0 flex flex-col justify-center items-center">
              <p className="font-primary text-[104px] leading-[104px] font-bold">50%</p>
              <p className="font-primary text-[16px] leading-[24px] mt-[20.8px] mb-[20px] text-center w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <a
              href="/krushna"
              className="bg-primary hover:!no-underline active:!no-underline absolute bottom-0 w-[33.33%] h-[80px] text-white text-[24px] leading-32 font-primary font-bold py-[24px] px-[32px]"
            >
              Krushna
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentSliderProps>(ContentSlider);
export default ContentSlider;
