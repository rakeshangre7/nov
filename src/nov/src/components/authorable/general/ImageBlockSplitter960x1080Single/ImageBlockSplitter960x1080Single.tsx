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
export type ImageBlockSplitter960x1080SingleProps = ImageBlockDataProps & {
  rendering?: ImageBlockDataProps | undefined;
};
const ImageBlockSplitter960x1080Single = ({
  rendering,
}: ImageBlockSplitter960x1080SingleProps): JSX.Element => {
  return (
    <>
      <div className="lg:flex lg:flex-col w-full lg:justify-between lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 p-0">
        <div className="lg:h-1/2 relative overflow-hidden w-full">
          <Placeholder
            name="image-block-splitter-960x540-top"
            rendering={rendering as ComponentRendering}
          />
        </div>
        <div className="lg:h-1/2 relative overflow-hidden w-full">
          <Placeholder
            name="image-block-splitter-960x540-bottom"
            rendering={rendering as ComponentRendering}
          />
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ImageBlockSplitter960x1080SingleProps>(ImageBlockSplitter960x1080Single);
export default ImageBlockSplitter960x1080Single;
