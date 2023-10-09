import React, { useEffect, useState } from 'react';
import '../../../../assets/styles/form.module.css';
import { Field, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

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
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const queryString = new URLSearchParams(window.location.search);
    if (queryString.has('yourQueryStringParamName')) {
      setSubmitted(true);
    }
    console.log(queryString.values);
  }, []);

  // Move the conditional check for fields to the top
  if (fields === null || fields === undefined) return <></>;

  const htmlContent = fields?.eloquaForm?.fields?.form?.value;

  return (
    <>
      <a href="#contactus"></a>

      <div className="FormWrapper">
        <div className="container">
          <div className="F1-form">
            {htmlContent && (
              <div className="w-full" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            )}
            {submitted && (
              <div className="submitWrapper">
                <Text tag="h3" field={fields?.thankYouHeadline} />
                <RichText tag="p" field={fields?.thankYouBody} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
