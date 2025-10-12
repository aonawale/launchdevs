# LaunchDevs - Mentorship Landing Page

A modern, accessible landing page for a software engineering mentorship program built with Astro and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **Fully Responsive**: Mobile-first design with hamburger menu for small screens
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Accessible**: WCAG compliant with ARIA labels, skip navigation, and keyboard navigation
- **Form Integration**: Netlify Forms integration for mentorship signups
- **Analytics Ready**: Google Analytics integration with custom event tracking
- **Fast Performance**: Built with Astro for optimal static site generation

## 📋 Sections

- **Hero**: Eye-catching introduction with clear value proposition
- **About**: Background information about the mentor and program
- **How It Works**: 4-step process explaining the mentorship journey
- **Testimonials**: Social proof from successful mentees
- **Program Details**: Comprehensive list of what's included in the free program
- **CTA/Signup**: Application form with validation and loading states

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) v5.14.1
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.13
- **Deployment**: [Netlify](https://www.netlify.com)
- **Forms**: Netlify Forms
- **Analytics**: Google Analytics 4

## 📦 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── icons/           # Reusable icon components
│   │   │   ├── CheckIcon.astro
│   │   │   ├── StarIcon.astro
│   │   │   ├── LockIcon.astro
│   │   │   └── MailIcon.astro
│   │   ├── About.astro      # About section
│   │   ├── CTA.astro        # Call-to-action & signup form
│   │   ├── Hero.astro       # Hero section
│   │   ├── HowItWorks.astro # Process steps
│   │   ├── Layout.astro     # Base layout with header/footer
│   │   ├── Program.astro    # Program details
│   │   └── Testimonials.astro
│   ├── config/
│   │   └── site.ts          # Site configuration constants
│   ├── pages/
│   │   ├── index.astro      # Home page
│   │   ├── thank-you.astro  # Form submission success
│   │   ├── privacy.astro    # Privacy policy
│   │   ├── terms.astro      # Terms of service
│   │   └── 404.astro        # 404 error page
│   ├── styles/
│   │   └── global.css       # Global styles (Tailwind imports)
│   └── utils/
│       └── analytics.ts     # Analytics utilities
├── astro.config.mjs         # Astro configuration
├── netlify.toml             # Netlify build configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ or higher
- Yarn or npm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mentorship-landing.git
cd mentorship-landing
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## ⚙️ Configuration

### Site Settings

Edit `src/config/site.ts` to customize:

```typescript
export const SITE_CONFIG = {
  name: 'LaunchDevs',
  description: 'Personal mentorship to launch your software engineering career',
  siteUrl: 'https://launchdevs.io',
  email: 'ahmed@launchdevs.io',
  author: 'Ahmed Onawale',
  social: {
    linkedin: 'https://www.linkedin.com/in/ahmedonawale',
    twitter: 'https://x.com/ahmedonawale',
    github: 'https://github.com/aonawale',
  },
  keywords: [
    'software engineering mentorship',
    'career coaching',
    // ... more keywords
  ],
}
```

### Environment Variables

Create a `.env` file in the root directory:

```bash
# Google Analytics Measurement ID
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Note**: The `PUBLIC_` prefix makes the variable available on the client side.

### Netlify Forms

The contact form is configured to work with Netlify Forms. After deploying to Netlify:

1. The form will automatically be detected
2. Submissions will appear in your Netlify dashboard under Forms
3. You can set up email notifications in the Netlify Forms settings

## 🚢 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Manual Build

```bash
yarn build
# or
npm run build
```

The static files will be generated in the `dist/` directory.

## 🧞 Commands

All commands are run from the root of the project:

| Command           | Action                                           |
|:------------------|:-------------------------------------------------|
| `yarn install`    | Installs dependencies                            |
| `yarn dev`        | Starts local dev server at `localhost:4321`      |
| `yarn build`      | Build your production site to `./dist/`          |
| `yarn preview`    | Preview your build locally, before deploying     |
| `yarn astro ...`  | Run CLI commands like `astro add`, `astro check` |

## 📊 Analytics

The site includes Google Analytics 4 integration with custom event tracking:

- **CTA Clicks**: Tracked with location and action
- **Form Submissions**: Tracked on successful form submit
- **Conversions**: Tracked on thank-you page

Events are tracked using the utility functions in `src/utils/analytics.ts`.

## ♿ Accessibility

The site follows WCAG 2.1 Level AA guidelines:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip navigation link
- Proper heading hierarchy
- Sufficient color contrast
- Form labels and validation

## 🎨 Customization

### Colors

The site uses Tailwind's default color palette. To customize:

1. Update colors in component files
2. Or extend the Tailwind theme in `astro.config.mjs`

### Typography

Font stack is defined in the Layout component's body tag:
```
font-sans antialiased
```

## 📝 License

This project is [MIT](LICENSE) licensed.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Ahmed Onawale**
- Website: https://launchdevs.io
- LinkedIn: [@ahmedonawale](https://www.linkedin.com/in/ahmedonawale)
- GitHub: [@aonawale](https://github.com/aonawale)
- Twitter: [@ahmedonawale](https://x.com/ahmedonawale)

## ⭐ Show your support

Give a ⭐️ if this project helped you!
