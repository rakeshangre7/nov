import { Environment, WidgetsProvider } from '@sitecore-search/react';
// import SearchResultsWidget from '@/widgets/SearchResultWidget/index';
import TestResultSampleWidget from '@/widgets/Test-result-sample';

const SearchResults = (): JSX.Element => {
  const env = process.env.SEARCH_ENV as Environment;
  const customerKey = process.env.SEARCH_CUSTOMER_KEY;
  const searchApiKey = process.env.SEARCH_API_KEY;

  return (
    <>
      <WidgetsProvider env={env} customerKey={customerKey} apiKey={searchApiKey}>
        <div className="Test">
          <TestResultSampleWidget rfkId="rfkid_7" />
        </div>
        {/* <div className="search">
          <SearchResultsWidget rfkId="rfkid_7" />
        </div> */}
      </WidgetsProvider>
    </>
  );
};

export default SearchResults;
