import { Field, Image, Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Button from '@/components/helpers/Button/Button';

import clsx from 'clsx';

import Icon from 'components/helpers/Icon/Icon';
import { useBreakpoints } from '../../../utility/breakpoints';
export type FooterMenuProps = {
  fields?: Field<string>;
};

const FooterMenu = ({ footerNav }: FooterMenuProps) => {
  const { isDesktop } = useBreakpoints();
  const handleClick = (e) => {
    e.preventDefault();
    // write your logic for on click
  };
  return (
    <div className="lg:container w-full max-w-full lg:px-20 order-4">
      <nav className="module A3-footer__nav js-accordion w-full ">
        <ul className="FooterNavList lg:grid lg:grid-flow-col justify-stretch">
          {footerNav?.map((Item, index) => (
            <li className="js-accordion-item " key={index}>
              <div className="js-accordion-item-trigger border-b lg:border-b-0 border-solid border-gray-light bg-white relative py-4 px-8">
                {isDesktop ? (
                  <Button
                    className="w-48 lg:w-64 flex order-3"
                    field={{
                      value: {
                        href: Item?.primaryURL?.path,
                        linktype: 'external',
                        target: '_blank',
                        text: 'Link with new tab screen reader text',
                      },
                    }}
                    text={Item?.menuTitle?.jsonValue.value}
                    variant="tertiary"
                  />
                ) : (
                  <div className="A3-footer__nav__item-title js-accordion-item-title lg:hidden">
                    <Button
                      onClick={handleClick}
                      className="w-full "
                      field={{
                        value: {
                          href: Item?.primaryURL?.path,
                          linktype: 'external',
                          target: '_blank',
                          text: 'Link with new tab screen reader text',
                        },
                      }}
                      iconClassName="icon-chevron-down !text-2xl !font-normal"
                      iconFullWidth
                      iconPosition="right"
                      text={Item?.menuTitle?.jsonValue.value}
                      variant="tertiary"
                    />
                  </div>
                )}
              </div>
              <div className="A3-footer__nav__submenu js-accordion-item-content hidden lg:inline-flex">
                <ul>
                  {Item?.secondaryMenu?.results?.map((Item2, index) => (
                    <li key={index}>
                      <a href="/about/events">
                        <Text field={Item2?.menuTitle?.jsonValue} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterMenu;
