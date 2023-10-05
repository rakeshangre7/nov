import VideoBlock, { VideoBlockProps } from '@/components/helpers/VideoBlock/VideoBlock';

const ImageVideoBlock960x540 = ({ fields }: VideoBlockProps): JSX.Element => {
  return <VideoBlock fields={fields} />;
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<VideoBlock1920x1080Props>(ImageVideoBlock960x540);
export default ImageVideoBlock960x540;
