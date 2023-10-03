import VideoBlock, { VideoBlockProps } from '@/components/helpers/VideoBlock/VideoBlock';

const ImageVideoBlock480x540 = ({ fields }: VideoBlockProps): JSX.Element => {
  return <VideoBlock fields={fields} />;
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<VideoBlock1920x1080Props>(ImageVideoBlock480x540);
export default ImageVideoBlock480x540;
