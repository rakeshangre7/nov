import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import Icon from 'components/helpers/Icon/Icon';
export type FooterSocialProps = {
  fields?: Field<string>;
};
const FooterSocial = ({ footerSocialLink }: FooterSocialProps) => {
  return (
    <div className="grow flex items-center align-middle lg:order-2 order-5 bg-white lg:bg-gray-lightest py-11 lg:py-9">
      <ul className="w-full flex text-4xl justify-around md:w-3/5">
        {Array.isArray(footerSocialLink) &&
          footerSocialLink?.map((Item, index) => (
            <li key={index}>
              <a
                href={Item.fields.socialChannelUrl.value}
                target="_blank"
                className="focus:outline-none"
              >
                <Icon className={`icon-${Item.fields.socialChannel.value}`} />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterSocial;
