import React, { useRef, useState } from 'react';
import Button from '@/components/helpers/Button/Button';
import { Item, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Icon from '@/components/helpers/Icon/Icon';

export type HomePageHeroActionBoxProps = {
  searchPlaceholderText: {
    value: string;
  };
  trendingSearchKeywords: {
    value: Item[] | string;
  };
  // searchPage: {
  //   url: {
  //     path?: string;
  //     url?: string;
  //   };
  // };
  searchPage: string;
  isPreviousActive: boolean;
};
const HomePageHeroActionBox = ({
  searchPlaceholderText,
  trendingSearchKeywords,
  searchPage,
}: HomePageHeroActionBoxProps) => {
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
  console.log(typeof searchPage, 'searchPage1');
  const isPreviousActive = scrollPosition > 0;

  const isNextActive =
    containerRef.current &&
    scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth;
  return (
    <div className="md:flex w-full absolute right-0 bottom-0 h-[100px] bg-white lg:w-[816px] ">
      <div
        onClick={() => {
          console.log('Test');
        }}
        className="h-1/2 md:h-full flex items-center justify-center flex-shrink-0 relative after:absolute after:bottom-0 after:left-6 after:right-6 after:border-b after:border-b-gray after:opacity-25 md:after:border-0 md:pr-4"
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
          field={searchPlaceholderText}
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
          <div
            className={`${isPreviousActive && 'active'} absolute left-14 text-red font-semibold`}
          >
            Trending
          </div>

          {Array.isArray(trendingSearchKeywords) &&
            trendingSearchKeywords.map((category, index) => (
              <div key={index} className="px-4 flex-shrink-0 ">
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
  );
};

export default HomePageHeroActionBox;
