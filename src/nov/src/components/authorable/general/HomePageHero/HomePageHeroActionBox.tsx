import React, { useRef, useState, useEffect } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Icon from 'components/helpers/Icon/Icon';
import Button from '@/components/helpers/Button/Button';
import { useRouter } from 'next/router';

export type HomePageHeroActionBoxProps = {
  searchPlaceholderText?: {
    value?: string;
  };
  trendingSearchKeywordsList: string[] | undefined;
  trendingText?: {
    value?: string;
  };
  searchPage?: string;
};
const HomePageHeroActionBox = ({
  trendingSearchKeywordsList,
  searchPage,
  trendingText,
  searchPlaceholderText,
}: HomePageHeroActionBoxProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // function replaceSpacesWithPlus(inputString: string) {
  //   return inputString.replace(/ /g, '+');
  // }
  const router = useRouter();

  const [isScrollablePrev, setIsScrollablePrev] = useState<boolean>(false);
  const [isScrollableNext, setIsScrollableNext] = useState<boolean>(true); // Assuming it's initially scrollable

  const handlePrevClick = () => {
    // containerRef.current.scrollLeft = 0; // Set scroll position to 0
    containerRef.current?.scrollTo({ left: 0 });
  };

  const handleNextClick = () => {
    // containerRef.current.scrollLeft += 200; // Adjust scroll distance as needed
    containerRef.current?.scrollBy({ left: 200 });
  };

  const updateSearchUrl = (
    e: React.MouseEvent<HTMLButtonElement>,
    searchUrl: string,
    param: string
  ) => {
    e.preventDefault();
    router.push({ pathname: searchUrl, query: { q: param } });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        setIsScrollablePrev(container.scrollLeft > 0);
        setIsScrollableNext(container.scrollWidth > container.clientWidth + container.scrollLeft);
      };

      container.addEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="md:flex w-full absolute right-0 bottom-0 h-[100px] bg-white lg:w-[816px] ">
      <div
        onClick={() => {
          console.log('Search Popup');
        }}
        className="h-1/2 md:h-full flex items-center justify-center flex-shrink-0 relative after:absolute after:bottom-0 after:left-6 after:right-6 after:border-b after:border-b-gray after:opacity-25 md:after:border-0 md:pr-4"
      >
        <button className="h-[30px] w-[30px] text-xl text-red mx-2.5 basicFocus">
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
          className={`outline-none ${isScrollablePrev && 'active'}`}
          onClick={handlePrevClick}
          disabled={!isScrollablePrev}
        >
          <Icon className="icon-chevron-left" />
        </button>

        <div
          className="w-[calc(100%-108px)] h-full scrollable-content flex overflow-x-auto overflow-y-hidden no-scrollbar ml-[108px] scroll-smooth items-center"
          ref={containerRef}
        >
          <Text
            tag="div"
            className={`${
              isScrollablePrev && 'active'
            } absolute left-14 [&.active]:left-9 text-red font-semibold`}
            field={trendingText}
            editable={true}
            encode={false}
          />

          {Array.isArray(trendingSearchKeywordsList) &&
            trendingSearchKeywordsList.map((Item: string, index: number) => (
              <div key={index} className="px-4 flex-shrink-0">
                <Button
                  auto
                  className="!font-normal !text-base basicFocus"
                  field={{
                    value: {
                      href: searchPage,
                      text: Item,
                    },
                  }}
                  variant="secondary"
                  tabIndex={0}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    updateSearchUrl(e, searchPage as string, Item);
                  }}
                />
              </div>
            ))}
        </div>
        <button
          className={`outline-none ${isScrollableNext && 'active'}`}
          onClick={handleNextClick}
          disabled={!isScrollableNext}
        >
          <Icon className="icon-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default HomePageHeroActionBox;
