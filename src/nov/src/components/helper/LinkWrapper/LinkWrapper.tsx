// Global
import React from 'react';
import { Link, LinkProps, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

// Lib
import useExperienceEditor from 'lib/use-experience-editor';

/**
 * This component adds some needed accessibility updates to the JSS Link component
 */

export interface LinkWrapperProps extends LinkProps {
  srOnlyText?: string;
  suppressLinkText?: boolean;
  suppressNewTabIcon?: boolean;
}

const INTERNAL_LINK_REGEX = /^\/|^\#/g;

const LinkWrapper = React.forwardRef(
  ({
    children,
    field,
    srOnlyText,
    suppressLinkText,
    suppressNewTabIcon,
    ref,
    ...props
  }: LinkWrapperProps): JSX.Element => {
    // Format field as LinkField for consistency
    const asLinkField = !field.value ? { value: { ...field } } : (field as LinkField);
    const text = suppressLinkText ? '' : asLinkField?.value?.text;
    const target = asLinkField?.value?.target;

    const isEE = useExperienceEditor();

    // In experience editor, do not pass any children but retain basic styling so that double components do not appear when using <Link>
    if (isEE) {
      return (
        <Link
          field={asLinkField}
          showLinkTextWithChildrenPresent={false}
          internalLinkMatcher={INTERNAL_LINK_REGEX}
          ref={typeof ref !== 'string' ? ref : null}
          {...props}
        />
      );
    }

    // If no content is present, don't print
    if (!suppressLinkText && !asLinkField.value.text && !asLinkField.value.href) return <></>;

    return (
      <Link
        field={asLinkField}
        internalLinkMatcher={INTERNAL_LINK_REGEX}
        ref={typeof ref !== 'string' ? ref : null}
        showLinkTextWithChildrenPresent={false}
        {...props}
      >
        {text}
        {children}
        {(target === '_blank' || srOnlyText) && (
          <>
            <span className="sr-only">
              {srOnlyText && srOnlyText}
              {/* Preserve a single space character before SR Tab Text */}
              {target === '_blank' && ' (Opens in a new tab)'}
            </span>
            {/* Icon Goes Here */}
            {!suppressNewTabIcon && target === '_blank' && <span></span>}
          </>
        )}
      </Link>
    );
  }
);

LinkWrapper.displayName = 'LinkWrapper';

export default LinkWrapper;
