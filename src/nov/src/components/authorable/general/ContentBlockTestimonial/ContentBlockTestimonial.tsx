import Button from '@/components/helpers/Button/Button';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import Mp4VideoPlayer from '@/components/helpers/Mp4VideoPlayer/Mp4VideoPlayer';
import { Field, ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export type ContentBlockTestimonialProps = {
  params?: { [key: string]: string };
  componentName?: string;
  fields?: {
    cta?: LinkField; // general link with search;
    fullName?: Field<string>;
    jobTitle?: Field<string>;
    testimonial?: Field<string>;
    backgroundVideo?: Field<string>;
    image?: ImageField;
  };
};

const ContentBlockTestimonial = ({ fields, params }: ContentBlockTestimonialProps): JSX.Element => {
  const [isWithoutImage, setIsWithoutImage] = useState<boolean>(true);
  const [backgroundColor, setBackgroundColor] = useState<string>('#F1F1F1');
  const [isRightAlign, setIsRightAlign] = useState(false);

  useEffect(() => {
    setIsRightAlign(params?.alignment?.toLowerCase() === 'right');
    setIsWithoutImage(!(fields?.image?.value?.src || fields?.backgroundVideo?.value));
    setBackgroundColor(params?.backgroundColor?.split('-')?.[1] || '#F1F1F1');
  }, []);
  const renderContent = () => {
    return (
      <div
        className={clsx('smd:flex smd:py-12 flex-col', {
          'smd:pr-[100px] smd:pl-0': isRightAlign && !isWithoutImage,
          'smd:pl-[100px] smd:pr-0': !isRightAlign,
        })}
      >
        {fields?.testimonial && (
          <Text tag="p" className="mb-[1.25em] !text-sm !leading-24" field={fields?.testimonial} />
        )}
        {fields?.fullName && (
          <Text
            tag="p"
            className="mb-2 text-base font-bold leading-28 lg:leading-32 text-black"
            field={fields?.fullName}
          />
        )}
        {fields?.jobTitle && (
          <Text
            tag="p"
            className="leading-12 text-2xs text-gray-dark mb-6"
            field={fields?.jobTitle}
          />
        )}
        {fields?.cta?.value?.text && (
          <div>
            <Button
              variant="tertiary"
              field={fields?.cta}
              className="!h-[30px] mt-4 !font-medium !text-lightBlack hover:!text-gray-lighter"
              iconPosition="right"
              iconClassName="icon-chevron-right"
            />
          </div>
        )}
      </div>
    );
  };

  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="w-full pt-[30px] smd:pt-20">
      <div className="container">
        {isWithoutImage ? (
          renderContent()
        ) : (
          <div
            className={clsx('flex flex-col smd:flex-row smd:justify-between smd:items-center', {
              'smd:flex-row-reverse': isRightAlign,
            })}
          >
            <div className="relative">
              <div
                className="h-0 pb-[100%] mx-[-25px] -mt-8 mb-[112px] smd:m-0 smd:pb-0 smd:relative smd:w-[264px] smd:h-[328px] lg:w-[480px] lg:h-[560px]"
                style={{ backgroundColor: backgroundColor }}
              >
                <div className="pb-8 px-8 pt-16">
                  <div
                    className={clsx(
                      'h-[312px] smd:absolute smd:top-0 smd:bottom-0 smd:m-auto smd:w-[264px] smd:h-[264px] lg:h-[385px] lg:w-[385px]',
                      {
                        'smd:-left-16': isRightAlign,
                        'smd:-right-16': !isRightAlign,
                      }
                    )}
                  >
                    {!fields?.backgroundVideo?.value && fields?.image?.value?.src && (
                      <ImageWrapper field={fields?.image} className="w-full h-auto" />
                    )}
                    {fields?.backgroundVideo?.value && (
                      <Mp4VideoPlayer
                        autoplay={true}
                        loop={true}
                        muted={true}
                        className="block my-0 mx-auto w-full h-auto"
                        controls={false}
                        field={{
                          videoid: {
                            value: fields?.backgroundVideo?.value,
                          },
                          image: {
                            value: fields?.image?.value?.src || '',
                          },
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {renderContent()}
          </div>
        )}
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentBlockTestimonialProps>(ContentBlockTestimonial);
export default ContentBlockTestimonial;
