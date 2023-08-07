const defaultData = {
  variant: 'button',
  auto: true,
  iconFullWidth: false,
  disabled: false,
  iconPosition: 'right',
  text: 'About Us',
  field: {
    value: {
      href: 'https://www.horizontaldigital.com',
      text: 'Link with new tab screen reader text',
      linktype: 'external',
      target: '_blank',
    },
  },
  onClick: {},
  ref: null,
  className: '',
  iconClassName: 'icon-arrow-right',
};

const buttonDataWithFullWidthIcon = {
  variant: 'button',
  auto: false,
  iconFullWidth: true,
  disabled: false,
  iconPosition: 'right',
  text: 'About Us',
  field: {
    value: {
      href: 'https://www.horizontaldigital.com',
      text: 'Link with new tab screen reader text',
      linktype: 'external',
      target: '_blank',
    },
  },
  onClick: {},
  ref: null,
  type: 'default',
  className: '',
  iconClassName: 'icon-arrow-right',
};
const primaryData = {
  variant: 'primary',
  auto: false,
  iconFullWidth: true,
  disabled: false,
  iconPosition: 'left',
  text: 'About Us',
  field: {
    value: {
      href: 'https://www.horizontaldigital.com',
      text: 'Link with new tab screen reader text',
      linktype: 'external',
      target: '_blank',
    },
  },
  onClick: {},
  ref: null,
  type: 'default',
  className: '',
  iconClassName: 'icon-arrow-left',
};
const primaryWithWhiteTextData = {
  variant: 'primaryWithWhiteText',
  auto: false,
  iconFullWidth: true,
  disabled: false,
  iconPosition: 'left',
  text: 'About Us',
  field: {
    value: {
      href: 'https://www.horizontaldigital.com',
      text: 'Link with new tab screen reader text',
      linktype: 'external',
      target: '_blank',
    },
  },
  onClick: {},
  ref: null,
  type: 'default',
  className: '',
  iconClassName: 'icon-arrow-left',
};
const secondaryData = {
  variant: 'secondary',
  auto: true,
  iconFullWidth: true,
  disabled: false,
  iconPosition: 'left',
  text: 'About Us',
  field: {
    value: {
      href: 'https://www.horizontaldigital.com',
      text: 'Link with new tab screen reader text',
      linktype: 'external',
      target: '_blank',
    },
  },
  onClick: {},
  ref: null,
  type: 'default',
  className: '',
  iconClassName: 'icon-arrow-left',
};
const secondaryWithRedArrowData = {
  variant: 'secondaryWithRedArrow',
  auto: true,
  iconFullWidth: true,
  disabled: false,
  iconPosition: 'right',
  text: 'About Us',
  field: {
    value: {
      href: 'https://www.horizontaldigital.com',
      text: 'Link with new tab screen reader text',
      linktype: 'external',
      target: '_blank',
    },
  },
  onClick: {},
  ref: null,
  type: 'default',
  className: '',
  iconClassName: 'icon-arrow-right',
};
const baseData = {
  variant: 'base',
  auto: true,
  iconFullWidth: true,
  disabled: false,
  text: 'About Us',
  field: {
    value: {
      href: 'https://www.horizontaldigital.com',
      text: 'Link with new tab screen reader text',
      linktype: 'external',
      target: '_blank',
    },
  },
  onClick: {},
  ref: null,
  type: 'default',
  className: '',
};

export {
  defaultData,
  buttonDataWithFullWidthIcon,
  primaryData,
  primaryWithWhiteTextData,
  secondaryData,
  secondaryWithRedArrowData,
  baseData,
};
