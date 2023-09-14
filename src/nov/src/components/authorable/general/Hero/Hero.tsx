import { LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import clsx from 'clsx';

// Local
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Button from '@/components/helpers/Button/Button';
import Mp4VideoPlayer from '@/components/helpers/Mp4VideoPlayer/Mp4VideoPlayer';
interface heroData {
  contentTag?: {
    jsonValue?: {
      id?: string;
      url?: string;
      name?: string;
      displayName?: string;
      fields?: {
        tag?: {
          value?: string;
        };
      };
    };
  };
  cardCtaText?: {
    jsonValue?: {
      value?: string;
    };
  };
  heading?: {
    jsonValue?: {
      value?: string;
    };
  };
  pageImage?: {
    jsonValue?: {
      value?: {
        height?: string;
        width?: string;
        src?: string;
        alt?: string;
      };
    };
  };
  Image?: {
    jsonValue?: {
      value?: {
        height?: string;
        width?: string;
        src?: string;
        alt?: string;
      };
    };
  };
  backgroundVideo?: {
    jsonValue?: {
      value?: string;
    };
  };
  subheading?: {
    jsonValue?: {
      value?: string;
    };
  };
  cta?: {
    jsonValue?: LinkField | undefined;
  };
}
interface Fields {
  data: {
    datasource?: heroData | null;
    contextItem?: heroData;
  };
}
export type HeroProps = {
  rendering?: { componentName: string };
  params: {
    [key: string]: string;
    addGradient: string;
  };
  uid?: string;
  componentName?: string;
  dataSource?: string;
  fields: Fields;
};
const Hero = ({ fields, params }: HeroProps): JSX.Element => {
  const useDataSource = fields?.data?.datasource != null;
  const heroData = useDataSource ? fields.data.datasource : fields.data.contextItem;
  const heroDataImage = useDataSource
    ? fields?.data?.datasource?.Image
    : fields?.data?.contextItem?.pageImage;

  if (fields === null || fields === undefined) return <></>;

  return (
    <div className=" B1-hero B1-hero--text-white text-white relative w-full min-h-screen h-auto bg-gray overflow-hidden">
      <div className="min-h-screen w-full overflow-hidden relative">
        <div className="simple-slider-inner overflow-hidden w-full min-h-screen h-auto relative">
          <div
            className={clsx(
              'B1-hero__item slide B1-hero--text-white bg-no-repeat bg-center bg-cover items-center flex justify-center',
              {
                'text-white': params?.textColor === 'white',
                'text-black': params?.textColor === 'black',
              }
            )}
            style={{
              ...(heroDataImage?.jsonValue?.value?.src && {
                backgroundImage: `url(${heroDataImage?.jsonValue?.value?.src})`,
              }),
            }}
          >
            {heroData?.backgroundVideo?.jsonValue?.value && (
              <div className="w-full h-full absolute ">
                <Mp4VideoPlayer
                  autoplay={true}
                  loop={true}
                  muted={true}
                  controls={false}
                  field={{
                    image: {
                      value: heroDataImage?.jsonValue?.value?.src,
                    },
                    videoid: {
                      value: heroData?.backgroundVideo?.jsonValue?.value,
                    },
                  }}
                />
              </div>
            )}
            {params.addGradient == '1' && (
              <div className="B1-hero__gradient absolute left-0 top-0 w-full h-full z-0 before:content before:absolute before:w-full before:h-[243px] before:from-[#00000000] before:to-[#000000a3] before:bg-gradient-0 after:content after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:from-[#00000000] after:to-[#000000bf] after:bg-gradient-198 after:opacity-40"></div>
            )}
            <div className="container w-full min-h-screen h-auto py-[100px] flex flex-col items-start justify-center relative z-2">
              <Text
                tag="div"
                className="B1-hero__item__label text-base font-bold leading-none pl-[5px] mb-4"
                field={heroData?.contentTag?.jsonValue?.fields?.tag}
              />
              {heroData?.heading?.jsonValue?.value && (
                <Text
                  tag="h1"
                  className="text-7xl leading-56 smd:text-[72px] smd:leading-[72px] lg:text-8xl lg:leading-80"
                  field={heroData?.heading?.jsonValue}
                />
              )}
              {heroData?.subheading?.jsonValue?.value && (
                <RichTextA11yWrapper
                  className="max-w-[640px] mt-[37px] text-lg leading-28 [&>p]:text-lg [&>p]:leading-28 [&>p]:mb-5"
                  data-testid="contentblock"
                  field={heroData?.subheading?.jsonValue}
                  editable
                />
              )}
              {heroData?.cta?.jsonValue?.value && heroData?.cta?.jsonValue?.value.href && (
                <Button
                  auto
                  className={clsx('text-white mt-[6px] font-semibold', {
                    '!text-black': params?.textColor === 'black',
                  })}
                  field={heroData?.cta?.jsonValue}
                  variant="primary"
                  tabIndex={0}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<HeroProps>(Hero);
export default Hero;
