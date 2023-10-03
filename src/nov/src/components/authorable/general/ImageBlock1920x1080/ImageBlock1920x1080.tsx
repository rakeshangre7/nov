import ImageBlock, { ImageBlockProps } from '@/components/helpers/ImageBlock/ImageBlock';

const ImageBlock1920x1080 = ({ fields }: ImageBlockProps): JSX.Element => {
  return (
    <div className="lg:flex w-full lg:justify-between lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 p-0">
      <ImageBlock fields={fields} />
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ImageBlock1920x1080Props>(ImageBlock1920x1080);
export default ImageBlock1920x1080;
