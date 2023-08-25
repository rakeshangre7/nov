import React, { useRef, useState } from 'react';

import Button from '@/components/helpers/Button/Button';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import VideoPlayer from '@/components/helpers/VideoPlayer/VideoPlayer';
import Icon from '@/components/helpers/Icon/Icon';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  text: Field<string>;
}

export type HomePageHeroProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const HomePageHero = ({ fields }: HomePageHeroProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  const HeroSlider = fields.data.item.slides.items;
  const trendingSearchKeywords = fields.data.item.trendingSearchKeywords.value.split('\r\n');
  const searchPage = fields.data.searchPage.url.path + `?q=`;

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'custom-slick-dots container absolute bottom-[130px] [&>li]:text-white ',
    customPaging: function (index: number) {
      const title = HeroSlider[index]?.pages?.items[0]?.pageTitle.value;
      return <button className="w-auto relative text-xl ">{title}</button>;
    },
    // dotsClass:
    //   'custom-slick-dots container absolute bottom-[130px] [&>li]:text-white [&>.slick-active>button]:after:scale-x-100 [&>.slick-active>button]:after:duration-6000 [&>.slick-active>button]after:ease-in-out',
    // customPaging: function (index: number) {
    //   const title = HeroSlider[index]?.pages?.items[0]?.pageTitle.value;
    //   return (
    //     <button className="w-auto relative text-xl after:absolute after:inset-x-0 after:bottom-0 after:bg-white after:h-1 after:transform after:scale-x-0 after:transform-origin-left after:origin-left">
    //       {title}
    //     </button>
    //   );
    // },
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollOffset,
        behavior: 'smooth',
      });
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const isPreviousActive = scrollPosition > 0;
  const isNextActive =
    containerRef.current &&
    scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth;

  return (
    <>
      <div className="home-page-hero relative overflow-hidden min-h-screen bg-gray h-auto lg:max-h-[calc(100%-74px)] lg:min-h-0 lg:h-[50vw]">
        <Slider {...settings} className="h-auto min-h-scree">
          {Array.isArray(HeroSlider) &&
            HeroSlider?.map((Item, index: number) => (
              <div key={index} className="B3-home-page-hero__item relative">
                <div
                  className="bg-no-repeat bg-center bg-cover lg:max-h-[calc(100%-74px)] min-h-0 h-screen lg:h-[50vw] items-center flex"
                  style={{
                    backgroundImage: `url(${Item?.image?.src})`,
                  }}
                >
                  {Item.backgroundVideo.value ? (
                    <div className="B3-home-page-hero__item__video w-full h-full absolute">
                      <VideoPlayer
                        autoplay={true}
                        loop={true}
                        muted={true}
                        controls={false}
                        field={{
                          image: {
                            value: Item?.image?.src,
                          },
                          videoid: {
                            value: Item?.backgroundVideo?.value,
                          },
                        }}
                      />
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className="B3-home-page-hero__gradient"></div>
                  <div className="B3-home-page-hero__item__text-block relative z-1 w-full">
                    <div className="container">
                      <Text
                        tag="h1"
                        className="text-white"
                        field={Item?.pages?.items[0]?.pageTitle}
                        editable={false}
                        encode={false}
                      />

                      <RichTextA11yWrapper
                        className="text-white"
                        data-testid="contentblock"
                        field={Item.pages.items[0].subheading}
                        editable
                      />
                      <Button
                        auto
                        className="text-white"
                        field={{
                          value: {
                            href: Item.pages.items[0].url.path,
                            text: Item.pages.items[0].featuredStoryCtaText.value,
                          },
                        }}
                        iconClassName="icon-arrow-right"
                        iconPosition="right"
                        variant="primary"
                        tabIndex={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>

        <div className="md:flex w-full absolute right-0 bottom-0 h-[100px] bg-white lg:w-[816px] ">
          <div
            onClick={() => {
              console.log('Test');
            }}
            className="h-1/2 md:h-full flex justify-center items-center flex-shrink-0 relative after:absolute after:bottom-0 after:left-6 after:right-6 after:border-b after:border-b-gray after:opacity-25 md:after:border-0 md:pr-4"
          >
            <button
              className="h-[30px] w-[30px] text-xl text-red mx-2.5"
              onClick={() => {
                console.log('Test');
              }}
            >
              <Icon className="icon-search" />
            </button>

            <p className="text-base leading-6 text-gray-dark">What can we help you find?</p>
          </div>
          <div className="flex w-full h-1/2 md:h-full relative [&>button]:text-[35px] [&>button]:w-10 [&>button]:h-full [&>button]:text-red items-center overflow-hidden ">
            <button
              className={`${isPreviousActive ? 'active' : ''} left-0`}
              onClick={() => handleScroll(-100)}
            >
              <Icon className="icon-chevron-left" />
            </button>

            <div
              className="w-[calc(100%-108px)] scrollable-content flex overflow-x-auto overflow-y-hidden no-scrollbar ml-[108px]"
              ref={containerRef}
            >
              <div className="absolute left-14 text-red font-semibold">Trending</div>

              {Array.isArray(trendingSearchKeywords) &&
                trendingSearchKeywords.map((category, index) => (
                  <div
                    key={index}
                    className="B3-home-page-hero__action-box__categories__item px-4 flex-shrink-0 "
                  >
                    <Button
                      auto
                      className="!font-normal !text-base"
                      field={{
                        value: {
                          href: searchPage + category.replace(/ /g, '+'),
                          text: category,
                        },
                      }}
                      variant="secondary"
                      tabIndex={0}
                    />
                  </div>
                ))}
            </div>
            <button
              className={`${isNextActive ? 'active' : ''} right-0`}
              onClick={() => handleScroll(100)}
            >
              <Icon className="icon-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<HomePageHeroProps>(HomePageHero);
export default HomePageHero;
