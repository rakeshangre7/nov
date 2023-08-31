import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import Text from '@/components/helpers/Text/Text';
import Button from '@/components/helpers/Button/Button';
import clsx from 'clsx';

type PageNotFoundFieldProps = {
  data: {
    homeItem: {
      notFoundHeadline: {
        jsonValue: Field<string>;
      };
      notFoundText: {
        jsonValue: Field<string>;
      };
      notFoundLink: {
        linkType: string;
        anchor: string;
        url: string;
        href: string;
        text: string;
        className: string;
      };
    };
  };
};
export type PageNotFoundProps = {
  fields: PageNotFoundFieldProps;
};

const PageNotFound = ({ fields }: PageNotFoundProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  const errorPageData = fields?.data?.homeItem;
  const errorPageDataLink = {
    value: errorPageData?.notFoundLink,
  };
  return (
    <div className="container m-auto py-32 px-6">
      {errorPageData?.notFoundHeadline?.jsonValue?.value && (
        <Text
          tag="h1"
          text={errorPageData?.notFoundHeadline?.jsonValue?.value}
          className={clsx('py-2 mb-5 text-theme-heading-text')}
        />
      )}
      {errorPageData?.notFoundText?.jsonValue?.value && (
        <Text
          tag="p"
          text={errorPageData?.notFoundText?.jsonValue?.value}
          className={clsx('py-2 mb-5')}
        />
      )}
      {errorPageDataLink?.value?.href && errorPageDataLink?.value?.text && (
        <Button field={errorPageDataLink} variant="standard" />
      )}
    </div>
  );
};

export default PageNotFound;
