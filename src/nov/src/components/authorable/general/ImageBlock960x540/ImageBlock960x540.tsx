import ImageBlock, { ImageBlockProps } from '@/components/helpers/ImageBlock/ImageBlock';

const ImageBlock960x540 = ({ fields }: ImageBlockProps): JSX.Element => {
  return <ImageBlock fields={fields} />;
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ImageBlock1920x1080Props>(ImageBlock960x540);
export default ImageBlock960x540;
