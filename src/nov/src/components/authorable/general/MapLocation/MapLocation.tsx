// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  text: Field<string>;
}

export type MapLocationProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const MapLocation = ({ fields }: MapLocationProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      <div className="w-full pt-[30px] smd:pt-20">
        <div className="w-full relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
            src="https://locator.nov.com/?searchTerm="
          ></iframe>
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<MapLocationProps>(MapLocation);
export default MapLocation;
