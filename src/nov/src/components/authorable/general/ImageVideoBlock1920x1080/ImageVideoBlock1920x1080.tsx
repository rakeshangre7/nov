import VideoBlock, { VideoBlockProps } from '@/components/helpers/VideoBlock/VideoBlock';

const ImageVideoBlock1920x1080 = ({ fields }: VideoBlockProps): JSX.Element => {
  return <VideoBlock fields={fields} />;
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<VideoBlock1920x1080Props>(ImageVideoBlock1920x1080);
export default ImageVideoBlock1920x1080;
