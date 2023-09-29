import Button from '@/components/helpers/Button/Button';
import { Field, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentRendering, Placeholder } from '@sitecore-jss/sitecore-jss-react';
import clsx from 'clsx';
import { TitleBlockProps } from '../TitleBlock/TitleBlock';

type sidebarField = {
  headline?: Field<string>;
  body?: Field<string>;
};
export type SidebarSectionProps = {
  fields?: sidebarField & {
    [key: string]: LinkField;
  };
  uid?: string;
  componentName?: string;
  dataSource?: string;
  rendering?: ComponentRendering & {
    placeholders?: {
      'sidebar-content': TitleBlockProps[];
    };
  };
  placeholders?: {
    'sidebar-content': TitleBlockProps[];
  };
};

const SidebarSection = ({ fields, rendering }: SidebarSectionProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  const renderLinks = () => {
    let links = [];
    for (let i = 0; i <= 10; i++) {
      if (fields?.[`link${i}`]) {
        const isMediaLink =
          fields?.[`link${i}`]?.value?.href &&
          fields?.[`link${i}`]?.value?.href?.length &&
          fields?.[`link${i}`]?.value?.href
            ?.substring((fields?.[`link${i}`]?.value?.href?.length || 0) - 4)
            .toLowerCase() === '.pdf';
        if (fields?.[`link${i}`]?.value?.href && fields?.[`link${i}`]?.value?.text) {
          links.push(
            <li
              className={clsx('border-solid	border-gray-light border-b py-[19px] px-2', {
                'border-t': i === 1,
              })}
            >
              <Button
                auto={false}
                variant={''}
                field={fields?.[`link${i}`]}
                className="!text-black !text-base !leading-[1.5] !font-semibold !no-underline hover:!no-underline focus:!no-underline active:!no-underline !justify-between"
                iconPosition="right"
                iconClassName={clsx('block float-right text-base', {
                  'icon-download': isMediaLink,
                  'icon-arrow-right': !isMediaLink,
                })}
              />
            </li>
          );
        }
      }
    }
    return links;
  };
  return (
    <div>
      <div className="container smd:flex relative">
        <div
          className={clsx('grow w-full ', {
            '[&_div:first-of-type]:!pl-0':
              rendering?.placeholders?.['sidebar-content']?.[0]?.componentName === 'TitleBlock',
            '!pr-[25px]':
              rendering?.placeholders?.['sidebar-content']?.[0]?.componentName === 'ArticleImage',
          })}
        >
          <Placeholder name="sidebar-content" rendering={rendering as ComponentRendering} />
        </div>
        <div className="w-full mx-auto mt-[30px] mb-0 px-4 pt-12 pb-8 bg-gray-lightest smd:mt-0 smd:mr-[-25px] smd:mb-0 smd:ml-auto smd:p-[49px] smd:w-[350px] smd:self-start	smd:flex-[0_0_350px] lg:w-[450px] lg:flex-[0_0_450px]">
          {fields?.headline && (
            <Text
              tag="h3"
              field={fields?.headline}
              className="text-black text-2xl leading-[1.67] m-0 p-2"
            />
          )}
          {fields?.body && (
            <Text
              tag="p"
              className="m-0 p-2 !pb-6 text-sm leading-24 text-black"
              field={fields?.body}
            />
          )}
          <ul className="mb-6 mx-0 mt-0 p-0">{renderLinks()}</ul>
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<SidebarSectionProps>(SidebarSection);
export default SidebarSection;
