import Button from '@/components/helpers/Button/Button';
import { Field, ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Mp4VideoPlayer from '../Mp4VideoPlayer/Mp4VideoPlayer';
export interface VideoBlockProps {
  uid?: string;
  componentName?: string;
  dataSource?: string;
  fields?: {
    linkurl?: LinkField;
    imageCropRegion?: Field<string>;
    image?: ImageField;
    video?: Field<string>;
    headline?: Field<string>;
  };
}
const VideoBlock = ({ fields }: VideoBlockProps) => {
  return (
    <div className="w-full h-auto relative ">
      {fields?.video?.value && (
        <Mp4VideoPlayer
          autoplay={true}
          loop={true}
          muted={true}
          className="w-full h-auto"
          controls={false}
          field={{
            image: {
              value: fields?.image?.value?.src || '',
            },
            videoid: {
              value: fields?.video?.value,
            },
          }}
        />
      )}
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

export default VideoBlock;
