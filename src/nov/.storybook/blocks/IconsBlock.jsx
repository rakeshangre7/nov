// Global
import { IconGallery, IconItem } from '@storybook/blocks';
import Icon from 'components/helpers/Icon/Icon';
import { iconList } from 'components/helpers/Icon/Icon.mock-data.ts';

export const IconsBlock = () => {
  return (
      <IconGallery>
        {iconList.map((iconName) => (
          <IconItem key={iconName} name={iconName}>
            <Icon className={iconName} />
          </IconItem>
        ))}
      </IconGallery>
  );
};
