import React, { MouseEventHandler, CSSProperties } from 'react';

export type IconProps = {
  className: string;
  id?: string;
  onClick?: MouseEventHandler;
  style?: CSSProperties; // Add this line to include the style property
};

const Icon = ({ className, ...props }: IconProps) => {
  return (
    <i
      className={
        'font-icomoon not-italic font-normal normal-case leading-none antialiased flex flex-col justify-center ' +
        className
      }
      {...props}
    ></i>
  );
};

export default Icon;
