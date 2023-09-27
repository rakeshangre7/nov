import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { debounce } from '@sitecore-search/common';
import type { SearchResultsInitialState, SearchResultsStoreState } from '@sitecore-search/react';
import {
  WidgetDataType,
  useSearchResults,
  useSearchResultsSelectedFacets,
  widget,
} from '@sitecore-search/react';
import { AccordionFacets, Pagination, Presence, Select } from '@sitecore-search/ui';

import {
  AccordionFacetsStyled,
  ArticleCardStyled,
  FiltersStyled,
  GridStyled,
  InputStyled,
  LoaderAnimation,
  LoaderContainer,
  PageControlsStyled,
  PaginationStyled,
  QuerySummaryStyled,
  SearchResultsLayout,
  SelectStyled,
} from './styled';

type ArticleModel = {
  id: string;
  type?: string;
  title?: string;
  name?: string;
  subtitle?: string;
  url?: string;
  description?: string;
  content_text?: string;
  image_url?: string;
  source_id?: string;
};

type ArticlesSearchResultsProps = {
  defaultPage?: SearchResultsStoreState['page'];
  defaultItemsPerPage?: SearchResultsStoreState['itemsPerPage'];
  defaultKeyphrase?: SearchResultsStoreState['keyphrase'];
};

type InitialState = SearchResultsInitialState<'itemsPerPage' | 'keyphrase' | 'page'>;

