import React, { useEffect, useRef, useState } from 'react';
import { Field, Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Button from '@/components/helpers/Button/Button';
import { useBreakpoints } from '../../../utility/breakpoints';
import Icon from 'components/helpers/Icon/Icon';
export type FooterAccordionProps = {
  fields?: Field<string>;
};

const FooterAccordion = ({ FMItem, index }: FooterAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<number | null>(null);
  const { isDesktop } = useBreakpoints();
  const descriptionref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionref?.current) {
      descriptionref?.current?.scrollHeight && setHeight(descriptionref.current.scrollHeight);
    }
    isDesktop ? setIsOpen(true) : setIsOpen(false);
  }, [isDesktop]);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li className="">
        <div className="border-b border-solid border-gray-light bg-white relative [&>a]:hover:text-black">
          {isDesktop ? (
            <Button
              className="w-48 lg:w-64 flex order-3 font-semibold lg:pb-8 hover:underline"
              field={{
                value: {
                  href: FMItem?.primaryURL?.path,
                  linktype: 'external',
                  target: '_blank',
                  text: 'Link with new tab screen reader text',
                },
              }}
              text={FMItem?.menuTitle?.jsonValue.value}
              variant="tertiary"
            />
          ) : (
            <>
              <div className="lg:hidden">
                <Button
                  field={{
                    value: {},
                  }}
                  iconClassName={`${
                    isOpen ? 'icon-chevron-up' : 'icon-chevron-down'
                  } !text-2xl !font-normal`}
                  iconFullWidth
                  iconPosition="right"
                  text={FMItem?.menuTitle?.jsonValue.value}
                  variant="tertiary"
                  id={`control_${index}`}
                  onClick={handleClick}
                  aria-controls={`body_${index}`}
                  aria-expanded={isOpen ? true : false}
                  aria-label={isOpen ? 'collapse button' : 'expand button'}
                  className="w-full py-4 px-8"
                />
              </div>
            </>
          )}
        </div>
        <div
          ref={descriptionref}
          id={`body_${index}`}
          className="bg-gray-lightest lg:bg-transparent overflow-hidden lg:overflow-visible duration-300 h-auto"
          style={
            isOpen
              ? height
                ? { height: `${height}px` }
                : { height: `auto` }
              : { height: `${0}px` }
          }
          aria-hidden={isOpen ? false : true}
        >
          <ul className="px-14 lg:px-0 lg:pt-2.5">
            {!isDesktop && (
              <li
                key={index}
                className="flex py-3.5 lg:py-1.5 first:pt-10 first:lg:pt-1.5 last:pb-12 last:lg:pb-1.5"
              >
                <a
                  href={FMItem?.primaryURL?.path}
                  className="text-sm leading-6 hover:underline font-medium"
                >
                  <Text field={FMItem?.menuTitle?.jsonValue} />
                </a>
              </li>
            )}
            {Array.isArray(FMItem?.secondaryMenu?.results) &&
              FMItem?.secondaryMenu?.results?.map((Item: unknown, index: number) => (
                <li
                  key={index}
                  className="flex py-3.5 lg:py-1.5 first:pt-10 first:lg:pt-1.5 last:pb-12 last:lg:pb-1.5"
                >
                  <a
                    href={Item?.primaryURL?.path}
                    className="text-sm leading-6 hover:underline font-medium outline-none"
                  >
                    <Text field={Item?.menuTitle?.jsonValue} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </li>
    </>
  );
};

export default FooterAccordion;
