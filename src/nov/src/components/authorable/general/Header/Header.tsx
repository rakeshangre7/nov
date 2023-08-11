import Icon from '@/components/helpers/Icon/Icon';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import UserAccount from './UserAccount';
import Button from '@/components/helpers/Button/Button';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

export type HeaderProps = {
  uid: string;
  componentName: string;
  dataSource?: string;
  params: { [key: string]: string };
  fields: any;
};

const Header = ({ fields }: HeaderProps) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isUserProfileClick, setIsUserProfileClick] = useState<boolean>(false);
  const [activeNavbarStoryDetail, setActiveNavbarStoryDetail] = useState({
    featuredStoryHeadline: fields.siteFeaturedHeadline,
    featuredStoryAbstract: fields.siteFeaturedAbstract,
    featuredStoryCTALink: fields.siteFeaturedCtaLink,
    featuredStoryCTAText: fields.siteFeaturedCtatext,
  });
  const [selectedPrimaryLink, setSelectedPrimaryLink] = useState<boolean | string>();
  const [selectedSecondaryLink, setSelectedSecondaryLink] = useState<boolean | string>();
  const [secondaryLinkData, setSecondaryLinkData] = useState<any>([]);
  const [tertiaryLinkData, setTertiaryLinkData] = useState<any>([]);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsSticky(currentScrollPos > 30);
  };
  useEffect(() => {
    setTertiaryLinkData([]);
  }, [selectedPrimaryLink]);
  console.log('secondaryLinkData', secondaryLinkData);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const renderMobileNavigation = () => {
    if (selectedSecondaryLink && selectedPrimaryLink) {
      return renderLinks({ isTertiary: true, navList: tertiaryLinkData });
    } else if (selectedPrimaryLink) {
      return renderLinks({ isSecondary: true, navList: secondaryLinkData });
    }
    return renderLinks({ isPrimary: true, navList: fields?.navigationEntries });
  };
  const renderHeaderTeaser = () => {
    return (
      <div className="w-[390px] h-[700px] bg-white fixed border-l-[1px] border-gray-light top-[65px] right-0 l:w-[464px] flex justify-between flex-col">
        <div>
          <a tabIndex={-1} href={activeNavbarStoryDetail?.featuredStoryCTALink?.value?.href}>
            <Image
              alt="linkImage"
              src="https://www.nov.com/-/media/nov/images/products/products-and-services-hero.jpg?h=295&la=en-us&w=514&cropregion=0,160,1920,1262&hash=DF60D308A4833243AFF0E8BF8932A9FB"
              height={265}
              width={463}
              tabIndex={0}
              className="basicFocus"
            />
          </a>
          <div className="px-[33px] ">
            <a tabIndex={-1} href={activeNavbarStoryDetail?.featuredStoryCTALink?.value?.href}>
              <Text
                tag={'h4'}
                className="h4 !leading-30 mt-[33px] !text-xl text-black basicFocus w-fit"
                tabIndex="0"
                field={activeNavbarStoryDetail.featuredStoryHeadline}
              />
            </a>
            <Text
              tag={'p'}
              className="body1 mt-[27px] !leading-[25.6px]"
              field={activeNavbarStoryDetail.featuredStoryAbstract}
            />
          </div>
        </div>
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
      </div>
    );
  };
  const renderLinks = ({ isPrimary, isSecondary, isTertiary, navList }: any) => {
    return (
      <>
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
            className={clsx('icon-arrow-left text-black visible lg:hidden mt-[16px] text-base', {
              'invisible lg:hidden': !selectedPrimaryLink,
            })}
          ></Icon>
        </a>
        <div className="">
          {navList?.map((navbar: any) => {
            console.log('navbar', navbar);
            return (
              <>
                <Button
                  variant={'secondary'}
                  auto={false}
                  className={clsx(
                    'mt-[14px]  ml-[2px] lg:max-w-[165px] l:max-w-[225px] [&_span]:max-w-full  min-h-[28px] h-fit lg:[&_span]:max-w-[133px] l:[&_span]:max-w-[193px] active:!text-black lg:active:!text-primary hover:!text-black lg:hover:!text-primary',
                    {
                      '!text-primary cursor-default':
                        selectedPrimaryLink === navbar.itemId ||
                        selectedSecondaryLink === navbar.itemId,
                    }
                  )}
                  text={navbar?.menuTitle?.value}
                  field={navbar.url}
                  onClick={(e) => {
                    if (navbar?.subPages?.length > 0) {
                      e.preventDefault();
                      e.stopPropagation();
                      if (isPrimary) {
                        setSelectedPrimaryLink(navbar.itemId);
                        setSecondaryLinkData(navbar.subPages);
                      } else if (isSecondary) {
                        setSelectedSecondaryLink(navbar.itemId);
                        setTertiaryLinkData(navbar.subPages);
                      }
                      if (isPrimary) {
                        setActiveNavbarStoryDetail({
                          featuredStoryHeadline: navbar.featuredStoryHeadline,
                          featuredStoryAbstract: navbar.featuredStoryAbstract,
                          featuredStoryCTALink: navbar.featuredStoryCTALink,
                          featuredStoryCTAText: navbar.featuredStoryCTAText,
                        });
                      }
                    }
                  }}
                  {...(!isTertiary &&
                    navbar?.subPages?.length > 0 && {
                      iconPosition: 'right',
                      iconClassName: 'icon-chevron-right text-lg',
                    })}
                />
              </>
            );
          })}
        </div>{' '}
      </>
    );
  };
  return (
    <div className="fixed top-0 transition-all duration-200 w-full h-full lg:h-fit">
      <div
        className={clsx('headerWrapper w-full bg-transparent transition duration-200 h-[65px]', {
          '!bg-black': isSticky,
          '!bg-white': isExpanded,
        })}
      >
        <div className="container mx-auto h-full flex justify-between items-center">
          <a className="log-wrapper text-white basicFocus" href="/">
            {!isExpanded ? (
              <Image
                alt="logo"
                src="https://www.nov.com/frontend/dist/assets/images/nov-white-logo.svg?h=ca4c3608b57011ce5e9505976a8c031c"
                width={56}
                height={24}
              />
            ) : (
              <Image
                alt="logo"
                src="https://www.nov.com/frontend/dist/assets/images/nov-red-and-grey-logo.svg?h=5a8a2922d81cecf82baa22b433cc9d0f"
                width={56}
                height={24}
              />
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
              onClick={() => {
                setIsUserProfileClick(!isUserProfileClick);
              }}
              className="h-[30px] relative w-[30px] mr-[17px] hidden smd:flex justify-center items-center cursor-pointer basicFocus rounded-[1px] "
            >
              <Icon
                className={clsx('icon-user text-xl ', {
                  'text-white': !isExpanded,
                  'smd:!text-primary': isExpanded || isUserProfileClick,
                })}
              />
              {
                <div
                  className={clsx(
                    'absolute transition-all ease-in-out duration-200 invisible top-[47px] right-[-63px] opacity-0 w-[256px] ',
                    {
                      'smd:visible smd:opacity-100 smd:h-[228px] z-10 drop-shadow-[0_0_5px_rgba(51,51,51,0.22)] before:content("") before:border-[7px] before:absolute before:top-[calc(7px*-2)] before:border-x-transparent before:border-t-transparent before:border-b-white  before:right-[calc(25%+7px)]': isUserProfileClick,
                    }
                  )}
                >
                  <UserAccount
                    portalHeader={fields.portalHeader}
                    portalDescription={fields.portalDescription}
                    portalRegisterUrl={fields.portalRegisterUrl}
                    portalLoginUrl={fields.portalLoginUrl}
                  />
                </div>
              }
            </li>
            <li
              tabIndex={0}
              className="flex items-center basicFocus px-[2.5px] mr-[1px] lg:mr-0 cursor-pointer h-[30px] rounded-[1px]"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <Text
                tag={'p'}
                className={clsx(' mr-[15px] body2 !leading-16 font-medium', {
                  'text-black': isExpanded,
                  'text-white': !isExpanded,
                })}
                field={fields.menuLabel}
              />
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
      {isExpanded && (
        <div className="w-full bg-white scroll-auto overflow-hidden flex flex-col justify-between h-[calc(100%-65px)]">
          <div className="px-[25px] h-[calc(100%-228px)] overflow-x-hidden  overflow-y-auto scroll-auto mt-[-1px] overflow-hidden lg:hidden bg-white no-scrollbar">
            {renderMobileNavigation()}
          </div>
          <div className="bg-white relative h-[700px] w-full hidden lg:block">
            <div className="container flex mx-auto bg-white ">
              <div className="w-[220px] items-start pr-0 xl:w-[300px] mt-[52px] pl-[1px] ">
                {renderLinks({ isPrimary: true, navList: fields?.navigationEntries })}
              </div>
              {selectedPrimaryLink && (
                <div className="w-[220px] items-start pr-0 xl:w-[300px] mt-[52px] pl-[1px] ">
                  {renderLinks({ isSecondary: true, navList: secondaryLinkData })}
                </div>
              )}
              {selectedSecondaryLink && (
                <div className="w-[220px] items-start pr-0 xl:w-[300px] mt-[52px] pl-[1px] ">
                  {renderLinks({ isTertiary: true, navList: tertiaryLinkData })}
                </div>
              )}
            </div>
            {renderHeaderTeaser()}
          </div>
          <div className="smd:hidden">
            <UserAccount
              isMobile={true}
              portalHeader={fields.portalHeader}
              portalDescription={fields.portalDescription}
              portalRegisterUrl={fields.portalRegisterUrl}
              portalLoginUrl={fields.portalLoginUrl}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
