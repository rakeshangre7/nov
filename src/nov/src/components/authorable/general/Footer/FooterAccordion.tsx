import React, { useEffect, useRef, useState } from 'react';
import { Field, Link, LinkField, LinkFieldValue, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Button from '@/components/helpers/Button/Button';
import { useBreakpoints } from '../../../utility/breakpoints';
interface SecondaryMenu {
  menuTitle: {
    jsonValue: Field<string>;
  };
  primaryURL: {
    path: string;
    url: string;
  };
  redirectPageURL?: {
    jsonValue?: LinkField | null;
  };
  hideInNavigation: {
    jsonValue: {
      value: boolean;
    };
  };
  hideInFooterNavigation: {
    jsonValue: {
      value: boolean;
    };
  };
}
export type FooterAccordionProps = {
  // fields?: Field<string>;
  indexKey?: number;
  // FMItem: Array<Item>;
  FMItem: {
    field?: LinkField | LinkFieldValue;
    primaryURL: {
      path: string;
    };
    redirectPageURL?: {
      jsonValue?: LinkField | null;
    };
    menuTitle: {
      jsonValue: {
        value: string;
      };
    };
    secondaryMenu: {
      results: Array<SecondaryMenu>;
    };
  };
};

const FooterAccordion = ({ FMItem, indexKey }: FooterAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<number | null | undefined>(null);
  const { isDesktop } = useBreakpoints();
  const descriptionref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionref?.current) {
      if (!isDesktop) {
        descriptionref?.current?.scrollHeight && setHeight(descriptionref.current.scrollHeight);
      }
    }
    // isDesktop ? setIsOpen(true) : setIsOpen(false);
  }, [isDesktop]);
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const divStyle = {
    height: isOpen ? (height ? `${height}px` : 'auto') : '',
  };
  const isRedirect = FMItem?.redirectPageURL?.jsonValue?.value == null;
  return (
    <>
      <li className="">
        <div className="border-b border-solid border-gray-light bg-white relative [&>a]:hover:text-black">
          {isDesktop ? (
            isRedirect ? (
              <Button
                className="flex order-3 font-semibold lg:pb-8 lg:hover:!underline"
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
              FMItem?.redirectPageURL?.jsonValue && (
                <Button
                  className="flex order-3 font-semibold lg:pb-8 lg:hover:!underline"
                  field={FMItem?.redirectPageURL?.jsonValue}
                  text={FMItem?.menuTitle?.jsonValue.value}
                  variant="tertiary"
                />
              )
            )
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
                  id={`control_${indexKey}`}
                  onClick={handleClick}
                  aria-controls={`body_${indexKey}`}
                  aria-expanded={isOpen ? true : false}
                  aria-label={isOpen ? 'collapse button' : 'expand button'}
                  className="w-full py-4 px-8 font-semibold"
                />
              </div>
            </>
          )}
        </div>

        <div
          ref={descriptionref}
          id={`body_${indexKey}`}
          className="bg-gray-lightest lg:bg-transparent overflow-hidden lg:overflow-visible duration-300 lg:duration-0 h-0 lg:h-auto"
          aria-hidden={isOpen ? false : true}
          style={{
            ...(!isDesktop && divStyle),
          }}
        >
          <ul className="px-14 lg:px-0 lg:pt-2.5">
            {!isDesktop && (
              <li className="flex py-3.5 lg:py-1.5 first:pt-10 first:lg:pt-1.5 last:pb-12 last:lg:pb-1.5">
                {FMItem?.redirectPageURL?.jsonValue?.value == null ? (
                  <a
                    href={FMItem?.primaryURL?.path}
                    className="text-sm leading-6 hover:underline font-medium"
                  >
                    <Text field={FMItem?.menuTitle?.jsonValue} />
                  </a>
                ) : (
                  <a
                    href={FMItem?.primaryURL?.path}
                    className="text-sm leading-6 hover:underline font-medium outline-none"
                  >
                    <Text field={FMItem?.menuTitle?.jsonValue} />
                  </a>
                )}
              </li>
            )}
            {Array.isArray(FMItem?.secondaryMenu?.results) &&
              FMItem?.secondaryMenu?.results?.map((Item, index: number) => (
                <li
                  key={index}
                  className="flex py-3.5 lg:py-1.5 first:pt-10 first:lg:pt-1.5 last:pb-12 last:lg:pb-1.5"
                >
                  {Item?.redirectPageURL?.jsonValue?.value == null ? (
                    <a
                      href={Item?.primaryURL?.path}
                      className="text-sm leading-6 hover:underline font-medium outline-none"
                    >
                      <Text field={Item?.menuTitle?.jsonValue} />
                    </a>
                  ) : (
                    <Link
                      field={Item?.redirectPageURL?.jsonValue}
                      className="text-sm leading-6 hover:underline font-medium outline-none"
                    />
                  )}
                </li>
              ))}
          </ul>
        </div>
      </li>
    </>
  );
};

export default FooterAccordion;
