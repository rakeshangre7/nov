import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import clsx from 'clsx';

// Local

import Mp4VideoPlayer from '@/components/helpers/Mp4VideoPlayer/Mp4VideoPlayer';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
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
    } | null;
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
  image?: {
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
  cta?: LinkField | undefined | null;
}
interface Fields {
  data: {
    datasource?: heroData | null;
    contextItem?: heroData;
  };
}
export type ProductHeroProps = {
  rendering?: { componentName: string };
  params: {
    [key: string]: string;
    addGradient: string;
  };
  uid?: string;
  componentName?: string;
  dataSource?: string;
  fields: Fields;
  displayMode?: string;
};
const ProductHero = ({ fields, params, displayMode }: ProductHeroProps): JSX.Element => {
  const useDataSource = fields?.data?.datasource != null;
  const heroData = useDataSource ? fields.data.datasource : fields.data.contextItem;
  const displayModeFull = displayMode === 'full size';
  const displayModeImage = displayMode === 'product image';

  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      className={`overflow-hidden w-full h-auto relative ${displayModeFull ? 'min-h-screen' : ''}`}
    >
      {/* {displayModeFull && ( */}
      <div
        className={clsx('bg-no-repeat bg-center bg-cover items-center flex justify-center', {
          'text-white': params?.textColor === 'white',
          'text-black': params?.textColor === 'black',
        })}
        style={{
          ...(heroData?.image?.jsonValue?.value?.src &&
            displayModeFull && {
              backgroundImage: `url(${heroData?.image.jsonValue?.value?.src})`,
            }),
        }}
      >
        {heroData?.backgroundVideo?.jsonValue?.value ? (
          // <div className="w-full h-full  pt-[58%]">
          <div
            className={clsx('w-full h-full', {
              absolute: displayModeFull,
              'pt-[56%]': displayModeImage,
            })}
          >
            <Mp4VideoPlayer
              className={clsx({
                'absolute left-0 top-0': displayModeImage,
              })}
              autoplay={true}
              loop={true}
              muted={true}
              controls={false}
              field={{
                image: {
                  value: heroData?.image?.jsonValue?.value?.src,
                },
                videoid: {
                  value: heroData?.backgroundVideo?.jsonValue?.value,
                },
              }}
            />
          </div>
        ) : (
          heroData?.image?.jsonValue &&
          displayModeImage && <ImageWrapper field={heroData?.image?.jsonValue} />
        )}
      </div>
      {/* )} */}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ProductHeroProps>(ProductHero);
export default ProductHero;
