// Global
import { createElement, ReactElement } from 'react';

export const TEXT_TAGS = [
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'small',
  'span',
  'del',
  'i',
  'em',
  'b',
  'blockquote',
];

export interface TextProps {
  className?: string;
  id?: string;
  tag: string;
  text: string;
}

const Text = ({ className, id, tag = 'p', text }: TextProps): ReactElement => {
  return createElement(tag, { className, id }, text);
};

export default Text;
