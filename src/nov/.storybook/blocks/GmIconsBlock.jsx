// Global
import React from 'react';
import { IconGallery, IconItem } from '@storybook/blocks';

// Local
import GoogleMaterialSymbol from 'components/helpers/GoogleMaterialSymbol/GoogleMaterialSymbol';

import iconData from '@material-icons/svg/data.json';

export const GmIconsBlock = ({ of }) => {
  return (
    <>
      <IconGallery>
        {iconData.icons.map((icon) => (
          <IconItem key={icon.name} name={icon.name}>
            <GoogleMaterialSymbol icon={icon.name} />
          </IconItem>
        ))}
      </IconGallery>
    </>
  );
};
