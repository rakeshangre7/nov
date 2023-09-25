import { WidgetDataType, useRecommendation, widget } from '@sitecore-search/react';
import { Presence } from '@sitecore-search/ui';

type ArticleModel = {
  id: string;
  name: string;
  author?: string;
  url?: string;
  image_url?: string;
  source_id?: string;
};

const DEFAULT_IMG_URL = 'https://placehold.co/500x300?text=No%20Image'; // TODO: Update with corresponding fallback image

export const SearchResultsComponent = () => {
  const {
    widgetRef,
    queryResult: { isLoading, isFetching, data: { content: articles = [] } = {} },
  } = useRecommendation();
  const loading = isLoading || isFetching;
  console.log('data', articles);
  return (
    <div>
      <Presence present={loading}>
        <div>
          <svg
            aria-busy={loading}
            aria-hidden={!loading}
            focusable="false"
            role="progressbar"
            viewBox="0 0 20 20"
          >
            <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" />
          </svg>
        </div>
      </Presence>
      {!loading && (
        <>
          <div ref={widgetRef} className="mx-auto max-w-2xl">
            <h3>Search Results</h3>
            {articles.map((item: ArticleModel) => (
              <div className="w-full flex flex-row justify-evenly mt-3" key={item.id}>
                <div className="w-1/2">
                  <img src={item?.image_url || DEFAULT_IMG_URL} width="300" alt={item.name} />
                </div>
                <div className="w-1/2">
                  <a href={item.url}> {item.name} </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
const SearchResultsWidget = widget(
  SearchResultsComponent,
  WidgetDataType.SEARCH_RESULTS,
  'content'
);
export default SearchResultsWidget;
