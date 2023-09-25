import ImageBlock, { ImageBlockProps } from '@/components/helpers/ImageBlock/ImageBlock';

const ImageBlock1920x1080 = ({ fields }: ImageBlockProps): JSX.Element => {
  return <ImageBlock fields={fields} />;
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ImageBlock1920x1080Props>(ImageBlock1920x1080);
export default ImageBlock1920x1080;
