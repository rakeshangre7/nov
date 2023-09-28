import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Icon from 'components/helpers/Icon/Icon';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

interface targetItems {
  headline: {
    jsonValue: {
      value?: string;
    };
  };
  cardImage: {
    jsonValue?: ImageField;
  };
  subheading: {
    jsonValue: {
      value?: string;
    };
  };
  primaryURL: {
    path?: string;
    url?: string;
  };
}
interface Fields {
  data: {
    datasource: {
      headline: {
        jsonValue: {
          value?: string;
        };
      };
      pages: {
        targetItems?: Array<targetItems>;
      };
    };
    contextItem: {
      cardCtaText: {
        jsonValue: {
          value?: string;
        };
      };
      cardImage?: {
        jsonValue?: ImageField;
      };
    };
  };
}

export type ContentList3x1Props = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  uid: string;
  componentName: string;
  dataSource?: string;
  fields: Fields;
};

const ContentList3x1 = ({ fields }: ContentList3x1Props): JSX.Element => {
  // Fail out if fields aren't present

  const targetItems = fields?.data?.datasource?.pages?.targetItems;
  const cardCtaText = fields?.data?.contextItem?.cardCtaText?.jsonValue?.value;
  const FallbackImage = fields?.data?.contextItem?.cardImage?.jsonValue?.value?.src;

  const router = useRouter();
  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      <div className="w-full pt-[30px] smd:pt-20">
        <div className="container">
          {fields?.data?.datasource?.headline?.jsonValue && (
            <div className="E4-content-list__title">
              <Text
                tag="h2"
                field={fields?.data?.datasource?.headline?.jsonValue}
                className="leading-[normal] sm:text-6xl lg:text-7xl lg:leading-82 text-black text-center lg:mb-[45px]"
              />
            </div>
          )}
          <div className="lg:flex lg:flex-wrap smd:px-4">
            {Array.isArray(targetItems) &&
              targetItems?.map((Item: targetItems, index: number) => (
                <Fragment key={index}>
                  {Item?.primaryURL?.path &&
                    (Item?.cardImage?.jsonValue?.value?.src || FallbackImage) && (
                      <div
                        className="w-full max-w-[352px] lg:max-w-none lg:w-1/3 mx-auto lg:mx-0 lg:px-[15px] smd:mb-[50px] justify-start flex flex-col hover:!no-underline basicFocus cursor-pointer"
                        onClick={(e) => {
                          if (Item?.primaryURL?.path) {
                            e.stopPropagation();
                            router.push(Item?.primaryURL?.path);
                          }
                        }}
                        onKeyUp={(e: React.KeyboardEvent<HTMLDivElement>) => {
                          if (e.keyCode === 13 && Item?.primaryURL?.path) {
                            e.stopPropagation();
                            router.push(Item?.primaryURL?.path);
                          }
                        }}
                        tabIndex={1}
                      >
                        <div
                          className="w-full pt-[58.14%] md:pt-[59.09%] mt-[45px] mb-[30px] lg:mt-0 overflow-hidden bg-no-repeat bg-center bg-cover block"
                          style={{
                            backgroundImage: `url(${
                              Item?.cardImage?.jsonValue?.value?.src
                                ? Item?.cardImage?.jsonValue?.value?.src
                                : FallbackImage
                            })`,
                          }}
                        ></div>
                        <div className="block">
                          {Item?.headline.jsonValue?.value && (
                            <Text
                              tag="h3"
                              field={Item?.headline?.jsonValue}
                              className="text-black text-lg leading-24 font-semibold lg:text-base lg:font-bold  mb-4"
                            />
                          )}

                          <RichTextA11yWrapper
                            className="text-sm leading-24 [&>p]:text-sm [&>p]:leading-24"
                            field={Item?.subheading?.jsonValue}
                            characterLimit={100}
                          />
                          {cardCtaText && (
                            <button
                              tabIndex={1}
                              className="inline-flex font-primary text-base leading-[normal] lg:text-sm lg:leading-24 justify-between font-medium lg:font-semibold text-lightBlack hover:text-gray-lighter items-center py-[5px] basicFocus"
                            >
                              {cardCtaText}
                              <Icon className="icon-chevron-right font-icomoon not-italic normal-case leading-none antialiased flex flex-col justify-center ml-[4px] text-base font-medium lg:font-semibold text-primary" />
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                </Fragment>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full pt-[30px] smd:pt-20">
        <div className="w-full relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
            src="https://locator.nov.com/?searchTerm="
          ></iframe>
        </div>
      </div>
      <div
        id="test"
        dangerouslySetInnerHTML={{
          __html: `<div class="module eloqua-form" data-name="eloqua-form"
                 data-business-unit=""
                 data-business-segments=""
                 data-brands=""
                 data-page-url="http://qa.nov.com:3000"
                 data-page-title="Contact Us">
                <form id="form0" class="elq-form" ></form>
                <style>.formLoader { border-top-color: #da291c !important;}</style>
                <script type="text/javascript">    
                function topicChange() {        
                  var topic = document.getElementById("fd416a82-619a-ea11-a811-000d3a3477a0");        
                  var topicSelected = topic.options[topic.selectedIndex].text;        
                  var businessUnit = document.getElementById("BusinessUnit").closest('.layout-col');         
                  var brand = document.getElementById("Brand").closest('.layout-col');         
                  var firstName = document.getElementById("FirstName").closest('.layout-col');         
                  var lastName = document.getElementById("LastName").closest('.layout-col');         
                  var email = document.getElementById("EmailAddress").closest('.layout-col');         
                  var company = document.getElementById("CompanyName").closest('.layout-col');         
                  var jobTitle = document.getElementById("JobTitle").closest('.layout-col');         
                  var country = document.getElementById("Country").closest('.layout-col');         
                  var commentsBox = document.getElementById("Comments").closest('.layout-col');         
                  var careerText = document.getElementById("Career");        
                  var responsibleDisclosure = document.getElementById("ResponsibleDisclosure");        
                  var submitButton = document.getElementById("SubmitButton").closest('.layout-col');                    
                  businessUnit.style.display = "none";        
                  brand.style.display = "none";        
                  firstName.style.display = "none";        
                  lastName.style.display = "none";        
                  email.style.display = "none";        
                  company.style.display = "none";        
                  jobTitle.style.display = "none";        
                  country.style.display = "none";        commentsBox.style.display = "none";        careerText.style.display = "none";        responsibleDisclosure.style.display = "none";        submitButton.style.display = "none";        switch (topicSelected) {            case 'Products':                businessUnit.style.display = "block";                brand.style.display = "block";                firstName.style.display = "block";                lastName.style.display = "block";                email.style.display = "block";                company.style.display = "block";                jobTitle.style.display = "block";                country.style.display = "block";                commentsBox.style.display = "block";                submitButton.style.display = "block";                break;            case 'Investors Relations':            case 'Podcasts':            case 'Other':                businessUnit.style.display = "none";                brand.style.display = "none";                firstName.style.display = "block";                lastName.style.display = "block";                email.style.display = "block";                company.style.display = "block";                jobTitle.style.display = "block";                country.style.display = "block";                commentsBox.style.display = "block";                submitButton.style.display = "block";                break;            case 'Careers':                careerText.style.display = "block";                break;            case 'Responsible Disclosure':                responsibleDisclosure.style.display = "block";                break;        }    }    function setBrandDisable() {        var businessUnit = document.getElementById("941fa6f3-459b-ea11-a811-000d3a3477a0");        var brand = document.getElementById("2319c5ba-1c9c-ea11-a811-000d3a3477a0");        if (businessUnit.options[businessUnit.selectedIndex].value === '') {            brand.disabled = false;            brand.style.background = "transparent";        }        else {            brand.disabled = true;            brand.style.background = "rgb(206, 206, 206)";        }    }    function setBUDisable() {        var businessUnit = document.getElementById("941fa6f3-459b-ea11-a811-000d3a3477a0");        var brand = document.getElementById("2319c5ba-1c9c-ea11-a811-000d3a3477a0");        if (brand.options[brand.selectedIndex].value === '') {            businessUnit.disabled = false;            businessUnit.style.background = "transparent";        }        else {            businessUnit.disabled = true;            businessUnit.style.background = "rgb(206, 206, 206)";        }    }</script><div data-form-block-id="f32db81d-749d-ec11-b400-000d3a5beb90"></div> <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.80.2009.0"></script> <div id="dh7IGScPyQ9qfVubvjq7kGKASlekvIeanFe5jIlR65Bs"></div><script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.80.2009.0"></script><div class="d365-mkt-config" style="display:none" data-website-id="h7IGScPyQ9qfVubvjq7kGKASlekvIeanFe5jIlR65Bs" data-hostname="87b9c69a4d404a63af29f40ad50a6f86.svc.dynamics.com"></div><script>    MsCrmMkt.MsCrmFormLoader.on("afterFormLoad", function(event) {        var topicList = document.getElementById('fd416a82-619a-ea11-a811-000d3a3477a0');        topicList.remove(10);        topicList.remove(9);        topicList.remove(8);        topicList.remove(7);        var i=0,inputs = document.querySelectorAll('.elq-form input, .elq-form select, .elq-form textarea'),l=inputs.length;        for(;i<l;i++) {            inputs[i].addEventListener('focus',function(){                this.closest('.elq-field-style').classList.add('focus');            },false);            inputs[i].addEventListener('blur',function(){                this.closest('.elq-field-style').classList.remove('focus');                if (this.value.length>0) {                this.closest('.elq-field-style').classList.add('data');                }                else {                this.closest('.elq-field-style').classList.remove('data');                }            },false);        }    })</script><style>.eloqua-form {position: relative;}</style><a name="map" style="position: absolute; bottom: -16px;"></a>
            </div>`,
        }}
      ></div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentList3x1Props>(ContentList3x1);
export default ContentList3x1;
