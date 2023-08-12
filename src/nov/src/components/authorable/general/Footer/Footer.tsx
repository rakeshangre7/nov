// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field, Image, Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import FooterCopyright from './FooterCopyright';
import Icon from 'components/helpers/Icon/Icon';
import { useBreakpoints } from '../../../utility/breakpoints';
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
  const { isDesktop } = useBreakpoints();
  const footerItem = fields?.data?.footerItem;

  const footerMenu =
    fields?.data?.footerItem?.siteTemplate?.[0]?.homeItem.results?.[0]?.primaryMenu?.results;
  const footerSocial = fields?.data?.footerItem.footerSocialLinks.jsonValue;

  const handleClick = (e) => {
    e.preventDefault();
    // write your logic for on click
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-3/6 lg:w-[calc(20%+12px)] h-20 lg:h-auto flex items-center order-1 bg-gray-lightest md:grow lg:grow-0 pl-8 lg:pl-20">
          <div className="main-logo">
            <Image field={footerItem?.logo?.jsonValue} />
          </div>
        </div>
        <Button
          className="w-3/6 md:w-64 flex order-3"
          field={footerItem?.contactLink.jsonValue}
          variant="button"
        />

        <div className="lg:container w-full max-w-full lg:px-20 order-4">
          <nav className="module A3-footer__nav js-accordion w-full ">
            <ul className="FooterNavList lg:grid lg:grid-flow-col justify-stretch">
              {footerMenu?.map((Item, index) => (
                <FooterAccordion Item1={Item} />
              ))}
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
