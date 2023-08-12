import Button from '@/components/helpers/Button/Button';
<<<<<<< HEAD
import { Field, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
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

export type FooterCopyrightProps = {
  copyrightText?: Field<string>;
  footerLinks: LinksItem[];
=======
import clsx from 'clsx';
import { Field, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

export type FooterCopyrightProps = {
  copyrightText?: Field<string>;

  portalRegisterUrl?: LinkField;
  portalLoginUrl?: LinkField;
>>>>>>> 49100d77 (Nov-152 Footer)
};
const FooterCopyright = ({ footerLinks, copyrightText }: FooterCopyrightProps) => {
  return (
    <div className="bg-gray-lightest order-6 w-full">
<<<<<<< HEAD
      <div className="container max-w-full px-8 lg:px-20 pt-6 pb-10 lg:py-8 md:flex md:justify-between">
        <ul className="flex pb-4 lg:pb-0">
          {footerLinks?.map(
            (Links: LinksItem, index: number) =>
              Links?.fields?.link.value.href && (
                <li
                  key={index}
                  className="after:content-['|'] flex last:after:hidden [&>*]:text-sm [&>*]:leading-24 text-black after:px-2"
                >
                  <Button
                    auto
                    className="!text-black whitespace-nowrap"
                    field={Links?.fields?.link}
                    variant="standard"
                  />
                </li>
              )
          )}
=======
      <div className="container max-w-full px-8 lg:px-20 pt-6 pb-10 md:flex md:justify-between">
        <ul className="flex pb-4">
          {footerLinks?.map((Links, index) => (
            <li
              key={index}
              className="after:content-['|'] flex last:after:hidden [&>*]:text-sm [&>*]:leading-24 text-black after:px-2"
            >
              <Button
                auto
                className="!text-black whitespace-nowrap"
                field={Links?.fields?.link}
                variant="standard"
              />
            </li>
          ))}
>>>>>>> 49100d77 (Nov-152 Footer)
        </ul>
        <Text
          field={copyrightText}
          editable={true}
          tag="p"
          className="text-black text-sm leading-24"
        />
      </div>
    </div>
  );
};

export default FooterCopyright;
