import React, { useEffect, useRef, useState } from 'react';
import { Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import Icon from 'components/helpers/Icon/Icon';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import { Author } from './AuthorsBlock';
import clsx from 'clsx';

export type AuthorsBlockProps = {
  fields: {
    heading: Field<string>;
    authors: Author[];
  };
};

const AuthorsBlockItem = ({ fields }: AuthorsBlockProps) => {
  const [openAuthors, setOpenAuthors] = useState<string[]>([]);
  const [height, setHeight] = useState<number | null | undefined>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (contentRef?.current) {
      contentRef?.current?.scrollHeight && setHeight(contentRef.current.scrollHeight);
    }
  }, [openAuthors]);

  const isAuthorOpen = (authorId: string) => openAuthors.includes(authorId);

  const toggleAccordion = (authorId: string) => {
    if (isAuthorOpen(authorId)) {
      setOpenAuthors(openAuthors.filter((id) => id !== authorId));
    } else {
      setOpenAuthors([...openAuthors, authorId]);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="" data-component="authorable/general/authorblock" data-testid="authorblock">
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
                  className={clsx('text-red text-2xl', {
                    'icon-minus': isAuthorOpen(author.id),
                    'icon-plus': !isAuthorOpen(author.id),
                  })}
                />
              </div>
              <div
                style={{
                  maxHeight: isAuthorOpen(author.id) ? `${height}px` : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.2s ease',
                }}
                className={`flex justify-between items-center w-full overflow-hidden`}
                id={`control_${author.id}`}
                aria-controls={`body_${author.id}`}
              >
                <div>
                  <div
                    className="text-black flex justify-between duration-200 overflow-hidden"
                    ref={contentRef}
                    style={{
                      maxHeight: isAuthorOpen(author.id) ? `${height}px` : '0',
                      overflow: 'hidden',
                    }}
                  >
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AuthorsBlockItem;
