import Button from '@/components/helpers/Button/Button';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Field, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRouter } from 'next/router';

interface CardContent {
  headline?: {
    jsonValue: Field<string>;
  };
  cardImage?: {
    jsonValue: ImageField;
  };
  subheading?: {
    jsonValue: Field<string>;
  };
  primaryURL?: {
    path: string;
    url: string;
  };
}

interface Datasource {
  headline?: {
    jsonValue: Field<string>;
  };
  pages: {
    targetItems?: CardContent[];
  };
}

interface ContextItem {
  cardCtaText?: {
    jsonValue?: {
      value?: string;
    };
  };
}
export type ContentList2x1Props = {
  uid?: string;
  componentName: string;
  dataSource?: string;
  params?: { [key: string]: string };
  fields?: {
    data: {
      datasource?: Datasource;
      contextItem?: ContextItem;
    };
  };
};
const ContentList2x1 = ({ fields }: ContentList2x1Props): JSX.Element => {
  const router = useRouter();
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  return (
    <div className=" mx-auto">
      {fields?.data?.datasource?.headline?.jsonValue && (
        <Text
          className="w-full text-center pt-[30px] smd:pt-20 text-black mb-[15px] smd:mb-6"
          tag="h2"
          field={fields?.data?.datasource?.headline?.jsonValue}
        />
      )}
      {fields?.data?.datasource?.pages?.targetItems &&
        fields.data.datasource.pages.targetItems.length > 0 && (
          <div className="pt-[30px] mx-auto smd:pt-[35px] w-full text-center px-[15px] lg:max-w-[1120px] flex justify-center lg:justify-start flex-wrap">
            {fields?.data?.datasource?.pages?.targetItems?.map(
              (contentData: CardContent, index: number) => {
                return (
                  <div
                    key={index}
                    className="pt-[30px] smd:pt-[45px] relative block cursor-pointer max-w-[544px] w-full mx-auto lg:m-0 lg-w-1/2 lg:px-[15px] hover:!no-underline basicFocusSmallBorder"
                    onClick={(e) => {
                      if (contentData?.primaryURL?.path) {
                        e.stopPropagation();
                        router.push(contentData.primaryURL.path);
                      }
                    }}
                    onKeyUp={(e: React.KeyboardEvent<HTMLDivElement>) => {
                      if (e.keyCode === 13 && contentData?.primaryURL?.path) {
                        e.stopPropagation();
                        router.push(contentData.primaryURL.path);
                      }
                    }}
                    tabIndex={0}
                  >
                    {contentData?.cardImage?.jsonValue && (
                      <ImageWrapper
                        className="pt-0 mb-[30px] w-full overflow-hidden h-auto"
                        field={contentData?.cardImage?.jsonValue}
                      />
                    )}
                    <div className="w-[90.7%] relative mx-auto text-left bg-gray-lightest p-[34px] !pt-[22px] top-[-70px] mb-[-58px] smd:w-[76.47%] smd:top-[-126px]">
                      <Text
                        tag="h3"
                        className="text-base text-black leading-24 font-bold mt-[15px] font-primary"
                        field={contentData?.headline?.jsonValue}
                      />

                      <RichTextA11yWrapper
                        className="!text-gray-dark [&_p]:!text-2xs [&_p]:!leading-16 [&_p]:smd:!leading-24 [&_p]:smd:!text-sm mt-4"
                        field={contentData?.subheading?.jsonValue}
                        characterLimit={92}
                      />

                      <Button
                        variant={'tertiary'}
                        iconClassName="icon-chevron-right"
                        iconPosition="right"
                        className="!text-base !leading-16 !font-medium lg:!text-sm lg:!leading-24 lg:!font-semibold mt-[5px] !text-lightBlack lg:hover:!text-gray-lighter"
                        field={{
                          value: {
                            href: contentData?.primaryURL?.path,
                            text: fields?.data?.contextItem?.cardCtaText?.jsonValue?.value,
                          },
                        }}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentList2x1Props>(ContentList2x1);
export default ContentList2x1;
