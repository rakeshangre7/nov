// Global
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconGallery, IconItem, Title, useOf } from '@storybook/blocks';

import FontAwesomeIcon from 'components/helpers/FontAwesomeIcon/FontAwesomeIcon';

export const FaIconsBlock = ({ of }) => {
  const icons = [];

  Object.entries(fas).forEach(([key, value]) => icons.push(value.iconName));

  icons.sort();

  const filteredIcons = [...new Set(icons)];

  return (
    <>
      <IconGallery>
        {filteredIcons.map((iconName) => (
          <IconItem key={iconName} name={iconName}>
            <FontAwesomeIcon icon={iconName} />
          </IconItem>
        ))}
      </IconGallery>
    </>
  );
};
