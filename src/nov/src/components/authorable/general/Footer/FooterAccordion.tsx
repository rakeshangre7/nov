import React, { useEffect, useRef, useState } from 'react';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Button from '@/components/helpers/Button/Button';
import { useBreakpoints } from '../../../utility/breakpoints';
import Icon from 'components/helpers/Icon/Icon';
export type FooterAccordionProps = {
  fields?: Field<string>;
};

const FooterAccordion = ({ Item1, index }: FooterAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<number | null>(null);
  const { isDesktop } = useBreakpoints();
  const descriptionref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionref?.current) {
      descriptionref?.current?.scrollHeight && setHeight(descriptionref.current.scrollHeight);
    }
    isDesktop && setIsOpen(true);
  });
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li className="js-accordion-item">
        <div className="js-accordion-item-trigger border-b lg:border-b-0 border-solid border-gray-light bg-white relative">
          {isDesktop ? (
            <Button
              className="w-48 lg:w-64 flex order-3"
              field={{
                value: {
                  href: Item1?.primaryURL?.path,
                  linktype: 'external',
                  target: '_blank',
                  text: 'Link with new tab screen reader text',
                },
              }}
              text={Item1?.menuTitle?.jsonValue.value}
              variant="tertiary"
            />
          ) : (
            <>
              <div className="js-accordion-item-title lg:hidden">
                <Button
                  field={{
                    value: {},
                  }}
                  iconClassName={`${
                    isOpen ? 'icon-chevron-up' : 'icon-chevron-down'
                  } !text-2xl !font-normal`}
                  iconFullWidth
                  iconPosition="right"
                  text={Item1?.menuTitle?.jsonValue.value}
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
          className="text-body-gray overflow-hidden duration-300 h-auto"
          style={
            isOpen
              ? height
                ? { height: `${height}px`, marginTop: '13px' }
                : { height: `auto`, marginTop: '13px' }
              : { height: `${0}px`, marginTop: '0px' }
          }
          aria-hidden={isOpen ? false : true}
        >
          <ul>
            {Item1?.secondaryMenu?.results?.map((Item2, index) => (
              <li key={index}>
                <a href="/about/events">
                  <Text field={Item2?.menuTitle?.jsonValue} />
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
