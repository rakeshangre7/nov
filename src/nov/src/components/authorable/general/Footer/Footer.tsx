// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import FooterCopyright from './FooterCopyright';
import Button from '@/components/helpers/Button/Button';
import FooterSocial from './FooterSocial';
import FooterAccordion from './FooterAccordion';

// Local

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  text: Field<string>;
}

export type FooterProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const Footer = ({ fields }: FooterProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  const footerItem = fields?.data?.footerItem;

  const filtereFooterMenu =
    fields?.data?.footerItem?.siteTemplate?.[0]?.homeItem.results?.[0]?.primaryMenu?.results;
  const footerSocial = fields?.data?.footerItem.footerSocialLinks.jsonValue;
  const primaryFooterMenu = filtereFooterMenu.filter(
    (item) => item.hideInFooterNavigation.jsonValue.value === false
  );

  const footerMenu = primaryFooterMenu.map((mainItem) => {
    const filteredSecondaryMenu = mainItem.secondaryMenu.results.filter(
      (secondaryItem) => secondaryItem.hideInFooterNavigation.jsonValue.value === false
    );

    return {
      ...mainItem,
      secondaryMenu: {
        results: filteredSecondaryMenu,
      },
    };
  });

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-3/6 lg:w-[calc(17%)] h-20 lg:h-auto flex items-center order-1 bg-gray-lightest md:grow lg:grow-0 pl-8 lg:pl-20">
          <div className="main-logo">
            <Image field={footerItem?.logo?.jsonValue} />
          </div>
        </div>
        <Button
          className="w-3/6 md:w-[240px] flex order-3"
          field={footerItem?.contactLink.jsonValue}
          variant="button"
        />

        <div className="lg:container w-full max-w-full lg:px-20 order-4">
          <nav className="w-full ">
            <ul className="lg:pt-7 lg:pb-8 lg:grid lg:grid-flow-col justify-stretch">
              {Array.isArray(footerMenu) &&
                footerMenu?.map((Item, index) => <FooterAccordion FMItem={Item} />)}
            </ul>
          </nav>
        </div>
        <FooterSocial footerSocialLink={footerSocial} />
        <FooterCopyright
          copyrightText={footerItem?.copyrightText?.jsonValue}
          footerLinks={footerItem?.footerLinks?.jsonValue}
        />
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<FooterProps>(Footer);
export default Footer;
