import React, { useState } from 'react';

// Local

import { Sitecore } from '.generated/templates/_.Sitecore.Override';
import clsx from 'clsx';
import Icon from '@/components/helpers/Icon/Icon';
import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
type shareIconItem = {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    iconLabel: Field<string>;
    shareUrl: Field<string>;
  };
};

export type SocialShareProps = Sitecore.Override.ComponentBase & {
  fields: {
    page?: LinkField;
    shareIcons?: shareIconItem[];
  };
};

const SocialShare = ({ fields }: SocialShareProps): JSX.Element => {
  // Fail out if fields aren't present
  const [showIconList, setShowIconList] = useState<boolean>(false);

  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      <div className={clsx('pt-12', 'pb-[6px]')}>
        <div className="container">
          <div className={clsx('max-w-[736px]', 'm-auto')}>
            <div className={clsx('flex')}>
              <Icon
                className={clsx(`icon-share-2`, 'text-black', 'hover:text-red', 'cursor-pointer', {
                  'text-red': showIconList,
                })}
                onClick={() => setShowIconList(!showIconList)}
              />
              <div
                className={clsx(
                  'flex',
                  'row',
                  'border',
                  'border-gray-light',
                  'ml-[14px]',
                  'p-[6px]',
                  'rounded-md',
                  'transition-opacity',
                  'duration-200',
                  'ease-linear',
                  'relative',
                  'bg-white',
                  'before:absolute',
                  'before:w-2',
                  'before:h-2',
                  'before:bg-white',
                  'before:-left-[5px]',
                  'before:top-[calc(50%-4px)]',
                  'before:-rotate-45',
                  'before:border-t',
                  'before:border-l',
                  'before:border-gray-light',
                  { 'opacity-100': showIconList, 'opacity-0': !showIconList }
                )}
              >
                {fields?.shareIcons &&
                  fields?.shareIcons?.map((elem, id) => {
                    return (
                      <Icon
                        className={clsx(
                          elem?.fields?.iconLabel?.value,
                          'mx-[5px]',
                          'first:ml-0',
                          'leading-[27px]',
                          'text-2xl',
                          'text-black',
                          'hover:text-red',
                          'cursor-pointer',
                          {
                            'text-lg leading-[1.1] relative top-[1px]':
                              elem?.fields?.iconLabel?.value.toLowerCase() ===
                              'icon-mail'.toLowerCase(),
                          }
                        )}
                        key={id}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialShare;
