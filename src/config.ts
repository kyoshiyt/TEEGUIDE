export const SITE_CONFIG = {
  mode: import.meta.env.VITE_SITE_MODE || 'PRE_APPROVAL', // 'PRE_APPROVAL' or 'AFFILIATE'
  amazonAssociateTag: import.meta.env.VITE_AMAZON_ASSOCIATE_TAG || '',
  amazonMarketplace: import.meta.env.VITE_AMAZON_MARKETPLACE || 'US',
  siteName: 'TeeGuide',
  ownerName: 'Yassine Charfaoui',
  businessName: 'The T-Shirt Guide',
  contactEmail: 'charfaouiyassine75@gmail.com',
  address: 'Digital Office',
};

export const isAffiliateMode = () => SITE_CONFIG.mode === 'AFFILIATE';
