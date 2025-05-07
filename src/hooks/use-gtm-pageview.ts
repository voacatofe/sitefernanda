import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export const useGTMPageview = () => {
  const pathname = usePathname();
  const lastPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && pathname && pathname !== lastPathRef.current) {
      lastPathRef.current = pathname;
      window.dataLayer = window.dataLayer || [];
      setTimeout(() => {
        // Evento tradicional de pageview
        window.dataLayer.push({
          'event': 'pageview',
          'page_path': pathname,
          'page_title': document.title
        });
        
        // Evento de virtualPageview para SPAs
        window.dataLayer.push({
          'event': 'virtualPageview',
          'pagePath': pathname,
          'pageTitle': document.title
        });
      }, 0);
    }
  }, [pathname]);
}; 