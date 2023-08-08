// Global
import { Link, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import Icon from '../Icon/Icon';
import { tv } from 'tailwind-variants';

import useExperienceEditor from 'lib/use-experience-editor';

import { MouseEventHandler, Ref } from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  auto?: boolean;
  disabled?: boolean;
  iconPosition?: string;
  iconFullWidth?: boolean;
  onClick?: MouseEventHandler;
  ref?: Ref<HTMLButtonElement | null>;
  variant: string;
  field: LinkField;
  className?: string;
  iconClassName?: string;
  text?: string;
}
const buttonVariants = tv({
  variants: {
    default: {
      button: clsx(
        'font-primary',
        'font-semibold',
        'items-center',
        'flex',
        'min-h-[46px]',
        'rounded-none',
        'leading-16',
        'transition',
        'ease-in-out',
        'delay-15',
        'px-[30px]',
        'text-16',
        'justify-center',
        'py-[15px]',
        'text-white',
        'no-underline',
        'bg-primary',
        'cursor-pointer',
        'hover:bg-red-dark',
        'focus:outline-dotted',
        'focus:outline-2',
        'focus:outline-secondary'
      ),
      primary: clsx(
        'flex font-primary w-fit cursor-pointer before:bg-primary hover:before:w-full text-black active:before:w-full active:before:bg-red-dark focus:outline-dotted focus:outline-2	focus:outline-secondary w-fit relative font-lightbold leading-16 items-center text-16 transition-width ease-in-out duration-100 before:transition-width before:ease-in-out before:duration-100 pt-[5px] pb-[8px]  before:absolute before:bottom-[0] before:left-0 before:w-[40px] before:h-[3px] before:content-[""]'
      ),
      secondary: clsx(
        'flex font-primary w-fit justify-between relative font-semibold leading-14 items-center text-14 transition-width ease-in-out duration-100 cursor-pointer hover:text-primary active:text-primary focus:outline-dotted focus:outline-2	focus:outline-secondary'
      ),
      tertiary: clsx(
        'flex font-primary w-fit justify-between relative font-lightbold leading-16 items-center text-16 transition-width ease-in-out duration-100 cursor-pointer hover:text-gray-lighter active:text-primary focus:outline-dotted focus:outline-2	focus:outline-secondary'
      ),
      standard: clsx(
        'flex font-lightbold  leading-24 items-center text-14 transition-width ease-in-out duration-100 cursor-pointer text-gray-dark hover:underline focus:outline-dotted focus:outline-2	focus:outline-secondary'
      ),
    },
    iconLeft: {
      button: clsx('mr-[4px] text-16'),
      primary: clsx('mr-[4px] text-16'),
      secondary: clsx('mr-[4px] text-16'),
      tertiary: clsx('mr-[4px] text-16 font-semibold text-primary'),
      standard: clsx('pr-[4px] text-16'),
    },
    iconRight: {
      button: clsx('ml-[4px] text-16'),
      primary: clsx('ml-[4px] text-16'),
      secondary: clsx('ml-[4px] text-16'),
      tertiary: clsx('ml-[4px] text-16 font-semibold text-primary'),
      standard: clsx('pl-[4px] text-16'),
    },
  },
  compoundVariants: [
    {
      default: 'button',
      disabled: true,
      className: clsx(
        '!bg-gray',
        '!hover:bg-gray',
        'focus:outline-none',
        'focus:shadow-none',
        'pointer-events-none'
      ),
    },
    {
      default: 'primary',
      disabled: true,
      className: clsx(
        'pointer-events-none text-gray before:w-full before:bg-gray focus:outline-none focus:shadow-none'
      ),
    },
    {
      default: 'secondary',
      disabled: true,
      className: clsx('pointer-events-none text-gray focus:outline-none focus:shadow-none'),
    },
    {
      default: 'tertiary',
      disabled: true,
      className: clsx(
        'pointer-events-none text-gray focus:outline-none focus:shadow-none [&_i]:text-gray'
      ),
    },
    {
      default: 'standard',
      disabled: true,
      className: clsx('pointer-events-none text-gray focus:outline-none focus:shadow-none'),
    },
  ],
});

const Button = ({
  auto = true,
  iconFullWidth = false,
  disabled,
  iconPosition,
  text,
  field,
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
        className={clsx(buttonVariants({ default: variant, disabled: disabled }), className, {
          'w-fit': auto,
          'w-full': !auto && variant != 'primary',
          'justify-between': !auto && iconFullWidth,
        })}
        {...(disabled && { disabled: disabled })}
        {...(onClick && { onClick: onClick })}
        {...props}
      >
        {iconPosition === 'left' && (
          <Icon className={clsx(buttonVariants({ iconLeft: variant }), iconClassName)} />
        )}
        <span>{text}</span>
        {iconPosition === 'right' && (
          <Icon className={clsx(buttonVariants({ iconRight: variant }), iconClassName)} />
        )}
      </Link>
    );
  }

  return (
    <Link
      field={field}
      className={clsx(buttonVariants({ default: variant, disabled: disabled }), className, {
        'w-fit': auto,
        'w-full': !auto && variant != 'primary',
        'justify-between': !auto && iconFullWidth,
      })}
      {...(disabled && { disabled: disabled })}
      {...(onClick && { onClick: onClick })}
      {...props}
    >
      {iconPosition === 'left' && (
        <Icon className={clsx(buttonVariants({ iconLeft: variant }), iconClassName)} />
      )}
      <span>{text}</span>
      {iconPosition === 'right' && (
        <Icon className={clsx(buttonVariants({ iconRight: variant }), iconClassName)} />
      )}
    </Link>
  );
};

export default Button;
