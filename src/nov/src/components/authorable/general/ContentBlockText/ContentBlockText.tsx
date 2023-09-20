import Button from '@/components/helpers/Button/Button';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import Mp4VideoPlayer from '@/components/helpers/Mp4VideoPlayer/Mp4VideoPlayer';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { useBreakpoints } from '@/components/utility/breakpoints';
import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  heading: Field<string>;
  body: Field<string>;
  backgroundVideo: Field<string>;
  imageCropRegion: Field<string>;
  image: ImageField;
  cta: LinkField;
}

export type ContentBlockTextProps = {
  rendering?: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
  uid?: string;
  componentName?: string;
  dataSource?: string;
};

const ContentBlockText = ({ fields, params }: ContentBlockTextProps): JSX.Element => {
  const [isRightAlign, setIsRightAlign] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#F1F1F1');
  useEffect(() => {
    setIsRightAlign(params?.alignment?.toLowerCase() === 'right');
    setBackgroundColor(params?.backgroundColor?.split('-')?.[1] || '#F1F1F1');
  }, []);
  const { isMiniMobile } = useBreakpoints();

  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  console.log('backgroundColor', backgroundColor);
  return (
    <>
      <div
        className={clsx(
          'container m-auto flex pt-[30px] smd:pt-20 flex-col smd:flex-row smd:justify-between smd:items-center',
          {
            'smd:flex-row': !isRightAlign,
            'smd:flex-row-reverse': isRightAlign,
          }
        )}
      >
        <div
          className={clsx(
            'bg-gray-light smd:bg-transparent pb-[100%] mx-[-25px]  h-0 mt-8 mb-[112px] smd:m-0 smd:relative smd:w-[328px] smd:py-8 lg:py-[87.5px] smd:h-fit lg:w-[544px]'
          )}
          {...(isMiniMobile && { style: { backgroundColor: `#${backgroundColor}` } })}
        >
          <div
            className={clsx(
              'hidden smd:block smd:w-[calc(100%-64px)] bg-gray-light smd:absolute smd:top-0 smd:z-[-1] smd:h-full ',
              {
                'smd:left-0': !isRightAlign,
                'smd:right-0': isRightAlign,
              }
            )}
            style={{ backgroundColor: `#${backgroundColor}` }}
          ></div>
          <div
            className={clsx('w-full px-8 pb-8 pt-16 smd:p-0 smd:w-[264px] lg:w-[385px]', {
              'smd:ml-16 lg:ml-[159px]': !isRightAlign,
              'smd:mr-16 lg:mr-[159px]': isRightAlign,
            })}
          >
            {fields?.backgroundVideo?.value && (
              <Mp4VideoPlayer
                autoplay={true}
                loop={true}
                muted={true}
                className="w-full h-auto min-h-[312px] smd:min-h-[264px] lg:min-h-[385px]"
                controls={false}
                field={{
                  image: {
                    value: fields?.image?.value?.src || '',
                  },
                  videoid: {
                    value: fields?.backgroundVideo?.value,
                  },
                }}
              />
            )}
            {!fields?.backgroundVideo?.value && fields?.image && (
              <ImageWrapper className="w-full h-auto" field={fields?.image} />
            )}
          </div>
        </div>
        <div
          className={clsx('text-left items-start smd:py-[48px] w-full', {
            'smd:pr-0 smd:pl-[100px] smd:ml-[-64px]': !isRightAlign,
            'smd:pl-0 smd:pr-[100px] smd:mr-[-64px]': isRightAlign,
          })}
        >
          <Text
            tag="h2"
            className="text-black !text-2xl !leading-40 sm:!leading-48 lg:!text-5xl lg:!leading-40"
            field={fields?.heading}
          />
          <RichTextA11yWrapper
            className="[&_p]:mt-[20px] [&_p]:!leading-28 [&_p]:lg:!leading-32 [&_a]:!text-base !leading-28 lg:!leading-32 [&>p]:!mt-3.5 [&_p]:mb-0 mb-0"
            field={fields?.body}
          />
          {fields?.cta && (
            <Button
              variant={'tertiary'}
              className="mt-4 !text-lightBlack !font-medium hover:!text-gray-lighter !leading-normal"
              iconClassName="icon-chevron-right"
              iconPosition="right"
              field={fields?.cta}
            />
          )}
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentBlockTextProps>(ContentBlockText);
export default ContentBlockText;
