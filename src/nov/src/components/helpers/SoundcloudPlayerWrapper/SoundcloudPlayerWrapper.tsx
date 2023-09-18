import React from 'react';

// Local

import { Project } from '.generated/templates/Project.Item.model';

export type SoundcloudPlayerWrapperProps = Project.Item.NovShared.FieldSections.Fields.Soundcloud;

const SoundcloudPlayerWrapper = ({ fields }: SoundcloudPlayerWrapperProps): JSX.Element => {
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
// export default withDatasourceCheck()<SoundcloudPlayerWrapperProps>(SoundcloudPlayerWrapper);
export default SoundcloudPlayerWrapper;
