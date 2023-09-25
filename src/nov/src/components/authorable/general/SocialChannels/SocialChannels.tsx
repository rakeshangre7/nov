// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Icon from 'components/helpers/Icon/Icon';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { useEffect, useState } from 'react';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
type iconsProps = {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    socialChannel: Field<string>;
    socialChannelUrl: Field<string>;
  };
};
interface Fields {
  backgroundColor?: Field<string>;
  copy: Field<string>;
  headline: Field<string>;
  socialIcons: iconsProps[];
}

export type SocialChannelsProps = {
  uid: string;
  componentName: string;
  dataSource?: string;
  params?: { [key: string]: string };
  fields: Fields;
};

const SocialChannels = ({ fields }: SocialChannelsProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');
  useEffect(() => {
    setBackgroundColor(
      fields?.backgroundColor?.value?.split('-')?.[1]
        ? `#${fields?.backgroundColor?.value?.split('-')?.[1]}`
        : `#FFFFFF`
    );
  }, []);
  return (
    <>
      <div
        className={`pt-[30px] smd:pt-20 text-center`}
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="container">
          <div className="max-w-[600px] m-auto">
            <Text
              tag="h3"
              field={fields?.headline}
              className="text-black mb-5 lg:text-7xl text-4xl lg:leading-56 leading-42 font-bold tracking-normal"
            />
            <RichTextA11yWrapper
              className="mb-8 text-sm [&_p]:text-base leading-24 [&_p]:lg:leading-32 [&_p]:leading-28  text-gray-dark"
              field={fields?.copy}
            />
            <ul className="flex justify-center">
              {fields?.socialIcons.length > 0 &&
                fields?.socialIcons.map((elem: iconsProps, id: number) => {
                  return (
                    <li key={id} className="m-[15px]">
                      {elem?.fields?.socialChannelUrl?.value && (
                        <a
                          href={elem?.fields?.socialChannelUrl?.value}
                          target="_blank"
                          rel="noreferrer"
                          className="focus:outline-none hover:!no-underline"
                        >
                          <Icon className={`text-5xl icon-${elem?.fields?.socialChannel?.value}`} />
                        </a>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
export default SocialChannels;
