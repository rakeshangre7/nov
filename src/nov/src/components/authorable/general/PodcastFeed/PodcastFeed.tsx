import React from 'react';

// Local

import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Button from '@/components/helpers/Button/Button';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

type ResultArray = {
  headline: { jsonValue: Field<string> };
  subheading: { jsonValue: Field<string> };
  soundcloudembedcode: { jsonValue: Field<string> } | null;
  pageTitle: { jsonValue: Field<string> };
  guestNames: { jsonValue: Field<string> } | null;
  podcastLength: { jsonValue: Field<string> } | null;
  episodeNumber: { jsonValue: Field<number> } | null;
  episodeTitle: { jsonValue: Field<string> } | null;
  body: { jsonValue: Field<string> } | null;
  quote: { jsonValue: Field<string> } | null;
  quoteJobTitle: { jsonValue: Field<string> } | null;
  quoteName: { jsonValue: Field<string> } | null;
  pageURL: { path: string };
};
export type PodcastFeedProps = {
  componentName?: string;
  dataSource?: string;
  uid?: string;
  fields: {
    data: {
      item: {
        field: {
          targetItem: {
            children: {
              results: ResultArray[];
            };
          };
        };
        episodePrefix: { jsonValue: Field<string> };
        initialItemCount: { jsonValue: Field<number> };
        learnMoreText: { jsonValue: Field<string> };
        loadMoreCount: { jsonValue: Field<number> };
        loadMoreText: { jsonValue: Field<string> };
      };
    };
  };
};

const PodcastFeed = ({ fields }: PodcastFeedProps): JSX.Element => {
  // Fail out if fields aren't present
  console.log('fields - ', fields);
  const resultsArray = fields?.data?.item?.field?.targetItem?.children?.results;
  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      <div className={clsx('smd:pt-20', 'pt-[30px]')}>
        <div
          className={clsx(
            'min-[1221px]:max-w-[1122px]',
            'min-[747px]:max-w-[748px]',
            'max-w-[374px]',
            'flex',
            'flex-wrap',
            'm-auto'
          )}
        >
          {resultsArray &&
            resultsArray.length > 0 &&
            resultsArray?.map((elem, id) => {
              console.log('ishika elem - ', elem);
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
                  key={id}
                >
                  <div></div>
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
                      field={elem?.episodeNumber?.jsonValue}
                      className={clsx(
                        'text-base',
                        'font-semibold',
                        'leading-24',
                        'mb-3',
                        'text-black'
                      )}
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
                      variant="secondary"
                      field={fields?.data?.item?.learnMoreText?.jsonValue}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PodcastFeed;
