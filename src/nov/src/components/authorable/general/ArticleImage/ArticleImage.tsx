import React from 'react';

// Local

import { Project } from '.generated/templates/Project.Item.model';
import { Sitecore } from '.generated/templates/_.Sitecore.Override';
import clsx from 'clsx';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

// interface Fields {
//   videoURL: {
//     value: string;
//   };
// }
export type ArticleImageProps = Sitecore.Override.ComponentBase &
  Project.Item.NovCom.Modules.Fields.ArticleImage;

const ArticleImage = ({ fields }: ArticleImageProps): JSX.Element => {
  // Fail out if fields aren't present

  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      <div className={clsx('pt-[50px]')}>
        <div className={clsx('max-w-[800px]', 'm-auto', 'relative', 'smd:mb-6')}>
          <div
            className={clsx(
              'lg:m-0',
              'lg:w-full',
              'smd:mr-[30px]',
              'smd:ml-[30px]',
              'smd:w-[calc(100%-60px)]',
              'smd:mb-0',
              'mb-5',
              'w-full'
            )}
          >
            <ImageWrapper field={fields?.image} className="w-full" />
          </div>
          {fields?.caption?.value && (
            <div
              className={clsx(
                'lg:w-[225px]',
                'lg:m-0',
                'lg:p-[31px]',
                'lg:pb-0',
                'smd:w-[199px]',
                'smd:p-[27px]',
                'smd:pb-0',
                'smd:mr-[30px]',
                'smd:ml-[30px]',
                'smd:absolute',
                'smd:bg-white',
                'smd:right-0',
                'smd:-bottom-6',
                'mr-[23px]',
                'ml-[23px]'
              )}
            >
              <Text
                field={fields?.caption}
                tag="p"
                className={clsx('text-gray-dark', 'text-2xs', 'leading-16', 'mb-[6px]')}
              />
              <Text
                field={fields?.credit}
                tag="span"
                className={clsx('text-2xs', 'text-black', 'leading-16', 'mb-[6px]')}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ArticleImage;
