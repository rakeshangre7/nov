// Global
import { convertHtmlToReact } from '@hedgedoc/html-to-react';
import { ReactElement, useEffect, useState } from 'react';

type ImportProps = {
  default: {
    src: string;
  };
};

export type Variant = 'baseline' | 'outline' | 'round' | 'sharp' | 'twotone';

export type GoogleMaterialSymbolProps = {
  className: string;
  icon: string;
  variant: Variant;
};

const GoogleMaterialSymbol = ({
  className,
  icon,
  variant = 'round' as Variant,
}: GoogleMaterialSymbolProps): ReactElement => {
  const [fetchedIcon, setFetchedIcon] = useState('');

  useEffect(() => {
    if (!icon || !variant) return;

    async function fetchIcon() {
      const importResponse = (await import(
        `@material-icons/svg/svg/${icon}/${variant}.svg`
      )) as ImportProps;

      fetch(importResponse.default.src)
        .then((res) => res.text())
        .then((text) => setFetchedIcon(text));
    }

    fetchIcon();
  }, [icon, variant]);

  return <span className={className}>{convertHtmlToReact(fetchedIcon)}</span>;
};

export default GoogleMaterialSymbol;
