// Global
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ComponentPropsContext, SitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
// Lib
import createComponentFactory from './mock-placeholder';

export const renderComponent = (
  Component,
  {
    componentProps = {},
    staticProps = {},
    componentFactory = createComponentFactory(),
    sitecoreContext = {
      route: {
        name: 'Foo',
        placeholders: {},
      },
    },
  }
) =>
  render(
    <ComponentPropsContext value={staticProps}>
      <SitecoreContext componentFactory={componentFactory} context={sitecoreContext}>
        <Component {...componentProps} />
      </SitecoreContext>
    </ComponentPropsContext>
  );

export const snapshot = (Component, mockData) => {
  const component = renderComponent(Component, mockData);
  expect(component.container.firstChild).toMatchSnapshot();
  return component;
};

export const hasDataComponent = (component, name) => {
  const nodes = component.baseElement.querySelectorAll(`[data-component="${name}"]`);
  expect(nodes.length).toBe(1);
};

jest.spyOn(global.Date, 'now').mockImplementation(() => new Date(epochMs).valueOf());

export const testFieldError = async (Component, mockData, { label, value, error }) => {
  const component = renderComponent(Component, mockData);
  const field = component.getByLabelText(label);
  fireEvent.change(field, { target: { value } });
  field.blur();
  await waitFor(() => {
    const err = component.queryByText(error);
    return expect(err).not.toBe(null);
  });
};
