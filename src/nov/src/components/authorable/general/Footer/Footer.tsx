// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import Icon from 'components/helpers/Icon/Icon';
import { useBreakpoints } from '../../../utility/breakpoints';

// Local

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  text: Field<string>;
}

export type FooterProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const Footer = ({ fields }: FooterProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  const { isDesktop } = useBreakpoints();

  return (
    <>
      <div className="A3-footer__inner flex flex-wrap">
        <div className="A3-footer__logo order-1 grow">
          <div className="main-logo">Logo</div>
        </div>
        <a href="https://www.nov.com:443/contact" className="w-48 lg:w-64 flex bg-red order-3">
          Contact Us
        </a>
        <nav className="module A3-footer__nav js-accordion w-full order-4">
          <ul className="FooterNavList grid grid-flow-col justify-stretch">
            <li className="js-accordion-item" data-max-height="260px">
              <div className="A3-footer__nav__heading js-accordion-item-trigger">
                <a href="/about" className="A3-footer__nav__link show-desktop">
                  About Us
                </a>
                <span className="A3-footer__nav__item-title show-mobile js-accordion-item-title">
                  About Us
                </span>
                <div className="A3-footer__nav__indicator js-accordion-item-indicator">
                  {!isDesktop && <Icon className="icon-chevron-down" />}
                </div>
              </div>
              <div className="A3-footer__nav__submenu js-accordion-item-content">
                <ul>
                  <li className="hide-desktop">
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/about/events">Industry Events</a>
                  </li>
                  <li>
                    <a href="/about/news">News</a>
                  </li>
                  <li>
                    <a href="/about/nov-live">NOV Live</a>
                  </li>
                  <li>
                    <a href="/about/nov-today-podcast">NOV Today Podcast</a>
                  </li>
                  <li>
                    <a href="/about/our-business-units">Our Business Units</a>
                  </li>
                  <li>
                    <a href="/about/our-company-structure">Our Company Structure</a>
                  </li>
                  <li>
                    <a href="/about/sustainability">Sustainability</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="js-accordion-item" data-max-height="224px">
              <div className="A3-footer__nav__heading js-accordion-item-trigger">
                <a href="/products-and-services" className="A3-footer__nav__link show-desktop">
                  Products and Services
                </a>
                <span className="A3-footer__nav__item-title show-mobile js-accordion-item-title">
                  Products and Services
                </span>
                <div className="A3-footer__nav__indicator js-accordion-item-indicator">
                  {!isDesktop && <Icon className="icon-chevron-down" />}
                </div>
              </div>
              <div className="A3-footer__nav__submenu js-accordion-item-content">
                <ul>
                  <li className="hide-desktop">
                    <a href="/products-and-services">Products and Services</a>
                  </li>
                  <li>
                    <a href="/products-and-services/brands">Brands</a>
                  </li>
                  <li>
                    <a href="/products-and-services/capabilities">Capabilities and Industries</a>
                  </li>
                  <li>
                    <a href="/products-and-services/document-library">Document Library</a>
                  </li>
                  <li>
                    <a href="/products-and-services/patents">Patents</a>
                  </li>
                  <li>
                    <a href="/products-and-services/tools">Tools</a>
                  </li>
                  <li>
                    <a href="https://training.nov.com/">Training</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="js-accordion-item" data-max-height="188px">
              <div className="A3-footer__nav__heading js-accordion-item-trigger">
                <a href="/careers" className="A3-footer__nav__link show-desktop">
                  Careers
                </a>
                <span className="A3-footer__nav__item-title show-mobile js-accordion-item-title">
                  Careers
                </span>
                <div className="A3-footer__nav__indicator js-accordion-item-indicator">
                  {!isDesktop && <Icon className="icon-chevron-down" />}
                </div>
              </div>
              <div className="A3-footer__nav__submenu js-accordion-item-content">
                <ul>
                  <li className="hide-desktop">
                    <a href="/careers">Careers</a>
                  </li>
                  <li>
                    <a href="/careers/diversity">Diversity</a>
                  </li>
                  <li>
                    <a href="/careers/early-career-development">Early Career Development</a>
                  </li>
                  <li>
                    <a href="/careers/our-employees">Our Employees</a>
                  </li>
                  <li>
                    <a href="https://egay.fa.us6.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_2001/requisitions">
                      Search for Jobs
                    </a>
                  </li>
                  <li>
                    <a href="/careers/working-at-nov">Working at NOV</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="js-accordion-item" data-max-height="404px">
              <div className="A3-footer__nav__heading js-accordion-item-trigger">
                <a
                  href="https://investors.nov.com/investor-overview"
                  className="A3-footer__nav__link show-desktop"
                >
                  Investors
                </a>
                <span className="A3-footer__nav__item-title show-mobile js-accordion-item-title">
                  Investors
                </span>
                <div className="A3-footer__nav__indicator js-accordion-item-indicator">
                  {!isDesktop && <Icon className="icon-chevron-down" />}
                </div>
              </div>
              <div className="A3-footer__nav__submenu js-accordion-item-content">
                <ul>
                  <li className="hide-desktop">
                    <a href="https://investors.nov.com/investor-overview">Investors</a>
                  </li>
                  <li>
                    <a href="https://investors.nov.com/annual-results">Annual Results</a>
                  </li>
                  <li>
                    <a href="https://investors.nov.com/company-overview">Company Overview</a>
                  </li>
                  <li>
                    <a href="http://investors.nov.com/corporate-governance/highlights">
                      Corporate Governance
                    </a>
                  </li>
                  <li>
                    <a href="https://investors.nov.com/events">Events</a>
                  </li>
                  <li>
                    <a href="http://investors.nov.com/shareholder-services/contact-ir">
                      Investor Contacts
                    </a>
                  </li>
                  <li>
                    <a href="https://investors.nov.com/news-releases">News Releases</a>
                  </li>
                  <li>
                    <a href="http://investors.nov.com/presentations">Presentations</a>
                  </li>
                  <li>
                    <a href="https://investors.nov.com/quarterly-results">Quarterly Results</a>
                  </li>
                  <li>
                    <a href="https://investors.nov.com/sec-filings">SEC Filings</a>
                  </li>
                  <li>
                    <a href="https://investors.nov.com/shareholder-information">
                      Shareholder Information
                    </a>
                  </li>
                  <li>
                    <a href="http://investors.nov.com/stock-information/stock-quote">
                      Stock Information
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <div className="A3-footer__social lg:order-2 order-5">
          <ul className="flex">
            <li>
              <a href="https://www.facebook.com/NOVGlobal/" target="_blank">
                <i className="icon-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/national-oilwell-varco" target="_blank">
                <i className="icon-linked-in"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/NOVGlobal" target="_blank">
                <i className="icon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/nationaloilwellvarco" target="_blank">
                <i className="icon-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/novglobal/" target="_blank">
                <i className="icon-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-gray-lightest order-6 w-full">
          <div className="container max-w-full px-8 lg:px-20 py-8 md:flex md:justify-between">
            <ul className="flex">
              <li>
                <a href="https://www.nov.com:443/privacy-policy">Privacy Notice</a>
              </li>
              <li>
                <a href="https://www.nov.com:443/terms-of-use">Terms of Use</a>
              </li>
              <li>
                <a href="https://www.nov.com:443/policies">Policies</a>
              </li>
              <li>
                <a href="https://www.nov.com:443/trust-center">Trust Center</a>
              </li>
              <li>
                <a href="https://brandfolder.com/nov/media-kit">Media Kit</a>
              </li>
            </ul>
            <p className="A3-footer__legal__copyright">© 2023 NOV Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<FooterProps>(Footer);
export default Footer;
