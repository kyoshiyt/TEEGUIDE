import { Author } from '../types';
import { SITE_CONFIG } from '../config';

export const authors: Record<string, Author> = {
  main: {
    id: 'main',
    name: SITE_CONFIG.ownerName,
    bio: 'Research and editorial content focused on T-shirt materials, fit, construction, and buying decisions.',
  },
};
