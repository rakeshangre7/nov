// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

// Local

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  businessSegment?: null | undefined;
  disableControls?: Field<boolean>;
  facilities?: Field<string>;
  locations?: Field<string>;
  searchTerm?: Field<string>;
}

export type MapLocationProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const MapLocation = ({ fields }: MapLocationProps): JSX.Element => {
  // Fail out if fields aren't present
  if (!fields || !fields.locations || !fields.locations.value) return <></>;
  const locationsValue = fields?.locations?.value;
  const iframeSrc = `https://locator.nov.com/?searchTerm=${locationsValue}`;
  return (
    <>
      <div className="w-full pt-[30px] smd:pt-20">
        <div className="w-full relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
            src={iframeSrc}
          ></iframe>
          <div
            id="test"
            dangerouslySetInnerHTML={{
              __html: `<div class="module eloqua-form" data-name="eloqua-form"
                 data-business-unit="${fields?.businessSegment || ''}"
                 data-business-segments="${fields?.disableControls?.value || ''}"
                 data-facilities="${fields?.facilities?.value || ''}"
                 data-location="${fields?.locations?.value || ''}"
                 data-search-term="${fields?.searchTerm?.value || ''}"
                 data-page-url="http://qa.nov.com:3000"
                 data-page-title="Contact Us">
            </div>`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<MapLocationProps>(MapLocation);
export default MapLocation;
