# Dreamseed

An Astro project with Tailwind CSS, Vue components, and CloudFlare Pages deployment support.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

## 🌐 CloudFlare Pages Setup

### Prerequisites

1. A CloudFlare account
2. Your project repository hosted on GitHub, GitLab, or Bitbucket

### Deployment Steps

1. **Connect Repository**
   - Log into your CloudFlare dashboard
   - Go to Pages > Create a project
   - Connect to Git and select your repository

2. **Configure Build Settings**
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (unless your project is in a subdirectory)

3. **Environment Variables**
   - Node.js version: `18.20.8` or higher (set via `NODE_VERSION` environment variable)
   - No additional environment variables required for basic setup

4. **Advanced Configuration**
   - The project is configured with `@astrojs/cloudflare` adapter
   - Server-side rendering (SSR) is enabled
   - Static assets are automatically optimized

### Custom Domain (Optional)

1. In CloudFlare Pages, go to your project settings
2. Navigate to Custom domains
3. Add your domain and follow DNS configuration instructions

### Functions & API Routes

This project supports CloudFlare Pages Functions for API routes. Place your API files in:
- `src/pages/api/` for Astro API routes
- `functions/` for CloudFlare Pages Functions

## 🛠️ Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS
- **Components**: Vue 3
- **Deployment**: CloudFlare Pages
- **SSR Adapter**: @astrojs/cloudflare
