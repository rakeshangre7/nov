import Icon from 'components/helpers/Icon/Icon';
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

export type FooterSocialProps = {
  footerSocialLink: {
    jsonValue: SocialLinks[];
  };
};
const FooterSocial = ({ footerSocialLink }: FooterSocialProps) => {
  return (
    <div className="grow flex items-center align-middle lg:order-2 order-5 bg-white lg:bg-gray-lightest py-11 lg:py-9">
      <ul className="w-full flex text-4xl justify-around md:w-3/5">
        {Array.isArray(footerSocialLink.jsonValue) &&
          footerSocialLink?.jsonValue.map((Item: SocialLinks, index: number) => (
            <li key={index}>
              {Item?.fields?.socialChannelUrl?.value && (
                <a
                  href={Item?.fields?.socialChannelUrl?.value}
                  target="_blank"
                  className="focus:outline-none hover:!no-underline"
                  rel="noreferrer"
                >
                  <Icon className={`icon-${Item.fields.socialChannel.value}`} />
                </a>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterSocial;
