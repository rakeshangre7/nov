import React from 'react';
import '../../../../assets/styles/form.module.css';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface FieldProps {
  elementid: Field<string | number>;
  eloquaForm: {
    id: string | number;
    url: string;
    name: string;
    displayName: string;
    fields: {
      anchorTargetName: Field<string | number>;
      form: Field<string | number>;
      formId: Field<string | number>;
      goal: null;
    };
  };
  thankYouBody: Field<string>;
  thankYouHeadline: Field<string>;
}

export type FormDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: FieldProps;
};

const Form = ({ fields }: FormDataProps) => {
  if (fields === null || fields === undefined) return <></>;

  const htmlContent = fields?.eloquaForm?.fields?.form?.value;

  return (
    <>
      <div className="">
        <div className="container m-auto">
          <div className="">
            {htmlContent && (
              <div className="w-full" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
