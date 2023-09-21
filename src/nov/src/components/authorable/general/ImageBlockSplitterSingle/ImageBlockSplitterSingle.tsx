import { ComponentRendering, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageBlockProps } from '@/components/helpers/ImageBlock/ImageBlock';
interface ImageBlockDataProps {
  componentName?: string;
  dataSource?: string;
  params?: { [key: string]: string };
  uid?: string;
  rendering: ComponentRendering;
  placeholders?: {
    'image-block-splitter-960x1080-left': ImageBlockProps[];
    'image-block-splitter-960x1080-right': ImageBlockProps[];
  };
}
export type ImageBlockSplitterSingleProps = ImageBlockDataProps & {
  rendering?: ImageBlockDataProps | undefined;
};
const ImageBlockSplitterSingle = ({ rendering }: ImageBlockSplitterSingleProps): JSX.Element => {
  return (
    <>
      <div className="lg:flex w-full smd:justify-between">
        <Placeholder
          name="image-block-splitter-960x1080-left"
          rendering={rendering as ComponentRendering}
        />
        <Placeholder
          name="image-block-splitter-960x1080-right"
          rendering={rendering as ComponentRendering}
        />
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ImageBlockSplitterSingleProps>(ImageBlockSplitterSingle);
export default ImageBlockSplitterSingle;
