import React from 'react';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Button from '@/components/helpers/Button/Button';
import SoundcloudPlayerWrapper from '@/components/helpers/SoundcloudPlayerWrapper/SoundcloudPlayerWrapper';
import { ResultArray } from './PodcastFeed';

import clsx from 'clsx';

type SingleFeedProps = {
  id: number;
  elem: ResultArray;
  fieldLearnMore: string;
  episodePrefix: string;
};

const SingleFeed = ({ elem, fieldLearnMore, episodePrefix }: SingleFeedProps) => {
  return (
    <div
      className={clsx(
        'w-[344px]',
        'mt-0',
        'mr-[15px]',
        'mb-[30px]',
        'ml-[15px]',
        'bg-gray-lightest'
      )}
    >
      <div className={clsx('w-full', 'pb-[75%]', 'overflow-hidden', 'relative')}>
        {elem?.soundcloudembedcode?.jsonValue?.value && (
          <div className={clsx('absolute', 'w-full', 'h-full')}>
            <SoundcloudPlayerWrapper
              fields={{
                soundcloudembedcode: {
                  value: elem?.soundcloudembedcode?.jsonValue?.value,
                },
              }}
            />
          </div>
        )}
      </div>
      <div className={clsx('p-8')}>
        <Text
          tag="p"
          field={elem?.guestNames?.jsonValue}
          className={clsx('text-sm', 'leading-24', 'mb-[10.5px]', 'text-gray-dark')}
        />
        <Text
          tag="p"
          field={elem?.podcastLength?.jsonValue}
          className={clsx('text-sm', 'leading-24', 'mb-[10.5px]', 'text-gray-dark')}
        />
        <Text
          tag="h3"
          field={{ value: `${episodePrefix}${elem?.episodeNumber?.jsonValue?.value}` }}
          className={clsx('text-base', 'font-semibold', 'leading-24', 'mb-3', 'text-black')}
        />
        <RichTextA11yWrapper
          field={elem?.body?.jsonValue}
          className={clsx(
            '[&_p]:text-sm',
            '[&_p]:leading-24',
            '[&_p]:mb-[24.5px]',
            '[&_p]:text-gray-dark'
          )}
        />
        <Button
          variant="tertiary"
          field={{
            value: {
              href: elem?.pageURL?.path,
              linktype: 'internal',
              text: fieldLearnMore,
            },
          }}
          iconPosition="right"
          iconClassName="icon-chevron-right"
          className={clsx('mt-[24.5px]')}
        />
      </div>
    </div>
  );
};

export default SingleFeed;
