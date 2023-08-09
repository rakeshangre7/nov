import React from 'react';

export type IconProps = {
  className: string;
};

const Icon = (props: IconProps) => {
  return (
    <i
      className={
        'font-icomoon not-italic font-normal normal-case leading-none antialiased flex flex-col justify-center ' +
        props.className
      }
    ></i>
  );
};

export default Icon;
