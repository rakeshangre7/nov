import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import Text from '@/components/helpers/Text/Text';
import Button from '@/components/helpers/Button/Button';
import clsx from 'clsx';
interface PageNotFoundFieldProps {
  data: {
    homeItem: {
      notFoundHeadline: {
        jsonValue: Field<string>;
      };
      notFoundText: {
        jsonValue: Field<string>;
      };
      notFoundLink: {
        jsonValue: LinkField;
      };
    };
  };
}
export type PageNotFoundProps = {
  fields: PageNotFoundFieldProps;
};
const PageNotFound = ({ fields }: PageNotFoundProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  const errorPageData = fields?.data?.homeItem;
  return (
    <div className="container m-auto py-32 px-6 min-h-[720px] h-screen md:h-auto flex flex-col justify-center">
      {errorPageData?.notFoundHeadline?.jsonValue?.value && (
        <Text
          tag="h1"
          text={errorPageData?.notFoundHeadline?.jsonValue?.value}
          className={clsx(
            'py-2 mb-2.5 md:mb-4 text-theme-heading-text text-7xl md:text-[72px] md:leading-[72px] lg:text-8xl lg:leading-80'
          )}
        />
      )}
      {errorPageData?.notFoundText?.jsonValue?.value && (
        <Text
          tag="p"
          text={errorPageData?.notFoundText?.jsonValue?.value}
          className={clsx('py-2 mb-5 text-lg leading-28')}
        />
      )}
      {errorPageData?.notFoundLink?.jsonValue?.value?.href &&
        errorPageData?.notFoundLink?.jsonValue?.value?.text && (
          <Button
            field={errorPageData?.notFoundLink?.jsonValue}
            variant="standard"
            className={clsx('py-2 !text-base text-lightBlack hover:text-gray-dark font-medium')}
          />
        )}
    </div>
  );
};

export default PageNotFound;
