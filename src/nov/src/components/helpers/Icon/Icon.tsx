import React from 'react';

export type IconProps = {
  className: string;
};

const Icon = (props: IconProps) => {
  return <i className={props.className + ' text-[40px]'}></i>;
};

export default Icon;
