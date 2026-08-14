import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../config';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  canonical?: string;
}

export function SEO({ title, description, type = 'website', canonical }: SEOProps) {
  const siteTitle = SITE_CONFIG.siteName;
  const fullTitle = `${title} | ${siteTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}
