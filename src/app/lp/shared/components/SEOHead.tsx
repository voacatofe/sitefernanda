"use client";

import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  canonicalUrl: string;
  propertyType: string;
  bedrooms: string;
  price?: string;
  constructionStatus: string;
}

export default function SEOHead({
  title,
  description,
  location,
  imageUrl,
  canonicalUrl,
  propertyType,
  bedrooms,
  price,
  constructionStatus
}: SEOHeadProps) {
  const fullTitle = `${title} | ${location} | Fernanda Soares Imóveis`;
  const baseUrl = 'https://fernandasoaresimoveis.com.br';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": title,
          "description": description,
          "url": canonicalUrl,
          "image": imageUrl,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": location,
            "addressRegion": "SC",
            "addressCountry": "BR"
          },
          "numberOfRooms": bedrooms,
          "propertyType": propertyType,
          ...(price && { "price": price }),
          "constructionStatus": constructionStatus,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
          },
          "broker": {
            "@type": "RealEstateAgent",
            "name": "Fernanda Soares",
            "image": `${baseUrl}/images/fernanda-soares.jpg`,
            "url": baseUrl,
            "telephone": "+55 48 99999-9999",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Florianópolis",
              "addressRegion": "SC",
              "addressCountry": "BR"
            }
          }
        })}
      </script>
    </Head>
  );
} 