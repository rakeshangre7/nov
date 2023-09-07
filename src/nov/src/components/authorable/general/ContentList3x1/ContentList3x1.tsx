import React from 'react';

import { ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Icon from 'components/helpers/Icon/Icon';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

interface targetItems {
  headline: {
    jsonValue: {
      value?: string;
    };
  };
  cardImage: {
    jsonValue?: ImageField;
  };
  subheading: {
    jsonValue: {
      value?: string;
    };
  };
  primaryURL: {
    path?: string;
    url?: string;
  };
}
interface Fields {
  data: {
    datasource: {
      headline: {
        jsonValue: {
          value?: string;
        };
      };
      pages: {
        targetItems?: Array<targetItems>;
      };
    };
    contextItem: {
      cardCtaText: {
        jsonValue: {
          value?: string;
        };
      };
    };
  };
}

export type ContentList3x1Props = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  uid: string;
  componentName: string;
  dataSource?: string;
  fields: Fields;
};

const ContentList3x1 = ({ fields }: ContentList3x1Props): JSX.Element => {
  // Fail out if fields aren't present

  const targetItems = fields?.data?.datasource?.pages?.targetItems;
  const cardCtaText = fields?.data?.contextItem?.cardCtaText?.jsonValue?.value;

  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      <div className="w-full pt-[30px] md:pt-20 lg:pb-[50px]">
        <div className="container ">
          {fields?.data?.datasource?.headline?.jsonValue && (
            <div className="E4-content-list__title">
              <Text
                tag="h2"
                field={fields?.data?.datasource?.headline?.jsonValue}
                className="leading-[normal] sm:text-6xl lg:text-7xl lg:leading-82 text-black text-center lg:mb-[45px]"
              />
            </div>
          )}
          <div className="lg:flex lg:flex-wrap px-4">
            {Array.isArray(targetItems) &&
              targetItems?.map((Item: targetItems, index: number) => (
                <>
                  {Item?.primaryURL?.path && (
                    <a
                      key={index}
                      className="w-full max-w-[352px] lg:max-w-none lg:w-1/3 mx-auto lg:mx-0 lg:px-[15px] justify-start flex flex-col hover:!no-underline"
                      href={Item?.primaryURL?.path}
                      target="_self"
                    >
                      {Item?.cardImage?.jsonValue?.value?.src && (
                        <div
                          className="w-full pt-[58.14%] md:pt-[59.09%] mt-[45px] mb-[30px] lg:mt-0 overflow-hidden bg-no-repeat bg-center bg-cover block"
                          style={{
                            backgroundImage: `url(${Item?.cardImage?.jsonValue?.value?.src})`,
                          }}
                        ></div>
                      )}
                      <div className="block">
                        {Item?.headline.jsonValue?.value && (
                          <Text
                            tag="h3"
                            field={Item?.headline?.jsonValue}
                            className="text-black text-lg leading-24 font-semibold lg:text-base lg:font-bold  mb-4"
                          />
                        )}

                        <RichTextA11yWrapper
                          className="text-2xs leading-16 lg:text-sm lg:leading-24 [&>p]:text-2xs [&>p]:leading-16 [&>p]:lg:text-sm [&>p]:lg:leading-24"
                          field={Item?.subheading?.jsonValue}
                          characterLimit={100}
                        />
                        {cardCtaText && (
                          <button className="inline-flex font-primary text-base leading-[normal] lg:text-sm lg:leading-24 justify-between font-medium lg:font-semibold text-lightBlack hover:text-gray-lighter items-center py-[5px] basicFocus">
                            {cardCtaText}
                            <Icon className="icon-chevron-right font-icomoon not-italic normal-case leading-none antialiased flex flex-col justify-center ml-[4px] text-base font-medium lg:font-semibold text-primary" />
                          </button>
                        )}
                      </div>
                    </a>
                  )}
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentList3x1Props>(ContentList3x1);
export default ContentList3x1;
