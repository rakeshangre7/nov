import React from 'react';
import { Field, ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import AuthorsBlockItem from './AuthorBlockItem';

export interface Author {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    authorName?: Field<string>;
    bio?: Field<string>;
    jobTitle?: Field<string>;
    imageCropRegion?: Field<string>;
    image?: ImageField;
    linkURL?: LinkField;
  };
}

export type AuthorsBlockProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: {
    heading: Field<string>;
    authors: Author[];
  };
};

const AuthorsBlock = ({ fields }: AuthorsBlockProps) => {
  return (
    <div className="container m-auto w-full flex justify-center pt-[30px] md:pt-20">
      <div
        className="max-w-[544px] mx-auto"
        data-component="authorable/general/authorblock"
        data-testid="authorblock"
      >
        <Text
          tag="h3"
          field={fields?.heading}
          className="text-black mb-4 text-2xl font-medium font-primary leading-[1.33]"
        />
        {fields?.authors?.map((author: Author, index: number) => (
          <AuthorsBlockItem key={author?.id} author={author} showTopBorder={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default AuthorsBlock;
