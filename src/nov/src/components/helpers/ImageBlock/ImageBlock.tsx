import Button from '@/components/helpers/Button/Button';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import { Field, ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
export interface ImageBlockProps {
  uid?: string;
  componentName?: string;
  dataSource?: string;
  fields?: {
    linkurl?: LinkField;
    imageCropRegion?: Field<string>;
    image?: ImageField;
    headline?: Field<string>;
  };
}
const ImageBlock = ({ fields }: ImageBlockProps) => {
  return (
    <div className="w-full h-auto relative ">
      {fields?.image && <ImageWrapper className="w-full h-auto" field={fields?.image} />}
      <div className="absolute left-0 bottom-0 p-8">
        {fields?.headline && (
          <Text
            tag="h5"
            className="text-base text-white leading-normal font-semibold m-0"
            field={fields?.headline}
          />
        )}
        {fields?.linkurl && fields?.linkurl?.value?.href && fields?.linkurl?.value?.text && (
          <Button
            field={fields?.linkurl}
            variant="tertiary"
            className="!text-white mt-2 !font-medium"
            iconClassName="icon-chevron-right"
            iconPosition="right"
          />
        )}
      </div>
    </div>
  );
};

export default ImageBlock;
