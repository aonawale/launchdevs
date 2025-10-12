// Site configuration constants
export const SITE_CONFIG = {
  // Business Information
  name: 'LaunchDevs',
  description: 'Personal mentorship to launch your software engineering career',
  siteUrl: 'https://launchdevs.io',

  // Contact Information
  email: 'ahmed@launchdevs.io',

  // Social Links
  social: {
    linkedin: 'https://www.linkedin.com/in/ahmedonawale',
    twitter: 'https://x.com/ahmedonawale',
    github: 'https://github.com/aonawale',
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

// Helper function for formatted email
export function getEmailLink(subject?: string): string {
  const emailSubject = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${SITE_CONFIG.email}${emailSubject}`;
}
