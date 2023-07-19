// Global
import { render } from '@testing-library/react';

// Local
import RichTextA11yWrapper from './RichTextA11yWrapper';
import defaultData, { regExTest } from './RichTextA11yWrapper.mock-data';

const snapshot = (mockData) => {
  const component = render(<RichTextA11yWrapper {...mockData} />);
  expect(component.baseElement).toMatchSnapshot();
};

it('renders common usage correctly', () => {
  snapshot(defaultData);
});

it('handles various attributes, invalid attributes, and character types in <a> tags appropriately and nested tags in <a> tags', () => {
  snapshot(regExTest);
});
