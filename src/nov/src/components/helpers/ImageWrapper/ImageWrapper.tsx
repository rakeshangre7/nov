// Global
import {
  Image as SitecoreImage,
  ImageField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import NextImage from 'next/image';
import { KeyboardEventHandler, MouseEventHandler } from 'react';

/**
 * JSS does not yet support Next Image in Exprience Editor
 * This component will switch between the two based on environment
 * which allows us to get the various performance benefits from Next Image
 *
 * Note that the images may display slightly differently in
 * Experience Editor as the JSS Image component doesn't have the same layout options
 */

interface SizedImageField extends ImageField {
  value?: {
    alt?: string;
    height?: string;
    src?: string;
    width?: string;
  };
}
type NextImageLayoutOption = 'intrinsic' | 'responsive' | 'fill';
type ObjectFitOption = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
type ObjectPositionOption = 'top' | 'bottom' | 'left' | 'right' | 'center';
interface AnyNextImage {
  alt: string;
  height?: number;
  src: string;
  width?: number;
  className?: string | undefined;
  editable?: boolean;
  tabIndex?: number;
  onClick?: MouseEventHandler;
  onKeyUp?: KeyboardEventHandler;
  layout?: NextImageLayoutOption;
  objectFit?: ObjectFitOption;
  objectPosition?: ObjectPositionOption;
  priority?: boolean;
}

export interface ImageWrapperProps {
  field: SizedImageField;
  tabIndex?: number;
  className?: string | undefined;
  editable?: boolean;
  onClick?: MouseEventHandler;
  onKeyUp?: KeyboardEventHandler;
  layout?: NextImageLayoutOption;
  objectPosition?: ObjectPositionOption;
  priority?: boolean;
}

// const publicUrl = new URL(process.env.PUBLIC_URL as string);
const toNumber = (str: string | undefined): number => {
  if (typeof str === 'undefined') {
    return 0;
  }
  return parseInt(str, 10);
};

const ImageWrapper = ({
  field,
  className,
  editable,
  tabIndex,
  onClick,
  onKeyUp,
  layout,
  objectPosition,
  priority,
}: ImageWrapperProps): JSX.Element => {
  const sitecoreContext = useSitecoreContext();

  const isExperienceEditor = sitecoreContext?.sitecoreContext?.pageEditing;
  const isPreviewMode = sitecoreContext?.sitecoreContext?.pageState;

  // const pageState = sitecoreContext.sitecoreContext.pageState;

  // Checking if we're in sitecore, even if we are not in experience editor
  // This supports EE and Preview
  // const isInSitecore = pageState !== LayoutServicePageState.Normal;

  const imgSrc = field?.value?.src;
  if (
    ((imgSrc && imgSrc.indexOf('.svg') !== -1) ||
      isExperienceEditor ||
      isPreviewMode === 'preview') &&
    editable
  ) {
    return <SitecoreImage field={field} className={className} />;
  }

  // If the image has no value, return nothing
  if (!field?.value?.src) {
    return <></>;
  }
  const nextImageProps: AnyNextImage = {
    src: field?.value?.src,
    alt: field?.value?.alt || '',
    className,
    tabIndex,
    onClick,
    onKeyUp,
    layout,
    priority,
  };
  if (layout === 'fill') {
    nextImageProps.objectFit = 'cover';
    nextImageProps.objectPosition = objectPosition;
  } else {
    nextImageProps.height = toNumber(field?.value?.height);
    nextImageProps.width = toNumber(field?.value?.width);
  }

  return <NextImage {...nextImageProps} />;
};

export default ImageWrapper;
