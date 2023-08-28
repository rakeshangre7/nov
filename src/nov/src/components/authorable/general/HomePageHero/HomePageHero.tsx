import React, { useRef, useState, useEffect } from 'react';
import { useBreakpoints } from '../../../utility/breakpoints';
import Button from '@/components/helpers/Button/Button';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import VideoPlayer from '@/components/helpers/VideoPlayer/VideoPlayer';
import Icon from '@/components/helpers/Icon/Icon';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  data: {
    item: {
      text: Field<string>;
    };
  };
}

export type HomePageHeroProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const HomePageHero = ({ fields }: HomePageHeroProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  const HeroSlider = fields?.data?.item?.slides?.items;
  const trendingSearchKeywords = fields.data.item.trendingSearchKeywords.value.split('\r\n');
  const searchPage = fields.data.searchPage.url.path + `?q=`;

  const containerRef = useRef(null);
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

  const [currentIndex, setCurrentIndex] = useState(null); // Initially no item is active

  const goToItem = (index: number) => {
    setCurrentIndex(index);
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroSlider.length);
  };

  useEffect(() => {
    // Set the initial active index after the page has loaded
    setCurrentIndex(0);

    // Automatically go to the next item every 3 seconds
    const interval = setInterval(nextItem, 6000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only after initial render
  const { isMobile, isHeightSm } = useBreakpoints();

  return (
    <>
      <div className="home-page-hero relative overflow-hidden min-h-screen bg-gray h-auto">
        <div className="B3-home-page-hero-inner">
          {Array.isArray(HeroSlider) &&
            HeroSlider?.map((Item, index: number) => (
              <>
                {index === currentIndex && (
                  <div
                    key={index}
                    className="bg-no-repeat bg-center bg-cover lg:max-h-[calc(100%-74px)] min-h-0 h-screen lg:h-[50vw] items-center flex"
                    style={{
                      backgroundImage: `url(${Item?.image?.src})`,
                    }}
                  >
                    {Item.backgroundVideo.value && (
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
                          className="text-white mt-[18px]"
                          data-testid="contentblock"
                          field={Item.pages.items[0].subheading}
                          editable
                        />
                        <Button
                          auto
                          className="text-white mt-[26px]"
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
                )}
              </>
            ))}
        </div>
        {!isMobile && !isHeightSm && HeroSlider.length > 1 && (
          <div className="B3-home-page-hero__timers w-full absolute bottom-32 ">
            <div className="container flex justify-between text-left [&>.active]:after:animate-progress">
              {Array.isArray(HeroSlider) &&
                HeroSlider?.map((Item, index: number) => (
                  <button
                    key={index}
                    className={`${
                      index === currentIndex ? 'active' : ''
                    } text-white text-left text-sm w-1/4 h-full relative before:content before:absolute before:w-full before:bottom-0 before:left-0  before:border-b-[2px] before:border-solid before:border-gray 
                  after:content after:absolute after:w-0 after:bottom-0 after:left-0  after:border-b-[2px] after:border-solid after:border-red after:transition-width after:!duration-6000 after:ease-linear
                  `}
                    onClick={() => goToItem(index)}
                  >
                    <span>0{index + 1}</span>
                    <Text
                      field={Item?.pages?.items[0]?.pageTitle}
                      editable={false}
                      encode={false}
                    />
                  </button>
                ))}
            </div>
          </div>
        )}
        <div className="md:flex w-full absolute right-0 bottom-0 h-[100px] bg-white lg:w-[816px] ">
          <div
            onClick={() => {
              console.log('Test');
            }}
            className="h-1/2 md:h-full flex items-center flex-shrink-0 relative after:absolute after:bottom-0 after:left-6 after:right-6 after:border-b after:border-b-gray after:opacity-25 md:after:border-0 md:pr-4"
          >
            <button
              className="h-[30px] w-[30px] text-xl text-red mx-2.5"
              onClick={() => {
                console.log('Test');
              }}
            >
              <Icon className="icon-search" />
            </button>
            <Text
              className="text-base leading-6 text-gray-dark"
              field={fields?.data?.item.searchPlaceholderText}
              editable={false}
              encode={false}
            />
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
