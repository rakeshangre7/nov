import React from 'react';
import { Field, ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import AuthorsBlockItem from './AuthorBlockItem';

interface Author {
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
  fields: {
    heading: Field<string>;
    authors: Author[];
  };
};

const AuthorsBlock = ({ fields }: AuthorsBlockProps) => {
  return (
    <div className="container m-auto w-full flex justify-center pt-[30px] md:pt-20">
      <div className="" data-component="authorable/general/authorblock" data-testid="authorblock">
        <Text
          tag="h3"
          field={fields?.heading}
          className="text-black mb-4 text-2xl font-medium font-primary leading-[1.33]"
        />
        {fields?.authors?.map((author: Author) => (
           <div
           key={author.id}
           className="border-y-[1px] border-gray-light w-full md:w-[544px] cursor-pointer"
         >
          <AuthorsBlockItem
            key={author?.id}
            fields={fields} 
            rendering={{
              componentName: '',
            }}
            params={{}}
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorsBlock;
