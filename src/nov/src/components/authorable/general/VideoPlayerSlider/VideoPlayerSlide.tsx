import React from 'react';
import useExperienceEditor from 'lib/use-experience-editor';
// Local
import YoutubeVideoPlayer from '@/components/helpers/YoutubeVideoPlayer/YoutubeVideoPlayer';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

interface Fields {
  data?: {
    item?: {
      videoURL?: {
        value?: string;
      };
    };
  };
}
export type VideoPlayerSlideProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  uid: string;
  componentName: string;
  dataSource?: string;
  fields: Fields;
};

const VideoPlayerSlide = ({ fields }: VideoPlayerSlideProps): JSX.Element => {
  // Fail out if fields aren't present
  const isExperienceEditor = useExperienceEditor();
  if (fields === null || fields === undefined) return <></>;

  // Just a pass through if it's EE.
  if (isExperienceEditor) {
    return (
      <div>
        <p>video Id: {fields?.data?.item?.videoURL?.value}</p>
      </div>
    );
  }
  return (
    <div className="w-full">
      {fields?.data?.item?.videoURL?.value && (
        <YoutubeVideoPlayer
          field={{
            videoURL: {
              value: fields?.data?.item?.videoURL?.value,
            },
          }}
        />
      )}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<VideoPlayerSlideProps>(VideoPlayerSlide);
export default VideoPlayerSlide;
