import React, { useEffect, useRef, useState } from 'react';
import { Field, ImageField, LinkField, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Icon from 'components/helpers/Icon/Icon';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';

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
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: {
    heading: Field<string>;
    authors: Author[];
  };
};

const AuthorsBlock = ({ fields }: AuthorsBlockProps) => {
  console.log(fields);

  const [openAuthors, setOpenAuthors] = useState<string[]>([]);
  const [height, setHeight] = useState<number | null | undefined>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxContentHeight, setmaxContentHeight] = useState<number>(223.5);
  useEffect(() => {
    if (contentRef?.current) {
      contentRef?.current?.scrollHeight && setHeight(contentRef.current.scrollHeight);
    }
    setmaxContentHeight(window.innerWidth <= 768 ? 223.5 : 151.5);
  }, []);

  const isAuthorOpen = (authorId: string) => openAuthors.includes(authorId);

  const toggleAccordion = (authorId: string) => {
    if (isAuthorOpen(authorId)) {
      setOpenAuthors(openAuthors.filter((id) => id !== authorId));
    } else {
      setOpenAuthors([authorId]);
    }
  };

  return (
    <>
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
              <div
                onClick={() => toggleAccordion(author.id)}
                className="flex justify-between items-center w-full md:w-[544px] h-[56px]"
              >
                <p className="text-black text-base pr-[15px] font-primary capitalize">
                  {author?.fields?.authorName?.value}
                </p>
                <p className="text-gray-dark text-base">{author?.fields?.jobTitle?.value}</p>

                <Icon
                  className={
                    isAuthorOpen(author.id)
                      ? 'icon-minus text-red text-2xl'
                      : 'icon-plus text-red text-2xl'
                  }
                />
              </div>
              <div
                style={{
                  height: isAuthorOpen(author.id)
                    ? `${Math.min(maxContentHeight, height || maxContentHeight)}px`
                    : '0',
                }}
                className={`flex overflow-hidden justify-between items-center w-full duration-200`}
                id={`control_${author.id}`}
                aria-controls={`body_${author.id}`}
              >
                {isAuthorOpen(author.id) && (
                  <div>
                    <div className="text-black flex justify-between duration-200 " ref={contentRef}>
                      {author?.fields?.image && (
                        <div className="max-w-[96px] max-h-[96px] min-w-[96px] min-h-[96px] mr-4">
                          <ImageWrapper
                            field={author?.fields?.image}
                            className="mt-2 mr-4 text-black flex"
                          />
                        </div>
                      )}
                      <RichText
                        className="text-gray-dark pb-[14px] mb-[17.5px] text-sm leading-6 font-primary "
                        field={author?.fields?.bio}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AuthorsBlock;
