import React, { useRef, useState } from 'react';

import Button from '@/components/helpers/Button/Button';
import { Field, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
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
  const searchPage = '/Search?q=';
  // fields.data.searchPage.url.path;
  // .split('\r\n'); // Split the categories

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dotsClass: 'button__bar [&>li]:bg-red',
    customPaging: function (index: number) {
      const title = HeroSlider[index]?.pages?.items[0]?.pageTitle.value;
      return <button className="w-auto text-xl">{title}</button>;
    },
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
      <div className="relative overflow-hidden min-h-screen bg-gray h-auto lg:max-h-[calc(100%-74px)] lg:min-h-0 lg:h-[50vw]">
        <Slider {...settings} className="h-auto min-h-scree">
          {Array.isArray(HeroSlider) &&
            HeroSlider?.map((Item, index: number) => (
              <div key={index} className="B3-home-page-hero__item relative">
                <div
                  style={{
                    backgroundImage: `url(${Item.image.src})`,
                  }}
                ></div>
                {/*  */}
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
                  <Image field={Item.image} />
                )}

                <div className="B3-home-page-hero__gradient"></div>
                <div className="container B3-home-page-hero__item__text-block">
                  <Text
                    tag="h1"
                    field={Item?.pages?.items[0]?.pageTitle}
                    editable={false}
                    encode={false}
                  />

                  <RichTextA11yWrapper
                    data-testid="contentblock"
                    field={Item.pages.items[0].subheading}
                    editable
                  />
                  <Button
                    auto
                    className=""
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
            ))}
        </Slider>

        <div className="B3-home-page-hero__action-box flex w-full absolute right-0 bottom-0 h-[100px] bg-white lg:w-[816px]">
          <div className="B3-home-page-hero__action-box__search js-open-search flex flex-shrink-0">
            <button
              onClick={() => {
                console.log('Test');
              }}
            >
              <Icon className="icon-search" />
            </button>

            <p>What can we help you find?</p>
          </div>
          <div className="B3-home-page-hero__action-box__categories flex w-full relative [&>button]:text-4xl [&>button]:w-10 [&>button]:h-full [&>button]:text-red  pr-10 pl-28 items-center overflow-hidden">
            <button
              className={`${isPreviousActive ? 'active' : ''} left-0`}
              onClick={() => handleScroll(-100)}
            >
              <Icon className="icon-chevron-left" />
            </button>

            <div
              className="B3-home-page-hero__action-box__categories__container js-categories-container w-full scrollable-content flex overflow-x-auto overflow-y-hidden"
              ref={containerRef}
            >
              <div className="B3-home-page-hero__action-box__categories__item  absolute left-0">
                Trending
              </div>

              {trendingSearchKeywords.map((category, index) => (
                <div
                  key={index}
                  className="B3-home-page-hero__action-box__categories__item px-4 flex-shrink-0"
                >
                  <Button
                    auto
                    className="font-normal"
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
