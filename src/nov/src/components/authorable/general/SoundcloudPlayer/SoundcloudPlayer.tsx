import React from 'react';

// Local

import { Project } from '.generated/templates/Project.Item.model';
import { Sitecore } from '.generated/templates/_.Sitecore.Override';
import SoundcloudPlayerWrapper from '@/components/helpers/SoundcloudPlayerWrapper/SoundcloudPlayerWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

// interface Fields {
//   videoURL: {
//     value: string;
//   };
// }
export type SoundcloudPlayerProps = Sitecore.Override.ComponentBase &
  Project.Item.NovShared.FieldSections.Fields.Soundcloud;

const SoundcloudPlayer = ({ fields }: SoundcloudPlayerProps): JSX.Element => {
  // Fail out if fields aren't present

  if (fields === null || fields === undefined) return <></>;
  const htmlContent = fields?.soundcloudembedcode?.value && fields?.soundcloudembedcode?.value;
  return (
    <>
      <div className="smd:pt-20 pt-[30px]">
        <div className="container">
          <div className="max-w-[736px] m-auto">
            {htmlContent && <SoundcloudPlayerWrapper fields={fields} />}
          </div>
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<SoundcloudPlayerProps>(SoundcloudPlayer);
export default SoundcloudPlayer;
