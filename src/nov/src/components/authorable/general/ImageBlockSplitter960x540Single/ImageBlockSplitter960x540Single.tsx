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
export type ImageBlockSplitter960x540SingleProps = ImageBlockDataProps & {
  rendering?: ImageBlockDataProps | undefined;
};
const ImageBlockSplitter960x540Single = ({
  rendering,
}: ImageBlockSplitter960x540SingleProps): JSX.Element => {
  return (
    <>
      <div className="flex w-full justify-between lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 p-0">
        <div className="w-1/2 relative overflow-hidden h-auto">
          <Placeholder
            name="image-block-splitter-480x540-left"
            rendering={rendering as ComponentRendering}
          />
        </div>
        <div className="w-1/2 relative overflow-hidden h-auto">
          <Placeholder
            name="image-block-splitter-480x540-right"
            rendering={rendering as ComponentRendering}
          />
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ImageBlockSplitter960x540SingleProps>(ImageBlockSplitter960x540Single);
export default ImageBlockSplitter960x540Single;
