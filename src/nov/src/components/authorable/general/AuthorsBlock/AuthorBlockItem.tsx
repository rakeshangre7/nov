import React, { useEffect, useRef, useState } from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Icon from 'components/helpers/Icon/Icon';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import { Author } from './AuthorsBlock';
import clsx from 'clsx';

export type AuthorsBlockProps = {
  author: Author;
  showTopBorder?: boolean;
};

const AuthorsBlockItem = ({ author, showTopBorder }: AuthorsBlockProps) => {
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
    <div key={author.id} className="border-gray-light cursor-pointer">
      <div className="flex justify-center">
        <div
          key={author.id}
          className={clsx('border-b-[1px] border-gray-light cursor-pointer', {
            'border-t-[1px]': showTopBorder,
          })}
        >
          <div
            onClick={() => toggleAccordion(author.id)}
            className="flex justify-between items-center w-full h-[56px]"
          >
            <Text
              className="text-black w-80 smd:w-auto smd:min-w-[180px] text-2xs leading-normal smd:text-base pr-[15px] font-primary capitalize"
              tag="p"
              field={author?.fields?.authorName}
            />
            <Text
              className="text-gray-dark text-2xs leading-normal smd:text-base"
              tag="p"
              field={author?.fields?.jobTitle}
            />

            <Icon
              className={clsx('text-red text-2xl w-[56px] ml-auto text-center', {
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
                  <div className="">
                    <ImageWrapper
                      field={author?.fields?.image}
                      className="mt-2 mr-4 min-w-[96px] max-w-[96px] h-auto"
                    />
                  </div>
                )}
                <RichText
                  className="[&_p]:pb-[31.5px] [&_p]:text-gray-dark [&_p]:text-sm [&_p]:leading-24 text-gray-dark text-sm leading-24 font-primary "
                  field={author?.fields?.bio}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorsBlockItem;