export const TestResultSampleComponent = ({
  defaultPage = 1,
  defaultKeyphrase = '',
  defaultItemsPerPage = 24,
}: ArticlesSearchResultsProps) => {
  const {
    widgetRef,
    actions: {
      onKeyphraseChange,
      onResultsPerPageChange,
      onPageNumberChange,
      onFilterClick,
      onFacetClick,
      onClearFilters,
      onItemClick,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state: { page, itemsPerPage },
    queryResult: {
      isFetching,
      isLoading,
      data: { total_item: totalItems = 0, facet: facets = [], content: articles = [] } = {},
    },
  } = useSearchResults<ArticleModel, InitialState>({
    state: {
      page: defaultPage,
      itemsPerPage: defaultItemsPerPage,
      keyphrase: defaultKeyphrase,
    },
  });
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const keyphraseChangeFn = debounce((e) => {
    onKeyphraseChange({ keyphrase: e.target.value });
  }, 200);
  const selectedFacetsFromApi = useSearchResultsSelectedFacets();

  // console.log("=======", data);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Presence present={isLoading}>
          <LoaderAnimation
            aria-busy={isLoading}
            aria-hidden={!isLoading}
            focusable="false"
            role="progressbar"
            viewBox="0 0 20 20"
          >
            <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" />
          </LoaderAnimation>
        </Presence>
      </LoaderContainer>
    );
  }
  return (
    <SearchResultsLayout.Wrapper ref={widgetRef}>
      <InputStyled>
        <input onChange={(e) => keyphraseChangeFn(e)} />
        <MagnifyingGlassIcon />
      </InputStyled>
      <SearchResultsLayout.MainArea>
        {isFetching && (
          <LoaderContainer>
            <Presence present={true}>
              <LoaderAnimation
                aria-busy={true}
                aria-hidden={false}
                focusable="false"
                role="progressbar"
                viewBox="0 0 20 20"
              >
                <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" />
              </LoaderAnimation>
            </Presence>
          </LoaderContainer>
        )}
        {totalItems > 0 && (
          <>
            <SearchResultsLayout.LeftArea>
              {selectedFacetsFromApi.length > 0 && (
                <FiltersStyled.ClearFilters onClick={onClearFilters}>
                  Clear Filters
                </FiltersStyled.ClearFilters>
              )}
              <FiltersStyled.SelectedFiltersList>
                {selectedFacetsFromApi.map((selectedFacet) =>
                  selectedFacet.values.map((v) => (
                    <FiltersStyled.SelectedFiltersListItem key={`${selectedFacet.id}@${v.id}`}>
                      <FiltersStyled.SelectedFiltersListItemText>
                        {selectedFacet.name}: {v.text}
                      </FiltersStyled.SelectedFiltersListItemText>
                      <FiltersStyled.SelectedFiltersListItemButton
                        onClick={() =>
                          onFilterClick({
                            facetId: selectedFacet.id,
                            facetValueId: v.id,
                            checked: false,
                          })
                        }
                      >
                        X
                      </FiltersStyled.SelectedFiltersListItemButton>
                    </FiltersStyled.SelectedFiltersListItem>
                  ))
                )}
              </FiltersStyled.SelectedFiltersList>
              <AccordionFacetsStyled.Root
                defaultFacetTypesExpandedList={[]}
                onFacetValueClick={onFacetClick}
              >
                {facets.map((f) => (
                  <AccordionFacetsStyled.Facet facetId={f.name} key={f.name}>
                    <AccordionFacetsStyled.Header>
                      <AccordionFacetsStyled.Trigger>{f.label}</AccordionFacetsStyled.Trigger>
                    </AccordionFacetsStyled.Header>
                    <AccordionFacets.Content>
                      <AccordionFacetsStyled.ValueList>
                        {f.value.map((v, index) => (
                          <AccordionFacetsStyled.Item {...{ index, facetValueId: v.id }} key={v.id}>
                            <AccordionFacetsStyled.ItemCheckbox>
                              <AccordionFacetsStyled.ItemCheckboxIndicator>
                                <CheckIcon />
                              </AccordionFacetsStyled.ItemCheckboxIndicator>
                            </AccordionFacetsStyled.ItemCheckbox>
                            <AccordionFacetsStyled.ItemCheckboxLabel>
                              {v.text} {v.count && `(${v.count})`}
                            </AccordionFacetsStyled.ItemCheckboxLabel>
                          </AccordionFacetsStyled.Item>
                        ))}
                      </AccordionFacetsStyled.ValueList>
                    </AccordionFacets.Content>
                  </AccordionFacetsStyled.Facet>
                ))}
              </AccordionFacetsStyled.Root>
            </SearchResultsLayout.LeftArea>
            <SearchResultsLayout.RightArea>
              {/* Sort Select */}
              <SearchResultsLayout.RightTopArea>
                {totalItems && (
                  <QuerySummaryStyled>
                    Showing {itemsPerPage * (page - 1) + 1} -{' '}
                    {itemsPerPage * (page - 1) + articles.length} of {totalItems} results
                  </QuerySummaryStyled>
                )}
              </SearchResultsLayout.RightTopArea>

              {/* Results */}
              <GridStyled>
                {articles.map((a, index) => (
                  <ArticleCardStyled.Root key={a.id} article={a as ArticleModel}>
                    <ArticleCardStyled.Title>
                      <ArticleCardStyled.Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          onItemClick({ id: a.id, index, sourceId: a.source_id });
                        }}
                      >
                        {a.title || a.name}
                      </ArticleCardStyled.Link>
                    </ArticleCardStyled.Title>
                    <ArticleCardStyled.Content>
                      <ArticleCardStyled.Image />
                      {a.content_text}
                    </ArticleCardStyled.Content>
                  </ArticleCardStyled.Root>
                ))}
              </GridStyled>

              <PageControlsStyled>
                <div>
                  <label>Results Per Page</label>
                  <Select.Root
                    defaultValue={String(defaultItemsPerPage)}
                    onValueChange={(v) => onResultsPerPageChange({ numItems: Number(v) })}
                  >
                    <SelectStyled.Trigger>
                      <SelectStyled.SelectValue />
                      <SelectStyled.Icon />
                    </SelectStyled.Trigger>
                    <SelectStyled.Content>
                      <SelectStyled.Viewport>
                        <SelectStyled.Option value="24">
                          <span>24</span>
                        </SelectStyled.Option>

                        <SelectStyled.Option value="48">
                          <span>48</span>
                        </SelectStyled.Option>

                        <SelectStyled.Option value="64">
                          <span>64</span>
                        </SelectStyled.Option>
                      </SelectStyled.Viewport>
                    </SelectStyled.Content>
                  </Select.Root>
                </div>
                <div>
                  <PaginationStyled.Root
                    currentPage={page}
                    defaultCurrentPage={1}
                    totalPages={totalPages}
                    onPageChange={(v) => onPageNumberChange({ page: v })}
                  >
                    <PaginationStyled.PrevPage onClick={(e) => e.preventDefault()}>
                      <ArrowLeftIcon />
                    </PaginationStyled.PrevPage>
                    <PaginationStyled.Pages>
                      {(pagination) =>
                        Pagination.paginationLayout(pagination, {
                          boundaryCount: 1,
                          siblingCount: 1,
                        }).map(({ page, type }) =>
                          type === 'page' ? (
                            <PaginationStyled.Page
                              key={page}
                              aria-label={`Page ${page}`}
                              page={page as number}
                              onClick={(e) => e.preventDefault()}
                            >
                              {page}
                            </PaginationStyled.Page>
                          ) : (
                            <span key={type}>...</span>
                          )
                        )
                      }
                    </PaginationStyled.Pages>
                    <PaginationStyled.NextPage onClick={(e) => e.preventDefault()}>
                      <ArrowRightIcon />
                    </PaginationStyled.NextPage>
                  </PaginationStyled.Root>
                </div>
              </PageControlsStyled>
            </SearchResultsLayout.RightArea>
          </>
        )}
        {totalItems <= 0 && !isFetching && (
          <SearchResultsLayout.NoResults>
            <h3>0 Results</h3>
          </SearchResultsLayout.NoResults>
        )}
      </SearchResultsLayout.MainArea>
    </SearchResultsLayout.Wrapper>
  );
};

const TestResultSampleWidget = widget(
  TestResultSampleComponent,
  WidgetDataType.SEARCH_RESULTS,
  'content'
);

export default TestResultSampleWidget;
