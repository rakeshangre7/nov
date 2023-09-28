import Button from '@/components/helpers/Button/Button';
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import React from 'react';
export type TextOnlyButtonProps = {
  ctaLink: LinkField;
  isSticky: boolean;
};
const TextOnlyButton = ({ ctaLink, isSticky }: TextOnlyButtonProps) => {
  return (
    <div
      className={clsx('right-0', 'left-0', 'lg:left-auto', 'bottom-0', 'text-black', {
        'fixed z-10': isSticky,
        absolute: !isSticky,
      })}
    >
      <Button
        field={ctaLink}
        auto={false}
        variant="button"
        className={clsx(
          'lg:w-[450px]',
          'w-full',
          'smd:h-[104px]',
          'h-[60px]',
          '!pr-[34px]',
          '!pl-[34px]',
          '!py-0',
          '!px-0',
          'text-lg',
          'smd:leading-104',
          'leading-[60px]',
          'text-semibold',
          'transition-width',
          'duration-300',
          'ease-in-out',
          'text-center',
          '[&_span]:h-full',
          'overflow-hidden'
        )}
      />
    </div>
  );
};

export default TextOnlyButton;
