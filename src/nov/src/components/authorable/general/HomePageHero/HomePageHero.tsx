// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  text: Field<string>;
}

export type HomePageHeroProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const HomePageHero = ({ fields }: HomePageHeroProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      <div className="container mx-auto font-light italic">
        <div
          className="theme-default bg-theme-bg text-theme-text"
          data-component="authorable/general/HomePageHero"
          data-testid="HomePageHero"
        >
          <p className="text-80 leading-80 text-theme-heading-text">HomePageHero</p>
          <RichTextA11yWrapper data-testid="HomePageHero" field={fields.text} editable />
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<HomePageHeroProps>(HomePageHero);
export default HomePageHero;
