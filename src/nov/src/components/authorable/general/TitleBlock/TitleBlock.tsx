// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import Button from '@/components/helpers/Button/Button';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import { Project } from '.generated/templates/Project.Item.model';
import { Sitecore } from '.generated/templates/_.Sitecore.Override';
// Local

//Leprechaun implementation.
export type TitleBlockProps = Sitecore.Override.ComponentBase &
  Project.Item.NovCom.Modules.Fields.TitleBlock & {
    componentName: string;
    params?: {
      DynamicPlaceholderId?: string;
      FieldNames?: string;
      alignment?: string;
    };
  };

const TitleBlock = ({ fields, params }: TitleBlockProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="container m-auto flex pt-[30px] smd:pt-20 flex-col justify-center">
      <div
        className={clsx('max-w-[736px] m-auto', {
          'text-left': params?.alignment === 'left',
          'text-center': params?.alignment !== 'left',
        })}
      >
        <Text tag="h2" field={fields?.title} className="w-full text-black" />
        <RichTextA11yWrapper
          field={fields.body}
          className="mt-[20px] [&_p]:!leading-32 [&_p]:!text-gray-dark w-full "
        />
        {fields?.cta && fields?.cta?.value?.href && (
          <div
            className={clsx('w-full flex ', {
              'justify-start': params?.alignment === 'left',
              'justify-center': params?.alignment !== 'left',
            })}
          >
            <Button
              variant="tertiary"
              field={fields?.cta}
              className="mt-[33px]"
              iconPosition="right"
              iconClassName="icon-chevron-right"
            />
          </div>
        )}
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<TitleBlockProps>(TitleBlock);
export default TitleBlock;
