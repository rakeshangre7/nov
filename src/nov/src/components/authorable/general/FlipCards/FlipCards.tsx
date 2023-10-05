import React from 'react';

// Local

import { Project } from '.generated/templates/Project.Item.model';
import { Sitecore } from '.generated/templates/_.Sitecore.Override';
import clsx from 'clsx';
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import FlipCardInner from './FlipCardInner';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Button from '@/components/helpers/Button/Button';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

export type FlipCardsProps = Sitecore.Override.ComponentBase &
  Project.Item.NovCom.Modules.Cards.Fields.FlipCards & {
    fields: {
      cta: LinkField;
      cta1: LinkField;
      cta2: LinkField;
      cta3: LinkField;
      cta4: LinkField;
      cta5: LinkField;
      cta6: LinkField;
    };
  };

const FlipCards = ({ fields }: FlipCardsProps): JSX.Element => {
  // Fail out if fields aren't present

  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      <div className={clsx('smd:pt-20', 'pt-[30px]')}>
        {/* flip card info starts */}
        <div className={clsx('mb-20')}>
          <div className="container">
            <div className={clsx('max-w-[736px]', 'm-auto', 'text-center')}>
              <RichTextA11yWrapper
                tag="h2"
                field={fields?.heading}
                className={clsx('mb-5', 'text-black')}
              />
              <RichTextA11yWrapper
                field={fields?.body}
                className={clsx('text-gray-dark', '[&_p]:lg:leading-32')}
              />
              <Button
                variant="tertiary"
                field={fields?.cta}
                iconPosition="right"
                iconClassName="icon-chevron-right"
                className={clsx(
                  'mt-[30px]',
                  '!font-medium',
                  '[&_span]:font-medium',
                  'pt-[5px]',
                  'pb-[5px]',
                  '!leading-normal'
                )}
              />
            </div>
          </div>
        </div>

        {/* flip card wrapper starts */}
        <div
          className={clsx(
            'flex',
            'flex-row',
            'flex-wrap',
            'lg:before:pt-[50%]',
            'smd:before:pt-[100%]'
          )}
        >
          {/* 1st card */}
          <div
            className={clsx(
              'lg:basis-3/12',
              'smd:basis-6/12',
              'relative',
              'flex',
              'before:pt-[200%]',
              'w-full',
              'perspective-1000',
              'grow'
            )}
          >
            <FlipCardInner
              body={fields?.body1}
              cta={fields?.cta1}
              heading={fields?.heading1}
              image={fields?.image1}
              imageCropRegion={fields?.image1CropRegion}
              statNumber={fields?.statNumber1}
              statText={fields?.statText1}
              video={fields?.video1}
            />
          </div>
          {/* 2nd and 3rd card */}
          <div
            className={clsx(
              'lg:basis-3/12',
              'smd:basis-6/12',
              'relative',
              'flex',
              'flex-col',
              'grow',
              'w-full'
            )}
          >
            <div
              className={clsx(
                'basis-3/12',
                'relative',
                'flex',
                'grow',
                'before:pt-[100%]',
                'perspective-1000'
              )}
            >
              <FlipCardInner
                body={fields?.body2}
                cta={fields?.cta2}
                heading={fields?.heading2}
                image={fields?.image2}
                imageCropRegion={fields?.image2CropRegion}
                statNumber={fields?.statNumber2}
                statText={fields?.statText2}
                video={fields?.video2}
              />
            </div>
            <div
              className={clsx(
                'basis-3/12',
                'relative',
                'flex',
                'grow',
                'before:pt-[100%]',
                'perspective-1000'
              )}
            >
              <FlipCardInner
                body={fields?.body3}
                cta={fields?.cta3}
                heading={fields?.heading3}
                image={fields?.image3}
                imageCropRegion={fields?.image3CropRegion}
                statNumber={fields?.statNumber3}
                statText={fields?.statText3}
                video={fields?.video3}
              />
            </div>
          </div>
          {/* 4th card */}
          <div
            className={clsx(
              'lg:basis-3/12',
              'smd:basis-6/12',
              'relative',
              'flex',
              'before:pt-[200%]',
              'w-full',
              'grow',
              'perspective-1000'
            )}
          >
            <FlipCardInner
              body={fields?.body4}
              cta={fields?.cta4}
              heading={fields?.heading4}
              image={fields?.image4}
              imageCropRegion={fields?.image4CropRegion}
              statNumber={fields?.statNumber4}
              statText={fields?.statText4}
              video={fields?.video4}
            />
          </div>
          {/* 5th and 6th card */}
          <div
            className={clsx(
              'lg:basis-3/12',
              'smd:basis-6/12',
              'relative',
              'flex',
              'flex-col',
              'grow',
              'w-full'
            )}
          >
            <div
              className={clsx(
                'basis-3/12',
                'relative',
                'flex',
                'grow',
                'before:pt-[100%]',
                'perspective-1000'
              )}
            >
              <FlipCardInner
                body={fields?.body5}
                cta={fields?.cta5}
                heading={fields?.heading5}
                image={fields?.image5}
                imageCropRegion={fields?.image5CropRegion}
                statNumber={fields?.statNumber5}
                statText={fields?.statText5}
                video={fields?.video5}
              />
            </div>
            <div
              className={clsx(
                'basis-3/12',
                'relative',
                'flex',
                'grow',
                'before:pt-[100%]',
                'perspective-1000'
              )}
            >
              <FlipCardInner
                body={fields?.body6}
                cta={fields?.cta6}
                heading={fields?.heading6}
                image={fields?.image6}
                imageCropRegion={fields?.image6CropRegion}
                statNumber={fields?.statNumber6}
                statText={fields?.statText6}
                video={fields?.video6}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCards;
