import { ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import clsx from 'clsx';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Button from '@/components/helpers/Button/Button';
// Local
// interface heroData {
//   heading?: {
//     jsonValue?: {
//       value?: string;
//     };
//   };
// image: {
//   jsonValue: {
//     value: ImageField;
//   }
// }
//   subheading: {
//     jsonValue: {
//       value: string;
//     };
//   };
//   cta: {
//     jsonValue: LinkField;
//   };
// }
interface Fields {
  data: {
    datasource: {
      heading?: {
        jsonValue?: {
          value?: string;
        };
      };
      image?: {
        jsonValue?: {
          value?: {
            src?: ImageField;
          };
        };
      };
      subheading: {
        jsonValue: {
          value: string;
        };
      };
      cta: {
        jsonValue: LinkField;
      };
    };
    contextItem: {
      heading?: {
        jsonValue?: {
          value?: string;
        };
      };
      image?: {
        jsonValue?: {
          value?: {
            src?: ImageField;
          };
        };
      };
      subheading: {
        jsonValue: {
          value: string;
        };
      };
      cta: {
        jsonValue: LinkField;
      };
    };
  };
}
export type HeroProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  uid: string;
  componentName: string;
  dataSource?: string;
  fields: Fields;
};
const Hero = ({ fields, params }: HeroProps): JSX.Element => {
  const useDataSource = fields?.data?.datasource != null;
  const heroData = useDataSource ? fields.data.datasource : fields.data.contextItem;

  if (fields === null || fields === undefined) return <></>;

  return (
    <div className=" B1-hero B1-hero--text-white relative w-full min-h-screen h-auto bg-gray overflow-hidden">
      <div
        className={clsx('min-h-screen w-full overflow-hidden relative', {
          'text-white': params?.textColor === 'white',
          'text-black': params?.textColor === 'black',
        })}
      >
        <div className="simple-slider-inner overflow-hidden w-full min-h-screen h-auto relative">
          <div
            className="B1-hero__item slide B1-hero--text-white bg-no-repeat bg-center bg-cover items-center flex justify-center"
            style={
              heroData?.image?.jsonValue?.value?.src && {
                backgroundImage: `url(${heroData?.image?.jsonValue?.value?.src})`,
              }
            }
          >
            <div className="B1-hero__gradient absolute left-0 top-0 w-full h-full z-0 before:content before:absolute before:w-full before:h-[243px] before:from-[#00000000] before:to-[#000000a3] before:bg-gradient-0 after:content after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:from-[#00000000] after:to-[#000000bf] after:bg-gradient-198 after:opacity-40"></div>
            <div className="container w-full min-h-screen h-auto py-[100px] flex flex-col items-start justify-center relative z-2">
              {heroData?.heading?.jsonValue?.value && (
                <Text
                  tag="h1"
                  className="text-7xl leading-56 smd:text-[72px] smd:leading-[72px] lg:text-8xl lg:leading-80"
                  field={heroData?.heading?.jsonValue}
                />
              )}
              {heroData?.subheading?.jsonValue.value && (
                <RichTextA11yWrapper
                  className="max-w-[640px] mt-[37px] text-lg leading-28 [&>p]:text-lg [&>p]:leading-28"
                  data-testid="contentblock"
                  field={heroData?.subheading?.jsonValue}
                  editable
                />
              )}
              <Button
                auto
                className="text-white mt-[26px]"
                field={heroData?.cta?.jsonValue}
                variant="primary"
                tabIndex={0}
              />
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
