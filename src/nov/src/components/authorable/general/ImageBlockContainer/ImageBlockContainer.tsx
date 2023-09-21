import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageBlockSplitterSingleProps } from '../ImageBlockSplitterSingle/ImageBlockSplitterSingle';

const ImageBlockContainer = (props: ImageBlockSplitterSingleProps): JSX.Element => {
  // Fail out if placeholders aren't present
  // if (placeholders === null || placeholders === undefined) return <></>;

  console.log('props', props);
  return (
    <div className="pt-[30px] smd:pt-20">
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
