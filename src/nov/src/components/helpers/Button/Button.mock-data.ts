const defaultData = {
  auto: false,
  disabled: false,
  label: 'Button',
  loading: false,
  onClick: (): void => console.log('A button was clicked!'),
  ref: null,
  tag: 'button',
  type: 'default',
};

export default defaultData;

export const disabled = {
  ...defaultData,
  disabled: true,
};

export const iconLeft = {
  ...defaultData,
  iconLeft: 'calendar',
  label: 'Button',
};

export const iconOnly = {
  ...defaultData,
  auto: true,
  iconLeft: 'power-off',
  label: undefined,
};

export const iconRight = {
  ...defaultData,
  iconRight: 'calendar',
  label: 'Button',
};

export const loading = {
  ...defaultData,
  loading: true,
};
