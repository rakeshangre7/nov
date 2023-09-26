import { Project } from '.generated/templates/Project.Item.model';
import { Sitecore } from '.generated/templates/_.Sitecore.Override';
import Button from '@/components/helpers/Button/Button';
import Icon from '@/components/helpers/Icon/Icon';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import Mp4VideoPlayer from '@/components/helpers/Mp4VideoPlayer/Mp4VideoPlayer';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export type BlockQuoteProps = Sitecore.Override.ComponentBase &
  Project.Item.NovCom.Modules.Fields.BlockQuote & {
    params?: { [key: string]: string };
    fields: {
      cta: LinkField;
    };
  };

const BlockQuote = ({ fields }: BlockQuoteProps): JSX.Element => {
  const [isWithoutImage, setIsWithoutImage] = useState(true);
  useEffect(() => {
    setIsWithoutImage(!(fields?.image?.value?.src || fields?.backgroundVideo?.value));
  }, []);
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  const renderQuoteContent = () => {
    return (
      <>
        <Icon
          className={clsx('icon-quote-mark text-primary  ', {
            'ml-[3px] text-5xl lg:text-[49px] mb-[-5px] smd:mb-[-2px] lg:mb-0': isWithoutImage,
            'smd:ml-[3px] lg:ml-[-9px] text-5xl smd:mt-[-5px] lg:mt-0 lg:text-[56px]':
              !isWithoutImage,
          })}
        />
        {fields?.quoteText && (
          <blockquote
            className={clsx({
              'mt-[-6px]': isWithoutImage,
              'smd:mt-[-9px] lg:mt-[-16px]': !isWithoutImage,
            })}
          >
            <RichTextA11yWrapper
              field={fields?.quoteText}
              className={clsx(
                '!text-base  [&_p]:!text-base !leading-28 [&_p]:!leading-28 lg:!leading-32 [&_p]:lg:!leading-32 [&_p]:mt-5 [&_p]:!mb-0 ',
                {
                  'max-w-[480px] text-black [&_p]:text-black': !isWithoutImage,
                  'text-gray-dark [&_p]:text-gray-dark': isWithoutImage,
                }
              )}
            />
          </blockquote>
        )}
        {fields?.quoteName && (
          <Text
            tag="p"
            className={clsx(
              'mt-8 lg:mt-4 text-sm leading-24 font-semibold smd:text-base smd:leading-28 lg:leading-32 text-black',
              {
                'max-w-[480px]': !isWithoutImage,
                'lg:font-medium': isWithoutImage,
              }
            )}
            field={fields?.quoteName}
          />
        )}
        {fields?.jobTitle && (
          <Text
            tag="p"
            className={clsx(
              'mb-8 lg:mb-4 text-gray-dark text-2xs leading-16 smd:leading-24 smd:text-sm',
              {
                'max-w-[480px]': !isWithoutImage,
              }
            )}
            field={fields?.jobTitle}
          />
        )}
        {fields?.cta?.value?.href && (
          <Button
            variant={'tertiary'}
            field={fields.cta}
            className="!font-medium !text-lightBlack hover:!text-gray-lighter py-[3px]"
            iconPosition="right"
            iconClassName="icon-chevron-right"
          />
        )}
      </>
    );
  };
  return (
    <div className="container pt-[30px] smd:pt-20">
      {isWithoutImage && (
        <div
          className={clsx('flex flex-col max-w-[480px]  mx-auto', {
            'items-center align-middle text-center lg:max-w-[735px]': isWithoutImage,
            'justify-center h-full': !isWithoutImage,
          })}
        >
          {renderQuoteContent()}
        </div>
      )}

      {!isWithoutImage && (
        <div className="mx-auto text-center smd:max-w-[480px] lg:max-w-[990px] lg:text-left after:content-[''] after:clear-both after:table">
          <figure className="block h-0 pb-[100%] bg-smokyWhite mt-[-32px] mx-[-25px] mb-[112px] px-8 smd:my-0 smd:mx-auto smd:w-[291px] smd:p-0 smd:bg-transparent smd:h-auto lg:float-left lg:w-[608px] after:content-[''] after:clear-both after:table">
            <div className="bg-smokyWhite hidden smd:block smd:float-right smd:w-[231px] smd:h-[124px] lg:w-[416px] lg:h-[224px]"></div>
            <div className="relative pt-16 px-0 pb-0 mb-10 smd:p-0 smd:top-[-62px] smd:float-left smd:w-[237px] smd:h-[237px] smd:mb-[calc(2em-62px)] lg:top-[-111px] lg:w-[383px] lg:h-[383px] lg:mb-[calc(2em-111px)]">
              {!fields?.backgroundVideo?.value && (
                <ImageWrapper field={fields?.image} className="block my-0 mx-auto w-full h-auto" />
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
          </figure>
          <div className="justify-center flex-col items-center flex lg:block lg:items-start lg:w-[480px] lg:float-right lg:relative lg:top-[-330px] lg:mb-[calc(2em-330px)]">
            {renderQuoteContent()}
          </div>
        </div>
      )}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<BlockQuoteProps>(BlockQuote);
export default BlockQuote;
