import VideoBlock, { VideoBlockProps } from '@/components/helpers/VideoBlock/VideoBlock';

const ImageVideoBlock1920x1080 = ({ fields }: VideoBlockProps): JSX.Element => {
  return (
    <div className="lg:flex w-full lg:justify-between lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 p-0">
      <VideoBlock fields={fields} />;
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<VideoBlock1920x1080Props>(ImageVideoBlock1920x1080);
export default ImageVideoBlock1920x1080;
