import { ComponentRendering, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageBlock960x1080Props } from '../ImageBlock960x1080/ImageBlock960x1080';
interface ImageBlockProps {
  componentName?: string;
  dataSource?: string;
  params?: { [key: string]: string };
  uid?: string;
  rendering: ComponentRendering;
  placeholders?: {
    'image-block-splitter-960x1080-left': ImageBlock960x1080Props[];
    'image-block-splitter-960x1080-right': ImageBlock960x1080Props[];
  };
}
export type ImageBlockSplitterSingleProps = ImageBlockProps & {
  rendering?: ImageBlockProps | undefined;
};
const ImageBlockSplitterSingle = ({ rendering }: ImageBlockSplitterSingleProps): JSX.Element => {
  return (
    <>
      <div className="lg:flex w-full smd:justify-between">
        <div className="w-6/12">
          <Placeholder
            name="image-block-splitter-960x1080-left"
            rendering={rendering as ComponentRendering}
          />
        </div>
        <div className="w-6/12">
          <Placeholder
            name="image-block-splitter-960x1080-right"
            rendering={rendering as ComponentRendering}
          />
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ImageBlockSplitterSingleProps>(ImageBlockSplitterSingle);
export default ImageBlockSplitterSingle;
