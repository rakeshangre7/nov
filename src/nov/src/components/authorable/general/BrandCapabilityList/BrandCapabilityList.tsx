import Button from '@/components/helpers/Button/Button';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import Mp4VideoPlayer from '@/components/helpers/Mp4VideoPlayer/Mp4VideoPlayer';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Field, ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

export type BrandCapabilityListProps = {
  uid?: string;
  componentName: string;
  dataSource?: string;
  params?: { [key: string]: string };
  fields?: {
    description?: Field<string>;
    headline?: Field<string>;
    backgroundVideo?: Field<string>;
    image?: ImageField;
    brandCapabilityList?: LinkField[];
    helpText?: Field<string> | null;
    hideSearch?: boolean;
  };
};
const BrandCapabilityList = ({ fields }: BrandCapabilityListProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  return (
    <div className="container pt-[30px] smd:pt-20">
      <div className="flex">
        <div className="grow py-0 px-8	">
          {fields?.headline && (
            <Text tag="h2" className="text-black my-[0.83em]" field={fields.headline} />
          )}
          {fields?.description && (
            <RichTextA11yWrapper
              field={fields?.description}
              className="text-2xs font-primary leading-16 lg:text-sm lg:leading-24 !antialiased text-black mb-[1em]"
            />
          )}
        </div>
        {!fields?.backgroundVideo?.value && fields?.image?.value?.src && (
          <ImageWrapper
            field={fields.image}
            className="w-full h-full max-w-[528px] mb-0 p-0 hidden lg:inline-block"
          />
        )}
        {fields?.backgroundVideo?.value && (
          <Mp4VideoPlayer
            autoplay={false}
            loop={true}
            muted={true}
            className="w-full h-full !min-w-[528px] max-w-[528px] mb-0 p-0 hidden lg:inline-block"
            controls={false}
            field={{
              image: {
                value: fields.image?.value?.src || '',
              },
              videoid: {
                value: fields?.backgroundVideo?.value,
              },
            }}
          />
        )}
      </div>
      {fields?.brandCapabilityList?.length && fields?.brandCapabilityList?.length > 0 && (
        <ul className="mt-6 pl-8 pb-8 smd:gap-20 columns-3">
          {fields?.brandCapabilityList?.map((linkList: LinkField, index: number) => (
            <li className="body2 w-full py-3.5" key={index}>
              <Button
                variant={'standard'}
                field={linkList}
                className="!text-black lg:hover:!text-primary !basicFocusSmallBorder !body2"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<BrandCapabilityListProps>(BrandCapabilityList);
export default BrandCapabilityList;
