// Global
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';

// Local
import FontAwesomeIcon from './FontAwesomeIcon';
import defaultData from './FontAwesomeIcon.mock-data';

const flipOptions = ['horizontal', 'vertical', 'both'];
const iconOptions = Object.keys(fas)
  .map((key) => fas[key].iconName)
  .sort();
const pullOptions = ['left', 'right'];
const rotateOptions = [90, 180, 270];
const sizeOptions = [
  '2xs',
  'xs',
  'sm',
  'lg',
  'xl',
  '2xl',
  '1x',
  '2x',
  '3x',
  '4x',
  '5x',
  '6x',
  '7x',
  '8x',
  '9x',
  '10x',
];

const meta: Meta<typeof FontAwesomeIcon> = {
  argTypes: {
    beat: {
      control: 'boolean',
      defaultValue: false,
      description: 'Use the ```fa-beat``` animation to scale an icon up or down.',
    },
    beatFade: {
      control: 'boolean',
      defaultValue: false,
      description:
        'Use the ```fa-beat-fade``` animation to grab attention by visually scaling and pulsing an icon in and out.',
    },
    border: {
      control: 'boolean',
      defaultValue: false,
      description:
        'Creates a border with ```border-radius``` and ```padding``` applied around an icons.',
    },
    bounce: {
      control: 'boolean',
      defaultValue: false,
      description:
        'Use the ```fa-bounce``` animation to grab attention by visually bouncing an icon up and down.',
    },
    className: {
      defaultValue: '',
      description: 'CSS classes to be applied to the icon.',
    },
    color: {
      defaultValue: '',
      description: 'A custom HEX color to be applied to the icon.',
    },
    fade: {
      control: 'boolean',
      defaultValue: false,
      description: 'Use the ```fa-fade``` animation to fade an icon in and out visually.',
    },
    fixedWidth: {
      control: 'boolean',
      defaultValue: false,
      description:
        'Make the icon a fixed with, regardless of the selected asset. Setting icons to use a fixed-width helps when trying to align icons in a vertical column.',
    },
    flip: {
      control: 'select',
      description:
        'Use the ```fa-flip``` animation to rotate an icon in 3D space (opens new window). By default, flip rotates an icon about the Y axis 180 degrees.',
      options: flipOptions,
    },
    icon: {
      control: 'select',
      defaultValue: 'spinner',
      description: 'The icon to be displayed.',
      options: iconOptions,
    },
    inverse: {
      control: 'boolean',
      defaultValue: false,
      description: 'Invert the color of the icon from black to white or white to black.',
    },
    listItem: {
      control: 'boolean',
      defaultValue: false,
      description: 'Use the icon to replace the default icon in an unordered list.',
    },
    mask: {
      control: 'select',
      description: 'The icon asset to be used as a mask for the primary icon asset.',
      options: iconOptions,
    },
    maskId: {
      defaultValue: '',
      description:
        'The value of the icon ```<mask />``` tag\'s "id" attribute, appended to ```mask-```.',
    },
    pull: {
      control: 'inline-radio',
      description: 'Float the icon to the left or right.',
      options: pullOptions,
    },
    pulse: {
      control: 'boolean',
      defaultValue: false,
      description: 'Apply a "pulse" animation to the icon.',
    },
    rotation: {
      control: 'select',
      description: 'The numer of degrees by which to rotate the icon.',
      options: rotateOptions,
    },
    shake: {
      control: 'boolean',
      defaultValue: false,
      description:
        'Use the ```fa-shake``` animation to grab attention or note that something is not allowed by shaking an icon back and forth.',
    },
    size: {
      control: 'select',
      description: 'The rendered size of the icon.',
      options: sizeOptions,
    },
    spin: {
      control: 'boolean',
      defaultValue: false,
      description: 'Use the ```fa-spin``` class to get any icon to rotate.',
    },
    spinPulse: {
      control: 'boolean',
      defaultValue: false,
      description:
        'Use the ```fa-spin-pulse``` class to get any icon to rotate with eight distinct steps.',
    },
    spinReverse: {
      control: 'boolean',
      defaultValue: false,
      description:
        'If ```fa-spin``` or ```fa-spin-pulse``` animation is applied, reverse the direction.',
    },
    style: {
      control: 'text',
      description: 'CSS style properties to be applied to the icon.',
    },
    swapOpacity: {
      control: 'boolean',
      defaultValue: false,
      description: "Swap the default opacity of each duotone icon's layers. (PRO PLAN REQUIRED.)",
      table: {
        disable: true,
      },
    },
    symbol: {
      control: 'text',
      defaultValue: '',
      description:
        'A SVG symbol to be created so that the icon can be resued within a given component.',
    },
    tabIndex: {
      defaultValue: 0,
      description:
        'Make the icon focusable, allow or prevent it from being sequentially focusable and determine its relative ordering for sequential focus navigation.',
    },
    title: {
      defaultValue: '',
      description: 'The value of the icon ```<svg />```\'s "title" tag.',
    },
    titleId: {
      defaultValue: '',
      description:
        'The value of the icon ```<title />``` tag\'s "id" attribute, appended to ```svg-inline--fa-title-```.',
    },
    transform: {
      defaultValue: '',
      description: 'The power transform to apply to the icon.',
    },
  },
  component: FontAwesomeIcon,
  tags: ['autodocs'],
  title: 'Helpers/General/Font Awesome Icon',
};

export default meta;

type Story = StoryObj<typeof FontAwesomeIcon>;

export const Default: Story = {
  args: {
    ...defaultData,
    icon: defaultData.icon as IconProp,
  },
};
