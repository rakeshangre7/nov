import React from 'react';

export type IconProps = {
  className: string;
};

const Icon = (props: IconProps) => {
  return (
    <i
      className={
        props.className +
        ' font-icomoon not-italic font-normal normal-case leading-none antialiased'
      }
    ></i>
  );
};

export default Icon;
