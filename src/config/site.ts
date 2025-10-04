// Site configuration constants
export const SITE_CONFIG = {
  // Business Information
  name: 'LaunchDevs',
  description: 'Personal mentorship to launch your software engineering career',

  // Contact Information
  email: 'ahmed@launchdevs.io',

  // Social Links (add your actual links when ready)
  social: {
    linkedin: 'https://www.linkedin.com/in/ahmedonawale', // Replace with your LinkedIn URL
    twitter: 'https://github.com/aonawale',  // Replace with your Twitter URL (optional)
    github: 'https://x.com/ahmedonawale',   // Replace with your GitHub URL (optional)
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
