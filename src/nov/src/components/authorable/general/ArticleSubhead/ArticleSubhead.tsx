import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import moment from 'moment';
import { dateFormat } from '@/components/helpers/CommonData/helper';

// Local

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
type dataObject = {
  showDate?: { jsonValue?: Field<boolean> };
  subheadText?: { jsonValue?: Field<string> };
};

interface Fields {
  data?: {
    datasource?: dataObject;
    contextItem?: {
      date?: {
        jsonValue: Field<string>;
      };
    };
  };
}

export type ArticleSubheadProps = {
  uid: string;
  componentName: string;
  dataSource?: string;
  fields: Fields;
};

const ArticleSubhead = ({ fields }: ArticleSubheadProps): JSX.Element => {
  // Fail out if fields aren't present

  if (fields === null || fields === undefined) return <></>;
  const dateValue = fields?.data?.contextItem?.date?.jsonValue?.value;
  return (
    <>
      <div className="lg:relative lg:-mt-[100px]">
        <div className="container max-w-[992px] bg-white lg:pt-[25px] pt-0">
          <div className="max-w-[736px] m-auto">
            {fields?.data?.datasource?.showDate &&
              fields?.data?.datasource?.showDate?.jsonValue?.value === true && (
                <div className="lg:mt-4 lg:mb-8 mt-6 mb-6 text-black">
                  <span className="text-gray-dark text-2xs leading-16">
                    {dateValue && moment(dateValue).format(dateFormat)}
                  </span>
                </div>
              )}
            <RichTextA11yWrapper
              field={fields?.data?.datasource?.subheadText?.jsonValue}
              className="  
              [&_p]:text-base 
              [&_p]:leading-28 
              [&_p]:lg:leading-32
              [&_p]:mb-5          
              [&_p]:text-black 
              [&_a]:font-semibold 
              [&_a]:text-base 
              [&_a]:inline
              [&_p]:mt-0
              mb-5 firstLetterCapital firstParaBold
              "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleSubhead;
