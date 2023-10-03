import Button from '@/components/helpers/Button/Button';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import Mp4VideoPlayer from '@/components/helpers/Mp4VideoPlayer/Mp4VideoPlayer';
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
            <Text
              tag="p"
              field={fields?.description}
              className="text-2xs leading-16 lg:text-sm lg:leading-24 font-primary !antialiased text-black mb-[1.25em]"
            />
          )}
        </div>

        <Mp4VideoPlayer
          autoplay={true}
          loop={true}
          muted={true}
          className="w-full h-full !min-w-[528px] max-w-[528px] mb-0 p-0 hidden lg:inline-block"
          controls={false}
          field={{
            image: {
              value: fields.image?.value?.src || '',
            },
            videoid: {
              value: fields?.backgroundVideo?.value || '',
            },
          }}
        />
      </div>
      {fields?.brandCapabilityList?.length && fields?.brandCapabilityList?.length > 0 ? (
        <ul className="mt-6 pl-8 pb-8 smd:gap-20 smd:columns-3">
          {fields?.brandCapabilityList?.map((linkList: LinkField, index: number) => (
            <li className="body2 w-full py-3.5" key={index}>
              <Button
                variant={'standard'}
                field={linkList}
                className="!text-black hover:!text-primary !basicFocusSmallBorder !body2"
              />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<BrandCapabilityListProps>(BrandCapabilityList);
export default BrandCapabilityList;
