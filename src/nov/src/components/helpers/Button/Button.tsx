// Global
import { Link, LinkProps, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import Icon from '../Icon/Icon';
import { tv } from 'tailwind-variants';

import useExperienceEditor from 'lib/use-experience-editor';

import { MouseEventHandler } from 'react';

const INTERNAL_LINK_REGEX = /^\/|^\#/g;
export interface ButtonProps extends LinkProps {
  auto?: boolean;
  disabled?: boolean;
  iconPosition?: string;
  iconFullWidth?: boolean;
  onClick?: MouseEventHandler;
  variant: string;
  field: LinkField;
  className?: string;
  iconClassName?: string;
  text?: string;
}
type Variants = 'button' | 'primary' | 'secondary' | 'tertiary' | 'standard' | undefined;
const buttonVariants = tv({
  variants: {
    type: {
      button:
        'font-primary font-semibold items-center flex min-h-[46px] rounded-none leading-16 transition ease-in-out delay-15 px-[30px] text-base justify-center py-[15px] text-white no-underline bg-primary cursor-pointer hover:bg-red-dark basicFocus',
      primary:
        'flex font-primary text-black text-base w-fit cursor-pointer before:bg-primary hover:before:w-full active:before:w-full active:before:bg-red-dark basicFocus w-fit relative font-medium leading-16 items-center transition-width ease-in-out duration-100 before:transition-width before:ease-in-out before:duration-100 pt-[5px] pb-[8px]  before:absolute before:bottom-0 before:left-0 before:w-[40px] before:h-[3px] before:content-[""]',
      secondary:
        'flex font-primary w-fit justify-between relative font-semibold text-black leading-14 items-center text-sm transition-width ease-in-out duration-100 cursor-pointer hover:text-primary active:text-primary basicFocus',
      tertiary:
        'flex font-primary w-fit justify-between relative font-normal leading-16 text-black items-center text-base transition-width ease-in-out duration-100 cursor-pointer hover:text-gray-lighter active:text-primary basicFocus',
      standard:
        'flex font-medium leading-24 items-center text-sm transition-width ease-in-out duration-100 cursor-pointer text-gray-dark hover:underline basicFocus',
    },
    iconLeft: {
      button: 'mr-[4px] text-base',
      primary: 'mr-[4px] text-base',
      secondary: 'mr-[4px] text-base',
      tertiary: 'mr-[4px] text-base font-semibold text-primary',
      standard: 'pr-[4px] text-base',
    },
    iconRight: {
      button: 'ml-[4px] text-base',
      primary: 'ml-[4px] text-base',
      secondary: 'ml-[4px] text-base',
      tertiary: 'ml-[4px] text-base font-semibold text-primary',
      standard: 'pl-[4px] text-base',
    },
    disabledClass: {
      button: '!bg-gray hover:bg-gray focus:!outline-none focus:!shadow-none pointer-events-none',
      primary:
        'pointer-events-none text-gray before:w-full before:!bg-gray focus:outline-none focus:shadow-none',
      secondary: 'pointer-events-none text-gray focus:outline-none focus:shadow-none',
      tertiary:
        'pointer-events-none text-gray focus:outline-none focus:shadow-none [&_i]:text-gray',
      standard: 'pointer-events-none text-gray focus:outline-none focus:shadow-none',
    },
  },
});

const Button = ({
  auto = true,
  iconFullWidth = false,
  disabled = false,
  iconPosition,
  text,
  field,
  ref,
  onClick = (): void => undefined,
  className,
  iconClassName,
  variant = 'standard',
  ...props
}: ButtonProps): JSX.Element => {
  const isEE = useExperienceEditor();
  if (field && !field?.value) {
    console.warn('button field is not expected type', field);
    return <></>;
  }

  if (isEE) {
    return (
      <Link
        field={field}
        className={clsx(
          buttonVariants({ type: variant as Variants }),
          disabled && buttonVariants({ disabledClass: variant as Variants }),
          {
            'w-fit': auto,
            'w-full': !auto && variant != 'primary',
            'justify-between': !auto && iconFullWidth,
          },
          className
        )}
        showLinkTextWithChildrenPresent={false}
        internalLinkMatcher={INTERNAL_LINK_REGEX}
        {...(disabled && { disabled: disabled })}
        {...(onClick && { onClick: onClick })}
        ref={typeof ref !== 'string' ? ref : null}
        {...props}
      >
        {iconPosition === 'left' && (
          <Icon
            className={clsx(buttonVariants({ iconLeft: variant as Variants }), iconClassName)}
          />
        )}
        <span>{text || field?.value?.text}</span>
        {iconPosition === 'right' && (
          <Icon
            className={clsx(buttonVariants({ iconRight: variant as Variants }), iconClassName)}
          />
        )}
      </Link>
    );
  }

  return (
    <Link
      field={field}
      className={clsx(
        buttonVariants({ type: variant as Variants }),
        disabled && buttonVariants({ disabledClass: variant as Variants }),
        {
          'w-fit': auto,
          'w-full': !auto && variant != 'primary',
          'justify-between': !auto && iconFullWidth,
        },
        className
      )}
      showLinkTextWithChildrenPresent={false}
      internalLinkMatcher={INTERNAL_LINK_REGEX}
      ref={typeof ref !== 'string' ? ref : null}
      {...(disabled && { disabled: disabled })}
      {...(onClick && { onClick: onClick })}
      {...props}
    >
      {iconPosition === 'left' && (
        <Icon className={clsx(buttonVariants({ iconLeft: variant as Variants }), iconClassName)} />
      )}
      <span>{text || field?.value?.text}</span>
      {iconPosition === 'right' && (
        <Icon className={clsx(buttonVariants({ iconRight: variant as Variants }), iconClassName)} />
      )}
    </Link>
  );
};

export default Button;
