import { Environment, WidgetsProvider } from '@sitecore-search/react';
import SearchResultsWidget from '@/widgets/SearchResultWidget/index';

const SearchResults = (): JSX.Element => {
  const env = process.env.SEARCH_ENV as Environment;
  const customerKey = process.env.SEARCH_CUSTOMER_KEY;
  const searchApiKey = process.env.SEARCH_API_KEY;

  return (
    <>
      <WidgetsProvider env={env} customerKey={customerKey} apiKey={searchApiKey}>
        <SearchResultsWidget rfkId="rfkid_7" entity="content" />
      </WidgetsProvider>
    </>
  );
};

export default SearchResults;
