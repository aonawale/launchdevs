// Site configuration constants
export const SITE_CONFIG = {
  // Business Information
  name: 'Code Career Coach',
  description: 'Personal mentorship to help you launch your software engineering career',

  // Contact Information
  email: 'ahmed@codecareercoach.com',

  // Social Links (add your actual links when ready)
  social: {
    linkedin: '#', // Replace with your LinkedIn URL
    twitter: '#',  // Replace with your Twitter URL (optional)
    github: '#',   // Replace with your GitHub URL (optional)
  },

  // Business Details
  pricing: {
    monthly: 150,
    currency: 'USD',
  },

  // Meta Information
  author: 'Ahmed Onawale',
  keywords: [
    'software engineering mentorship',
    'career coaching',
    'programming mentor',
    'tech career transition',
    'coding bootcamp alternative'
  ],
} as const;

// Helper function to get full URL
export function getFullUrl(path: string = ''): string {
  // In Astro, you can access the site URL from import.meta.env
  const baseUrl = import.meta.env.SITE || 'https://codecareercoach.com';
  return `${baseUrl}${path}`;
}

// Helper function for formatted email
export function getEmailLink(subject?: string): string {
  const emailSubject = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${SITE_CONFIG.email}${emailSubject}`;
}
