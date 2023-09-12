import React from 'react';

// Local

import YoutubeVideoPlayer from '@/components/helpers/YoutubeVideoPlayer/YoutubeVideoPlayer';
import { Project } from '.generated/templates/Project.Item.model';
import { Sitecore } from '.generated/templates/_.Sitecore.Override';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

// interface Fields {
//   videoURL: {
//     value: string;
//   };
// }
export type VideoPlayerProps = Sitecore.Override.ComponentBase &
  Project.Item.NovCom.Modules.Fields.VideoPlayer;

const VideoPlayer = ({ fields }: VideoPlayerProps): JSX.Element => {
  // Fail out if fields aren't present

  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      {fields?.videoURL?.value && (
        <div className="w-full pt-[30px] smd:pt-20">
          <div className="mx-auto max-w-[928px] smd:px-11">
            <YoutubeVideoPlayer
              field={{
                videoURL: {
                  value: fields?.videoURL?.value,
                },
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<VideoPlayerProps>(VideoPlayer);
export default VideoPlayer;
