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
    params?: {
      Styles?: string;
      DynamicPlaceholderId?: string;
      FieldNames?: string;
    };
  };

const TitleBlock = ({ fields, params }: TitleBlockProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="container m-auto flex pt-[80px] flex-col justify-center">
      <div
        className={clsx('max-w-[736px] m-auto', {
          'text-left': params?.Styles === 'position-left',
          'text-center': params?.Styles !== 'position-left',
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
              'justify-start': params?.Styles === 'position-left',
              'justify-center': params?.Styles !== 'position-left',
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
