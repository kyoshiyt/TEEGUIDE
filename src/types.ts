export interface Author {
  id: string;
  name: string;
  bio: string;
  avatarUrl?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  slug: string;
  categoryId: string;
  categoryIds?: string[];
  description: string;
  material: string;
  fit: string;
  weight: string;
  gsm?: number;
  availableColors: string[];
  availableSizes: string[];
  intendedUse: string[];
  pros: string[];
  cons: string[];
  imageUrl: string;
  amazonUrlPlaceholder: string;
  affiliateUrlPlaceholder: string;
  verificationStatus: 'VERIFIED' | 'UNVERIFIED';
  lastVerifiedDate: string;
  affiliateEnabled: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  excerpt?: string;
  content: string; // Markdown or HTML content, or structured data
  type: 'GUIDE' | 'COMPARISON' | 'REVIEW' | 'COMMERCIAL';
  categoryId?: string;
  authorId: string;
  publishedDate: string;
  lastUpdatedDate: string;
  relatedArticleIds: string[];
  relatedProductIds?: string[];
  readingTime?: string;
  tags?: string[];
  seoTitle?: string;
  featuredImage?: string;
}
