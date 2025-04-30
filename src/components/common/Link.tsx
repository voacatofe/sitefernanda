import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode, forwardRef } from 'react';
import { adaptUrl, useCurrentDomain } from '@/utils/url-utils';

interface LinkProps extends NextLinkProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Componente Link personalizado que adapta URLs para preservar o mascaramento de domínio
 * Usa o componente Next/Link internamente, mas adapta as URLs para manter o contexto do domínio
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, ...props }, ref) => {
    const currentDomain = useCurrentDomain();
    const adaptedHref = typeof href === 'string' 
      ? adaptUrl(href, currentDomain) 
      : href;
    
    return (
      <NextLink href={adaptedHref} {...props} ref={ref}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link; 