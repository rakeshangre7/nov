import React from 'react';

// Local

import { Project } from '.generated/templates/Project.Item.model';
import { Sitecore } from '.generated/templates/_.Sitecore.Override';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Button from '@/components/helpers/Button/Button';
import clsx from 'clsx';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

// interface Fields {
//   videoURL: {
//     value: string;
//   };
// }
export type ArticleTextProps = Sitecore.Override.ComponentBase &
  Project.Item.NovCom.Modules.Fields.ArticleText & { params?: { useButtonForLink: string } };

const ArticleText = ({ fields, params }: ArticleTextProps): JSX.Element => {
  // Fail out if fields aren't present

  if (fields === null || fields === undefined) return <></>;
  const buttonVariant = params?.useButtonForLink ? 'button' : 'standard';
  const buttonStandard = buttonVariant === 'standard';
  const buttonDefault = buttonVariant === 'button';
  return (
    <>
      <div className="container">
        <div className="max-w-[736px] m-auto">
          <RichTextA11yWrapper
            field={fields?.body}
            className="text-black [&_p]:text-gray-dark [&_p]:mb-5  [&_p]:text-base [&_p]:leading-28 [&_p]:lg:leading-32 [&_h4]:text-5xl [&_h4]:leading-42 [&_h4]:mb-3.5 [&_h4]:mt-[22.5px] [&_h4]:text-black mb-5"
          />
          {fields?.ctaLink?.value?.href && (
            <Button
              variant={buttonVariant}
              field={fields?.ctaLink}
              className={clsx({
                'text-red !text-base !leading-28': buttonStandard,
                'mt-[34px]': buttonDefault,
              })}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ArticleText;
