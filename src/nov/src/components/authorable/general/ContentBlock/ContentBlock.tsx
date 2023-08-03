// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  text: Field<string>;
}

export type ContentBlockProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      <div className="container mx-auto  font-light italic">
        <div
          className="bg-theme-bg border border-b-4 border-b-primary border-black dark:border-gray dark:border-b-primary max-w-lg p-2 rounded"
          data-component="authorable/general/contentblock"
          data-testid="contentblock"
        >
          <p className="text-80 leading-80">ContentBlock</p>
          <RichTextA11yWrapper data-testid="contentblock" field={fields.text} editable />
          <div className="grid gap-8 grid-cols-3">
            <div className="text-gray">01</div>
            <div className="bg-red">02</div>
            <div className="bg-red">03</div>
            <div className="bg-red">04</div>
          </div>
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
export default ContentBlock;
