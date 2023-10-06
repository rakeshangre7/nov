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
  displayMode: string;
};
const ProductHero = ({ fields, params, displayMode }: ProductHeroProps): JSX.Element => {
  const useDataSource = fields?.data?.datasource != null;
  const heroData = useDataSource ? fields.data.datasource : fields.data.contextItem;

  const displayModeFull = displayMode === 'full size';

  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      className={`overflow-hidden w-full h-auto relative ${displayModeFull ? 'min-h-screen' : ''}`}
    >
      {displayModeFull && (
        <div
          className={clsx('bg-no-repeat bg-center bg-cover items-center flex justify-center', {
            'text-white': params?.textColor === 'white',
            'text-black': params?.textColor === 'black',
          })}
          style={{
            ...(heroData?.image?.jsonValue?.value?.src && {
              backgroundImage: `url(${heroData?.image.jsonValue?.value?.src})`,
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
                    value: heroData?.image?.jsonValue?.value?.src,
                  },
                  videoid: {
                    value: heroData?.backgroundVideo?.jsonValue?.value,
                  },
                }}
              />
            </div>
          )}
          {/* {params.addGradient == '1' && (
              <div className="absolute left-0 top-0 w-full h-full z-0 before:content before:absolute before:w-full before:h-[243px] before:from-[#00000000] before:to-[#000000a3] before:bg-gradient-0 after:content after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:from-[#00000000] after:to-[#000000bf] after:bg-gradient-198 after:opacity-40"></div>
            )} */}
        </div>
      )}
      {heroData?.image?.jsonValue && (
        <ImageWrapper
          className="pt-0 mb-[30px] w-full overflow-hidden h-auto"
          field={heroData?.image?.jsonValue}
        />
      )}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ProductHeroProps>(ProductHero);
export default ProductHero;
