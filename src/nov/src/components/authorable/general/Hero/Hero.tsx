import React, { useRef } from 'react';

// Local

export type HeroProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  uid: string;
  componentName: string;
  dataSource?: string;
  fields: Fields;
};
const Hero = ({ fields }: HeroProps): JSX.Element => {
  const scrollTargetRef = useRef<HTMLDivElement>(null);

  const scrollToTarget = () => {
    if (scrollTargetRef.current) {
      const targetPosition = scrollTargetRef.current.getBoundingClientRect().bottom;
      window.scrollTo({
        top: targetPosition - 65,
        behavior: 'smooth',
      });
    }
  };
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      className=" B1-hero B1-hero--text-white relative w-full min-h-screen h-auto bg-gray overflow-hidden"
      ref={scrollTargetRef}
    >
      <div className="module simple-slider simple-slider--align-left simple-slider--text-white min-h-screen w-full overflow-hidden">
        <div className="simple-slider-inner">
          <div
            id="784DD9E8-C40D-47F4-ACCF-893251B02EB3"
            className="B1-hero__item slide B1-hero--text-white has-gradient  has-image"
            style={{
              backgroundImage: `url('background-image: url('https://webdev.nov.com:443/-/media/nov/images/about/we-are-nov-about/nov-employee-on-rigsite.jpg?h=1080&la=en-us&w=1920&cropregion=0,0,1920,1080&hash=5DBC0D1C9F096F99A482CB966FF1A22C')`,
            }}
          >
            <div className="B1-hero__gradient"></div>

            <div className="container">
              <h1 className="B1-hero__item__heading">About Us</h1>

              <div className="B1-hero__item__desc">
                <p>
                  <span>
                    Every day, the oil and gas industry&rsquo;s best minds put more than 150 years
                    of experience to work to help our customers achieve lasting success. We have the
                    people, capabilities, and vision to serve the needs of a challenging and
                    evolving industry. One the world can&rsquo;t live without.
                  </span>
                </p>
              </div>
            </div>
            <div className="B1-hero__item__fold_scroll_indicator">
              <a className="ui-btn--icon" title="Scroll to content">
                <i className="icon icon-chevron-down"></i>
              </a>
              <button onClick={scrollToTarget}>Scroll to Target</button>
            </div>
            <div className="hidden-anchor"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<HeroProps>(Hero);
export default Hero;
