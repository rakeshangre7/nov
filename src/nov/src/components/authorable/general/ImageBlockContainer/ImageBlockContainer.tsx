import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageBlockSplitterSingleProps } from '../ImageBlockSplitterSingle/ImageBlockSplitterSingle';

const ImageBlockContainer = (props: ImageBlockSplitterSingleProps): JSX.Element => {
  // Fail out if placeholders aren't present
  // if (placeholders === null || placeholders === undefined) return <></>;

  return (
    <div className="mt-[30px] smd:mt-20 lg:pb-[56.25%] lg:h-0 relative">
      {props?.rendering && (
        <>
          <Placeholder name="image-block-main" rendering={props.rendering} />
        </>
      )}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ImageBlockContainerProps>(ImageBlockContainer);
export default ImageBlockContainer;
