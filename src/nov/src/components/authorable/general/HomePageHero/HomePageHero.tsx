import React, { useState, useEffect } from 'react';
import { useBreakpoints } from '../../../utility/breakpoints';
import Button from '@/components/helpers/Button/Button';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Mp4VideoPlayer from '@/components/helpers/Mp4VideoPlayer/Mp4VideoPlayer';
import HomePageHeroActionBox from './HomePageHeroActionBox';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

interface HeroSliderItem {
  pageTitle?: {
    value?: string;
  };
  subheading?: {
    value?: string;
  };
  featuredStoryCtaText?: {
    value?: string;
  };
  url: {
    path?: string;
    url?: string;
  };
}
interface HeroSlider {
  addGradient?: {
    value?: string | number | null;
  };
  image: {
    height: number | string;
    width: number | string;
    src: string;
    alt: string;
  };
  imageCropRegion?: {
    value?: string;
  };
  backgroundVideo?: {
    value?: string;
  };
  pages?: {
    items: Array<HeroSliderItem>;
  };
}
interface Fields {
  data: {
    item: {
      slides: {
        items: Array<HeroSlider>;
      };
      trendingSearchKeywords?: {
        value?: string;
      };
      searchPlaceholderText?: {
        value?: string;
      };
      trendingText?: {
        value?: string;
      };
    };
    searchPage?: {
      url?: {
        path?: string;
        url?: string;
      };
    };
  };
}

export type HomePageHeroProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  uid: string;
  componentName: string;
  dataSource?: string;
  fields: Fields;
};

const HomePageHero = ({ fields }: HomePageHeroProps): JSX.Element => {
  // Fail out if fields aren't present
  const { isMobile, isHeightSm } = useBreakpoints();
  const [currentIndex, setCurrentIndex] = useState<number | null | boolean>(null); // Initially no item is active

  const HeroSlider = fields?.data?.item?.slides?.items;
  const trendingSearchKeywords = fields?.data?.item?.trendingSearchKeywords?.value;
  const trendingSearchKeywordsList = trendingSearchKeywords?.split('\r\n');
  const searchPage = fields?.data?.searchPage?.url?.path + `?q=`;
  const goToItem = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const nextItem = () => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % HeroSlider.length);
    };
    // Set the initial active index after the page has loaded
    setCurrentIndex(0);

    // Automatically go to the next item every 6 seconds
    const interval = setInterval(nextItem, 6000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [HeroSlider.length]); // Empty dependency array ensures the effect runs only after initial render

  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      <div className="home-page-hero relative overflow-hidden min-h-screen bg-gray h-auto">
        <div className="relative flex flex-row justify-center h-auto min-h-screen">
          {Array.isArray(HeroSlider) &&
            HeroSlider?.map((Item: HeroSlider, index: number) => (
              <>
                {index === currentIndex && (
                  <div
                    key={index}
                    className="bg-no-repeat bg-center bg-cover relative items-center flex justify-center w-full min-h-0 h-screen"
                    style={{
                      backgroundImage: `url(${Item?.image?.src})`,
                    }}
                  >
                    {Item?.backgroundVideo?.value && (
                      <div className="w-full h-full absolute ">
                        <Mp4VideoPlayer
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
                    {Item?.addGradient?.value == '1' && (
                      <div className="B3-home-page-hero__gradient absolute w-full h-full z-1 before:content after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-[#282828] after:to-[#51515100] opacity-40"></div>
                    )}
                    <div className="relative z-1 w-full">
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
                          field={Item?.pages?.items[0]?.subheading}
                          editable
                        />
                        {Item?.pages?.items[0]?.featuredStoryCtaText?.value &&
                          Item?.pages?.items[0]?.url?.path && (
                            <Button
                              auto
                              className="text-white mt-[26px]"
                              field={{
                                value: {
                                  href: Item?.pages?.items[0]?.url?.path,
                                  text: Item?.pages?.items[0]?.featuredStoryCtaText?.value,
                                },
                              }}
                              variant="primary"
                              tabIndex={0}
                            />
                          )}
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
        </div>
        {!isMobile && !isHeightSm && HeroSlider.length > 1 && (
          <div className="w-full absolute bottom-32 ">
            <div className="container flex flex-row justify-between text-left [&>.active]:after:animate-progress">
              {Array.isArray(HeroSlider) &&
                HeroSlider?.map((Item: HeroSlider, index: number) => (
                  <button
                    key={index}
                    className={`${
                      index === currentIndex && 'active'
                    } text-white text-left text-sm w-1/4 h-auto relative before:content before:absolute before:w-full before:bottom-0 before:left-0  before:border-b-[2px] before:border-solid before:border-gray 
                  after:content after:absolute after:w-0 after:bottom-0 after:left-0 pb-[18px] after:border-b-[2px] after:border-solid after:border-red after:transition-width after:!duration-6000 after:ease-linear
                  `}
                    onClick={() => goToItem(index)}
                  >
                    <span className="font-bold mr-3">0{index + 1}</span>
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
        <HomePageHeroActionBox
          searchPage={searchPage}
          trendingSearchKeywordsList={trendingSearchKeywordsList}
          trendingText={fields?.data?.item?.trendingText}
          searchPlaceholderText={fields?.data?.item?.searchPlaceholderText}
        />
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<HomePageHeroProps>(HomePageHero);
export default HomePageHero;
