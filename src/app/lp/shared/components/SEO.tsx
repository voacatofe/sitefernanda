import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  location: string
  imageUrl: string
  canonicalUrl: string
  propertyType: string
  bedrooms: string
  price?: string
  constructionStatus: string
}

export function generateMetadata({
  title,
  description,
  location,
  imageUrl,
  canonicalUrl,
  propertyType,
  bedrooms,
  price,
  constructionStatus
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${location} | Fernanda Soares Imóveis`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      images: [imageUrl],
      url: canonicalUrl,
      type: 'website',
      siteName: 'Fernanda Soares Imóveis',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      'og:locale': 'pt_BR',
      'og:type': 'website',
      'og:site_name': 'Fernanda Soares Imóveis',
      'og:price:amount': price || '',
      'og:price:currency': 'BRL',
      'property:bedrooms': bedrooms,
      'property:type': propertyType,
      'property:status': constructionStatus,
    },
  }
} 