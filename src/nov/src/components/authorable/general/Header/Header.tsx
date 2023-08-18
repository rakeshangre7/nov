import Icon from '@/components/helpers/Icon/Icon';
import { Field, ImageField, LinkField, NextImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import UserAccount from './UserAccount';
import Button from '@/components/helpers/Button/Button';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
type renderLinkProps = {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
  navList?: subPagesProps[];
  isMobile?: boolean;
  show?: boolean;
};

type featureDetailProps = {
  featuredStoryHeadline?: Field<string> | null;
  featuredStoryAbstract?: Field<string> | null;
  featuredStoryCTALink?: LinkField | null;
  featuredStoryCTAText?: Field<string> | null;
  cardImage?: ImageField | null;
};
export type subPagesProps = {
  subPages?: subPagesProps[];
  hideInFooterNavigation?: boolean;
  hideSubNavigation?: boolean;
  target?: string | null;
  featuredStoryHeadline?: Field<string> | null;
  featuredStoryAbstract?: Field<string> | null;
  featuredStoryCTALink?: LinkField | null;
  featuredStoryCTALinkTarget?: string | null;
  featuredStoryCTAText?: Field<string> | null;
  hasSubPages?: boolean;
  pageImage?: null;
  cardImage?: ImageField | null;
  cardImageAlt?: Field<string> | null;
  colorCode?: Field<string> | null;
  cssClass?: Field<string> | null;
  featuredItem?: Field<string> | null;
  templateId?: string;
  itemId?: string;
  url?: LinkField | null;
  headline?: Field<string> | null;
  abstract?: Field<string> | null;
  menuTitle?: Field<string> | null;
  mobileMenuTitle?: Field<string> | null;
  subMenuText?: Field<string> | null;
  isActive?: boolean;
  linkToFirstChild?: boolean;
  hideInNavigation?: boolean;
};
export type HeaderProps = {
  uid: string;
  componentName: string;
  dataSource?: string;
  params?: { [key: string]: string };
  fields?: {
    portalDescription?: Field<string>;
    portalRegisterUrl?: LinkField;
    portalRegisterUrlText?: Field<string> | null;
    portalLoginUrl?: LinkField;
    portalLoginText?: Field<string> | null;
    viewAllText?: Field<string>;
    cardImage?: ImageField;
    cardImageAlt: Field<string> | null;
    navigationEntries?: subPagesProps[];
    siteFeaturedHeadline?: Field<string>;
    siteLogo?: ImageField;
    siteLogoTransparent?: ImageField;
    menuLabel?: Field<string>;
    siteFeaturedAbstract?: Field<string>;
    siteFeaturedCtaLink?: LinkField;
    siteFeaturedCtatext?: Field<string>;
    learnMoreText?: Field<string>;
    portalHeader?: Field<string>;
  };
};

const Header = ({ fields }: HeaderProps) => {
  const userAccountRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLLIElement>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isUserProfileClick, setIsUserProfileClick] = useState<boolean>(false);
  const [activeNavbarStoryDetail, setActiveNavbarStoryDetail] = useState<featureDetailProps>({});
  const [selectedPrimaryLink, setSelectedPrimaryLink] = useState<boolean | string>(false);
  const [selectedSecondaryLink, setSelectedSecondaryLink] = useState<boolean | string>();
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsSticky(currentScrollPos > 30);
  };
  useEffect(() => {
    setSelectedSecondaryLink(false);
  }, [selectedPrimaryLink]);
  useEffect(() => {
    const className = ['!fixed', '!overflow-y-scroll', 'w-full'];
    if (!isExpanded) {
      document.body.classList.remove(...className);
      setSelectedPrimaryLink(false);
      setSelectedSecondaryLink(false);
      setActiveNavbarStoryDetail({
        featuredStoryHeadline: fields?.siteFeaturedHeadline,
        featuredStoryAbstract: fields?.siteFeaturedAbstract,
        featuredStoryCTALink: fields?.siteFeaturedCtaLink,
        featuredStoryCTAText: fields?.siteFeaturedCtatext,
        cardImage: fields?.cardImage,
      });
    } else {
      document.body.classList.add(...className);
    }
  }, [isExpanded]);

  useEffect(() => {
    const closeOpenMenus = ({ target }: MouseEvent): void => {
      if (
        isUserProfileClick &&
        target instanceof HTMLElement &&
        !userAccountRef?.current?.contains(target as Node) &&
        !(target.id === 'userProfile') &&
        !(target.id === 'userProfileIcon')
      ) {
        setIsUserProfileClick(false);
      }
    };
    document.addEventListener('mousedown', closeOpenMenus);
  }, [userAccountRef, isUserProfileClick]);

  useEffect(() => {
    const closeOpenMenus = ({ target }: MouseEvent): void => {
      if (isExpanded && target && !navigationRef?.current?.contains(target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', closeOpenMenus);
  }, [navigationRef, isExpanded]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setActiveNavbarStoryDetail({
      featuredStoryHeadline: fields?.siteFeaturedHeadline,
      featuredStoryAbstract: fields?.siteFeaturedAbstract,
      featuredStoryCTALink: fields?.siteFeaturedCtaLink,
      featuredStoryCTAText: fields?.siteFeaturedCtatext,
      cardImage: fields?.cardImage,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const renderMobileNavigation = ({
    isPrimary,
    isSecondary,
    isTertiary,
    navList,
    show,
  }: renderLinkProps) => {
    return (
      <div
        className={clsx('relative', {
          'mt-[41px]': isPrimary && !selectedSecondaryLink && !selectedPrimaryLink,
        })}
      >
        <a
          onClick={() => {
            if (isSecondary) {
              setSelectedPrimaryLink(false);
            } else if (isTertiary) {
              setSelectedSecondaryLink(false);
            }
          }}
        >
          {!(!show || (isSecondary && selectedSecondaryLink)) && (
            <Icon
              className={clsx('icon-arrow-left text-black visible l:hidden mt-[18px] text-base', {
                'invisible l:hidden': !show || (isSecondary && selectedSecondaryLink),
                'mb-[-6px]': !(!show || (isSecondary && selectedSecondaryLink)),
              })}
            ></Icon>
          )}
        </a>
        {navList?.map((navbar: subPagesProps, index: number) => {
          return (
            <>
              {navbar.url && !navbar.hideInNavigation && (
                <Button
                  variant={'secondary'}
                  auto={false}
                  className={clsx(
                    'mt-[14px] navigationTransitionInitialForMobile relative ml-[2px] text-lightBlack l:max-w-[165px] xl:max-w-[225px] [&_span]:max-w-full  min-h-[28px] h-fit l:[&_span]:max-w-[193px] active:!text-lightBlack l:active:!text-primary hover:!text-lightBlack l:hover:!text-primary',
                    {
                      '!text-primary !cursor-default !outline-none':
                        selectedPrimaryLink === navbar.itemId ||
                        selectedSecondaryLink === navbar.itemId,
                      navigationTransitionFinalForMobile:
                        (isPrimary || show) &&
                        isExpanded &&
                        !(isPrimary && (selectedPrimaryLink || selectedSecondaryLink)) &&
                        !(isSecondary && selectedSecondaryLink),
                    }
                  )}
                  style={{ transitionDelay: `${100 * (index / 2)}ms` }}
                  text={navbar?.menuTitle?.value}
                  field={navbar.url}
                  onClick={(e) => {
                    if (navbar?.subPages && !navbar.hideSubNavigation) {
                      if (navbar.subPages?.length > 0) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (isPrimary && navbar.itemId) {
                          setSelectedPrimaryLink(navbar.itemId);
                        } else if (isSecondary && navbar.itemId) {
                          setSelectedSecondaryLink(navbar.itemId);
                        }
                        if (isPrimary) {
                          setActiveNavbarStoryDetail({
                            featuredStoryHeadline: navbar.featuredStoryHeadline,
                            featuredStoryAbstract: navbar.featuredStoryAbstract,
                            featuredStoryCTALink: navbar.featuredStoryCTALink,
                            featuredStoryCTAText: navbar.featuredStoryCTAText,
                            cardImage: navbar.cardImage,
                          });
                        }
                      }
                    }
                  }}
                  {...(!isTertiary &&
                    navbar?.subPages &&
                    !navbar.hideSubNavigation &&
                    navbar.subPages?.length > 0 && {
                      iconPosition: 'right',
                      iconClassName: 'icon-chevron-right text-lg',
                    })}
                />
              )}
              {isPrimary &&
                navbar?.subPages &&
                navbar.subPages?.length > 0 &&
                !navbar.hideSubNavigation && (
                  <div
                    className={clsx('navigationTransitionInitialMobile', {
                      navigationTransitionFinalMobile: selectedPrimaryLink === navbar.itemId,
                    })}
                  >
                    {renderMobileNavigation({
                      isSecondary: true,
                      navList: navbar.subPages,
                      show: selectedPrimaryLink === navbar.itemId,
                    })}
                  </div>
                )}
              {isSecondary &&
                !navbar.hideSubNavigation &&
                navbar?.subPages &&
                navbar.subPages?.length > 0 && (
                  <div
                    className={clsx('navigationTransitionInitialMobile', {
                      navigationTransitionFinalMobile: selectedSecondaryLink === navbar.itemId,
                    })}
                  >
                    {renderMobileNavigation({
                      isTertiary: true,
                      navList: navbar.subPages,
                      show: selectedSecondaryLink === navbar.itemId,
                    })}
                  </div>
                )}
            </>
          );
        })}
      </div>
    );
  };
  const renderHeaderTeaser = () => {
    return (
      <div className="w-[389px] h-[700px] bg-white fixed border-l-[1px] border-gray-light top-[65px] z-10 right-0 l:w-[463px] flex justify-between flex-col">
        <div>
          {activeNavbarStoryDetail?.cardImage?.value?.src && (
            <a tabIndex={-1} href={activeNavbarStoryDetail?.featuredStoryCTALink?.value?.href}>
              <NextImage
                field={activeNavbarStoryDetail?.cardImage}
                tabIndex={0}
                className="basicFocus"
              />
            </a>
          )}
          <div className="px-[33px] ">
            <a tabIndex={-1} href={activeNavbarStoryDetail?.featuredStoryCTALink?.value?.href}>
              {activeNavbarStoryDetail?.featuredStoryHeadline && (
                <Text
                  tag={'h4'}
                  className="h4  mt-[30px] !text-xl text-black basicFocus w-fit !leading-30 focus:!outline-[1px]"
                  tabIndex="0"
                  field={activeNavbarStoryDetail?.featuredStoryHeadline}
                />
              )}
            </a>
            {activeNavbarStoryDetail?.featuredStoryAbstract && (
              <Text
                tag={'p'}
                className="body1 mt-[27px] !leading-[25.6px]"
                field={activeNavbarStoryDetail?.featuredStoryAbstract}
              />
            )}
          </div>
        </div>
        {activeNavbarStoryDetail?.featuredStoryCTALink && (
          <Button
            variant="button"
            auto={false}
            iconPosition="right"
            iconClassName="icon-arrow-right"
            iconFullWidth={true}
            className="!min-h-[40px] max-h-[40px] text-[16px] px-[33px] py-[12px]"
            text={activeNavbarStoryDetail?.featuredStoryCTAText?.value}
            field={activeNavbarStoryDetail?.featuredStoryCTALink}
          />
        )}
      </div>
    );
  };

  const renderLinks = ({
    isPrimary,
    isSecondary,
    isTertiary,
    navList,
    isMobile,
    show,
  }: renderLinkProps) => {
    return (
      <div className="relative l:h-full">
        <a
          onClick={() => {
            if (isSecondary) {
              setSelectedPrimaryLink(false);
            } else if (isTertiary) {
              setSelectedSecondaryLink(false);
            }
          }}
        >
          <Icon
            className={clsx('icon-arrow-left text-black visible l:hidden mt-[16px] text-base', {
              'invisible l:hidden': !selectedPrimaryLink,
            })}
          ></Icon>
        </a>
        {navList?.map((navbar: subPagesProps, index: number) => {
          return (
            <>
              {navbar.url && !navbar.hideInNavigation && (
                <Button
                  variant={'secondary'}
                  auto={false}
                  className={clsx(
                    'mt-[14px] navigationTransitionInitial relative ml-[2px] text-lightBlack l:max-w-[165px] xl:max-w-[225px] [&_span]:max-w-full  min-h-[28px] h-fit l:[&_span]:max-w-[193px] active:!text-lightBlack l:active:!text-primary hover:!text-lightBlack l:hover:!text-primary',
                    {
                      '!text-primary !cursor-default !outline-none':
                        selectedPrimaryLink === navbar?.itemId ||
                        selectedSecondaryLink === navbar?.itemId,
                      navigationTransitionFinal: (isPrimary || show) && isExpanded,
                    }
                  )}
                  style={index ? { transitionDelay: `${100 * ((index + 1) / 2)}ms` } : {}}
                  text={navbar?.menuTitle?.value}
                  field={navbar.url}
                  onClick={(e) => {
                    if (navbar?.subPages && !navbar.hideSubNavigation) {
                      if (navbar.subPages?.length > 0) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (isPrimary && navbar.itemId) {
                          setSelectedPrimaryLink(navbar.itemId);
                        } else if (isSecondary && navbar.itemId) {
                          setSelectedSecondaryLink(navbar.itemId);
                        }
                        if (isPrimary) {
                          setActiveNavbarStoryDetail({
                            featuredStoryHeadline: navbar.featuredStoryHeadline,
                            featuredStoryAbstract: navbar.featuredStoryAbstract,
                            featuredStoryCTALink: navbar.featuredStoryCTALink,
                            featuredStoryCTAText: navbar.featuredStoryCTAText,
                            cardImage: navbar.cardImage,
                          });
                        }
                      }
                    }
                  }}
                  {...(!isTertiary &&
                    navbar?.subPages &&
                    !navbar.hideSubNavigation &&
                    navbar.subPages?.length > 0 && {
                      iconPosition: 'right',
                      iconClassName: 'icon-chevron-right text-lg',
                    })}
                />
              )}
              {!isMobile &&
                isPrimary &&
                navbar?.subPages &&
                navbar.subPages?.length > 0 &&
                !navbar.hideSubNavigation && (
                  <div className="absolute top-0 left-[100%] h-[700px]  w-[220px] items-start pr-0 xl:w-[300px] mt-[-14px] pl-[1px] ">
                    {renderLinks({
                      isSecondary: true,
                      navList: navbar.subPages,
                      show: selectedPrimaryLink === navbar.itemId,
                    })}
                  </div>
                )}
              {!isMobile &&
                isSecondary &&
                !navbar.hideSubNavigation &&
                navbar?.subPages &&
                navbar.subPages?.length > 0 && (
                  <div className="absolute top-0 left-[100%] h-full w-[220px] items-start pr-0 xl:w-[300px] mt-[-14px] pl-[1px] ">
                    {renderLinks({
                      isTertiary: true,
                      navList: navbar.subPages,
                      show: selectedSecondaryLink === navbar.itemId,
                    })}
                  </div>
                )}
            </>
          );
        })}
      </div>
    );
  };
  const renderNavigation = () => {
    return (
      <div
        className={clsx(
          'w-full hidden relative transition-all duration-200 bg-white opacity-0 scroll-auto overflow-hidden  flex-col justify-between h-[calc(100%-65px)]',
          {
            'z-10 opacity-100 !flex': isExpanded,
          }
        )}
      >
        <div className="px-[25px] h-[calc(100%-228px)] smd:h-full overflow-x-hidden overflow-y-auto scroll-auto mt-[-1px] l:hidden bg-white no-scrollbar">
          {renderMobileNavigation({ isPrimary: true, navList: fields?.navigationEntries })}
        </div>
        <div className="bg-white relative h-[700px] w-full hidden l:block">
          <div className="container flex mx-auto h-full bg-white ">
            <div className="w-full h-full">
              <div className="w-[220px] items-start pr-0 xl:w-[300px] h-full mt-[52px] pl-[1px] ">
                {renderLinks({ isPrimary: true, navList: fields?.navigationEntries })}
              </div>
            </div>
          </div>
          {renderHeaderTeaser()}
        </div>
        <div className="smd:hidden">
          <UserAccount
            isMobile={true}
            portalHeader={fields?.portalHeader}
            portalDescription={fields?.portalDescription}
            portalRegisterUrl={fields?.portalRegisterUrl}
            portalLoginUrl={fields?.portalLoginUrl}
          />
        </div>
      </div>
    );
  };
  const renderBasicHeaderInfo = () => {
    return (
      <div
        className={clsx(
          'headerWrapper w-full transition-all bg-transparent duration-200 h-[65px]',
          {
            '!bg-black': isSticky,
            '!bg-white': isExpanded,
          }
        )}
      >
        <div className="container xl:max-w-nxl l:max-w-nlg lg:max-w-full  mx-auto h-full flex justify-between items-center">
          <a className="log-wrapper text-white basicFocus" href="/">
            {!isExpanded ? (
              <>
                {fields?.siteLogoTransparent?.value?.src && (
                  <NextImage field={fields?.siteLogoTransparent} />
                )}
              </>
            ) : (
              <> {fields?.siteLogo?.value?.src && <NextImage field={fields?.siteLogo} />}</>
            )}
          </a>
          <ul className="flex items-center">
            <li
              tabIndex={0}
              className="h-[30px] w-[30px] mr-[15px] flex justify-center items-center cursor-pointer basicFocus rounded-[1px]"
            >
              <Icon
                className={clsx('icon-search text-xl ', {
                  'text-primary': isExpanded,
                  'text-white': !isExpanded,
                })}
              />
            </li>
            <li
              tabIndex={0}
              ref={userRef}
              id="userProfile"
              onClick={(e) => {
                e.stopPropagation();
                setIsUserProfileClick(!isUserProfileClick);
              }}
              className="h-[30px] relative w-[30px] mr-[17px] hidden smd:flex justify-center items-center cursor-pointer basicFocus rounded-[1px] "
            >
              <Icon
                id={'userProfileIcon'}
                className={clsx('icon-user text-xl ', {
                  'text-white': !isExpanded,
                  'smd:!text-primary': isExpanded || isUserProfileClick,
                })}
              />
              {
                <div
                  ref={userAccountRef}
                  className={clsx(
                    'absolute transition-all ease-in-out duration-200 invisible top-[47px] right-[-63px] opacity-0 w-[256px]',
                    {
                      'smd:visible smd:opacity-100 smd:h-[228px] z-50 drop-shadow-[0_0_5px_rgba(51,51,51,0.22)] before:content("") before:border-[7px] before:absolute before:top-[calc(7px*-2)] before:border-x-transparent before:border-t-transparent before:border-b-white  before:right-[calc(25%+7px)]':
                        isUserProfileClick,
                    }
                  )}
                >
                  <UserAccount
                    portalHeader={fields?.portalHeader}
                    portalDescription={fields?.portalDescription}
                    portalRegisterUrl={fields?.portalRegisterUrl}
                    portalLoginUrl={fields?.portalLoginUrl}
                  />
                </div>
              }
            </li>
            <li
              tabIndex={0}
              className="flex items-center basicFocus px-[2.5px] mr-[1px] l:mr-0 cursor-pointer h-[30px] rounded-[1px]"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {fields?.menuLabel && (
                <Text
                  tag={'p'}
                  className={clsx(' mr-[15px] body2 !leading-16 font-medium', {
                    'text-black': isExpanded,
                    'text-white': !isExpanded,
                  })}
                  field={fields.menuLabel}
                />
              )}
              <Icon
                className={clsx('text-xl', {
                  'text-black icon-x scale-[1.2]': isExpanded,
                  'text-white icon-burger': !isExpanded,
                })}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        className="fixed top-0 transition-all duration-200 w-full h-full l:h-fit"
        ref={navigationRef}
      >
        {renderBasicHeaderInfo()}
        {renderNavigation()}
      </div>
      <div
        className={clsx('absolute top-[765px] left-0 right-0 bottom-0  bg-black/[0.8] invisible', {
          'l:!visible z-10': isExpanded,
        })}
      ></div>
    </>
  );
};

export default Header;
