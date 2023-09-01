// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field, Image, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import FooterCopyright from './FooterCopyright';
import Button from '@/components/helpers/Button/Button';
import FooterSocial from './FooterSocial';
import FooterAccordion from './FooterAccordion';

// Local

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface LinksItem {
  id: string;
  url: string;
  name: string;
  displayName: string;
  index?: number;
  fields?: {
    link: LinkField;
  };
}
interface SocialLinks {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    socialChannelUrl: {
      value: string;
    };
    socialChannel: {
      value?: string;
    };
  };
}
interface Fields {
  data: {
    footerItem: {
      logo: {
        jsonValue: ImageField;
      };
      contactLink: {
        jsonValue: LinkField;
      };
      copyrightText: {
        jsonValue: Field<string>;
      };
      footerLinks: {
        jsonValue: Array<LinksItem>;
      };
      footerSocialLinks: {
        jsonValue: SocialLinks[];
      };
    };
    homeItem: {
      primaryMenu: {
        results: Array<NavLink>;
      };
    };
  };
}
interface NavLink {
  menuTitle: {
    jsonValue: Field<string>;
  };
  primaryURL: {
    path: string;
    url: string;
  };
  hideInNavigation: {
    jsonValue: {
      value: boolean;
    };
  };
  hideInFooterNavigation: {
    jsonValue: {
      value: boolean;
    };
  };
  secondaryMenu: {
    results: Array<SecondaryMenu>;
  };
  secondaryMenu2: {
    results: Array<SecondaryMenu>;
  };
}
interface SecondaryMenu {
  menuTitle: {
    jsonValue: Field<string>;
  };
  primaryURL: {
    path: string;
    url: string;
  };
  hideInNavigation: {
    jsonValue: {
      value: boolean;
    };
  };
  hideInFooterNavigation: {
    jsonValue: {
      value: boolean;
    };
  };
}

export type FooterProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  uid: string;
  componentName: string;
  dataSource?: string;
  fields: Fields;
};

const Footer = ({ fields }: FooterProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  const footerItem = fields?.data?.footerItem;
  const filtereFooterMenu = fields?.data?.homeItem?.primaryMenu?.results;
  // const footerSocial = fields?.data?.footerItem?.footerSocialLinks?.jsonValue;
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
          className="w-3/6 lg:w-[240px] md:w-[205px] flex order-3"
          field={footerItem?.contactLink.jsonValue}
          variant="button"
        />

        <div className="lg:container w-full max-w-full lg:px-20 order-4">
          <nav className="w-full ">
            <ul className="lg:pt-7 lg:pb-8 lg:grid lg:grid-flow-col justify-stretch">
              {Array.isArray(footerMenu) &&
                footerMenu?.map((Item: NavLink, index: number) => (
                  <FooterAccordion FMItem={Item} key={index} />
                ))}
            </ul>
          </nav>
        </div>

        {footerItem?.footerSocialLinks?.jsonValue?.length > 0 ? (
          <FooterSocial footerSocialLink={footerItem?.footerSocialLinks} />
        ) : (
          <></>
        )}

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
