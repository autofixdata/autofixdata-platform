'use client';

import NextLink, { LinkProps } from 'next/link';
import { useParams } from 'next/navigation';
import { AnchorHTMLAttributes, forwardRef } from 'react';

type LocalizedLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const LocalizedLink = forwardRef<HTMLAnchorElement, LocalizedLinkProps>(
  ({ href, children, ...props }, ref) => {
    const params = useParams();
    const lang = (params?.lang as string) || 'en';

    let localizedHref = href.toString();

    // Only prefix root-relative paths that don't already have the lang
    if (localizedHref.startsWith('/') && !localizedHref.startsWith(`/${lang}/`) && localizedHref !== `/${lang}`) {
      localizedHref = `/${lang}${localizedHref === '/' ? '' : localizedHref}`;
    }

    return (
      <NextLink href={localizedHref} ref={ref} {...props}>
        {children}
      </NextLink>
    );
  }
);

LocalizedLink.displayName = 'LocalizedLink';

export default LocalizedLink;
