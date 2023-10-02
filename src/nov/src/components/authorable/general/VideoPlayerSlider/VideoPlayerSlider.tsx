import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icon from '@/components/helpers/Icon/Icon';
import { Placeholder, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import useExperienceEditor from 'lib/use-experience-editor';
interface onClickInterface {
  onClick?: React.MouseEventHandler;
}

interface Fields {
  data?: {
    item?: {
      videoURL?: {
        value?: string;
      };
    };
  };
}

interface VideoPlayerItem {
  uid: string;
  componentName: string;
  dataSource?: string;
  fields: Fields;
}

export type VideoPlayerSliderProps = {
  rendering: ComponentRendering;
  params: { [key: string]: string };
  uid: string;
  componentName: string;
  dataSource?: string;
  placeholders: {
    'video-player-slider': Array<VideoPlayerItem>;
  };
};

const VideoPlayerSlider = (fields: VideoPlayerSliderProps): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null);

  const handleBeforeChange = (oldIndex: number) => {
    const currentVideoPlayer = document.getElementById(`videoPlayer-${oldIndex}`);

    if (currentVideoPlayer) {
      const youtubeVideoPlayer = currentVideoPlayer.querySelector('iframe');
      if (youtubeVideoPlayer) {
        youtubeVideoPlayer.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        );
      }
    }
  };

  const PrevArrow = ({ onClick }: onClickInterface) => (
    <Icon
      className={
        'text-4xl absolute top-2/4 -mt-6 -left-14 xl:-left-40 h-[30px] w-[30px]  text-primary icon-chevron-left z-[1] cursor-pointer basicFocus'
      }
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (onClick) {
          onClick(e);
        } else {
          if (fields?.rendering?.placeholders?.['video-player-slider'].length) {
            sliderRef?.current?.slickGoTo(
              fields?.rendering?.placeholders?.['video-player-slider'].length - 1
            );
          }
        }
      }}
    />
  );

  const NextArrow = ({ onClick }: onClickInterface) => (
    <Icon
      className={
        'text-4xl absolute top-2/4 -mt-6 -right-14 xl:-right-40 h-[30px] w-[30px] text-primary icon-chevron-right z-[1] cursor-pointer  basicFocus'
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

  const sliderSettings = {
    dots: true,
    infinite: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dotsClass:
      'button__bar w-full !flex mt-6 justify-center [&>li>button]:w-3 [&>li>button]:h-3 [&>li>button]:mx-1.5 [&>li>button]:text-[0] [&>li>button]:bg-gray-novLight [&>li>button]:rounded-full [&>li>button]:border-2 [&>li>button]:border-white [&>.slick-active>button]:bg-white [&>.slick-active>button]:border-primary [&>li>button:hover]:bg-white [&>li>button:hover]:border-primary [&>li>button]:outline-0 [&>li>button]:transition [&>li>button]:duration-300 [&>li>button]:ease',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
    beforeChange: handleBeforeChange,
  };

  const isExperienceEditor = useExperienceEditor();

  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="w-full pt-[30px] smd:pt-20 pb-[29px]">
      <div className="mx-auto max-w-[928px] smd:px-11 ">
        {fields.rendering && (
          <>
            {isExperienceEditor ? (
              <Placeholder name="video-player-slider" rendering={fields.rendering} />
            ) : (
              <Placeholder
                name="video-player-slider"
                rendering={fields.rendering}
                render={(components) => (
                  <Slider {...sliderSettings} ref={sliderRef}>
                    {components.map((component, index) => (
                      <div id={`videoPlayer-${index}`} key={index}>
                        {component}
                      </div>
                    ))}
                  </Slider>
                )}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VideoPlayerSlider;
