import React from 'react';

// Local

import { Project } from '.generated/templates/Project.Item.model';
import { Sitecore } from '.generated/templates/_.Sitecore.Override';

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
      {htmlContent && <div className="w-full" dangerouslySetInnerHTML={{ __html: htmlContent }} />}
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<SoundcloudPlayerProps>(SoundcloudPlayer);
export default SoundcloudPlayer;
