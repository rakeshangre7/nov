import React from 'react';
import './Icon.css';

export type IconProps = {
  className: string;
};

const Icon = (props: IconProps) => {
  return <i className={props.className + " text-[40px]"}></i>;
};

export default Icon;
