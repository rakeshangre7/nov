import React, { useState, useEffect } from 'react';

// Local

import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import SingleFeed from './SingleFeed';
import Button from '@/components/helpers/Button/Button';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

export type ResultArray = {
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

  const resultsArray = fields?.data?.item?.field?.targetItem?.children?.results;
  const [visibleAray, setVisibleArray] = useState<Array<ResultArray>>(
    resultsArray.slice(0, fields?.data?.item?.initialItemCount?.jsonValue?.value)
  );
  const [showLoadMore, setShowLoadMore] = useState<boolean>(true);

  useEffect(() => {
    if (resultsArray.length - visibleAray.length == 0) {
      setShowLoadMore(false);
    } else {
      setShowLoadMore(true);
    }
  }, [visibleAray]);

  // function for handling load more functionality
  const handleLoadMore = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    if (resultsArray.length - visibleAray.length > 0) {
      const nextLoadItems = resultsArray.slice(
        visibleAray.length,
        visibleAray.length + fields?.data?.item?.loadMoreCount?.jsonValue?.value
      );
      setVisibleArray([...visibleAray, ...nextLoadItems]);
    } else {
      setShowLoadMore(false);
    }
  };

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
          {visibleAray &&
            visibleAray.length > 0 &&
            visibleAray?.map((elem, id) => {
              return (
                <SingleFeed
                  elem={elem}
                  id={id}
                  key={id}
                  fieldLearnMore={fields?.data?.item?.learnMoreText?.jsonValue?.value}
                  episodePrefix={fields?.data?.item?.episodePrefix?.jsonValue?.value}
                />
              );
            })}
        </div>
        {showLoadMore && (
          <div className={`container ${clsx('flex', 'justify-center')}`}>
            <Button
              variant="primary"
              field={{
                value: {
                  text: fields?.data?.item?.loadMoreText?.jsonValue?.value,
                },
              }}
              className={clsx(
                'focus:`outline-dashed outline-2 outline-gray-nov`',
                'before:top-full'
              )}
              onClick={(e) => handleLoadMore(e)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PodcastFeed;
