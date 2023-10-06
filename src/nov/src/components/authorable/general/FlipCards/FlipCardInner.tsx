import React, { useState } from 'react';
import clsx from 'clsx';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Icon from '@/components/helpers/Icon/Icon';
import { Field, ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Button from '@/components/helpers/Button/Button';
import Mp4VideoPlayer from '@/components/helpers/Mp4VideoPlayer/Mp4VideoPlayer';

type FlipCardInnerProps = {
  body: Field<string>;
  cta: LinkField;
  heading: Field<string>;
  image: ImageField;
  imageCropRegion: Field<string>;
  statNumber: Field<string>;
  statText: Field<string>;
  video: Field<string>;
  bothCardsPresent?: boolean;
};

const FlipCardInner = ({
  body,
  cta,
  heading,
  image,
  statNumber,
  statText,
  video,
  bothCardsPresent,
}: FlipCardInnerProps) => {
  const [isFlip, setIsFlip] = useState<boolean>(false);
  return (
    <div
      className={clsx('transition-all', 'duration-200', 'ease-linear w-full', 'preserve3d', {
        rotateY180: isFlip,
      })}
      onClick={() => setIsFlip(!isFlip)}
    >
      {/* front */}
      <div
        className={clsx('absolute', 'w-full', 'h-full')}
        style={{
          backfaceVisibility: 'hidden',
        }}
      >
        <div
          className={clsx(
            'relative',
            'w-full',
            'h-full',
            'bg-no-repeat',
            'flex',
            'flex-col',
            'justify-center',
            'items-center',
            'text-center',
            'bg-cover',
            'bg-center'
          )}
          style={{ backgroundImage: `url(${image?.value?.src})` }}
        >
          {video?.value && (
            <div className={clsx('absolute', 'w-full', 'h-full')}>
              <Mp4VideoPlayer
                field={{
                  videoid: {
                    value: video?.value,
                  },
                  image: {
                    value: image?.value?.src,
                  },
                }}
                autoplay={true}
                loop={true}
                muted={true}
                controls={false}
              />
            </div>
          )}
          <RichTextA11yWrapper
            tag="h5"
            field={heading}
            className={clsx('text-2xl', 'font-bold', 'leading-[1.33]', 'text-white', 'z-10')}
          />
          <Icon
            className={clsx(
              'icon-plus',
              'absolute',
              'top-5',
              'right-5',
              'text-2xl',
              'text-white',
              'z-10'
            )}
          />
        </div>
      </div>
      {/* back */}
      <div
        className={clsx(
          'transition-all',
          'duration-200',
          'ease-linear w-full',
          'absolute',
          'w-full',
          'h-full',
          'flex',
          'rotateY180',
          'backfaceVisibilityHidden'
        )}
      >
        <div
          className={clsx(
            'relative',
            'flex',
            'flex-col',
            'items-center',
            'justify-center',
            'text-white',
            'bg-cover',
            'bg-no-repeat',
            'bg-black',
            'w-full'
          )}
        >
          <div
            className={clsx(
              'absolute',
              'w-full',
              'h-full',
              'opacity-20',
              'bg-center',
              'bg-cover',
              'bg-no-repeat'
            )}
            style={{
              backgroundImage: `url(${image?.value?.src})`,
            }}
          ></div>
          <Text tag="h2" field={statNumber} className={clsx('text-center', 'z-10')} />
          <Text
            tag="p"
            field={statText}
            className={clsx('text-2xs', 'leading-24', 'z-10', 'text-gray')}
          />
          <hr
            className={clsx(
              'w-8',
              'text-center',
              'mt-2',
              'mb-2',
              'border',
              'border-red',
              'z-10',
              'borderInset'
            )}
          ></hr>
          <RichTextA11yWrapper
            tag="h5"
            field={heading}
            className={clsx('text-2xl', 'font-bold', 'leading-[1.33]', 'text-white', 'z-10')}
          />
          <RichTextA11yWrapper
            field={body}
            className={clsx(
              'm-[14px]',
              'py-[27px]',
              '[&_p]:text-sm',
              '[&_p]:leading-24',
              '[&_p]:text-gray',
              'text-center',
              'z-10',
              { 'lg:py-0 lg:my-0 l:py-[27px] l:my-[14px]': bothCardsPresent }
            )}
          />
          <Button
            variant="tertiary"
            field={cta}
            iconPosition="right"
            iconClassName="icon-chevron-right"
            className={clsx(
              'mt-4',
              '!font-medium',
              '[&_span]:font-medium',
              'text-white',
              'pt-[5px]',
              'pb-[5px]',
              'z-10'
            )}
          />
          <Icon
            className={clsx(
              'icon-x',
              'absolute',
              'top-5',
              'right-5',
              'text-2xl',
              'text-white',
              'z-10'
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCardInner;
