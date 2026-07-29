# aarjanadhikari.com.np

Personal website and portfolio for Aarjan Adhikari.

## ✦ Overview

`aarjanadhikari.com.np` is the official personal website for showcasing professional work, selected projects, technical writing, and contact information. The site is designed to present a clear, minimal, and credible online presence with a focus on readability, performance, and maintainability.

This repository contains the source code, configuration, and deployment setup for the production website.

## Purpose

The website serves as a central place to:

* Present a professional profile
* Highlight selected engineering and AI-related projects
* Share technical work, writing, and updates
* Provide a direct contact path for collaboration, internships, and opportunities
* Establish a consistent personal brand across the web

## Site Structure

The website is organized around a small number of high-value sections:

* Home
* About
* Projects
* Certificates
* Writing
* Contact

Each section is intentionally concise and built to support fast scanning without unnecessary content.

## Technology Stack

The exact stack may vary by version of the repository. Typical technologies used in this project include:

| Layer          | Technology                     |
| -------------- | ------------------------------ |
| Markup         | HTML 5                         |
| Interaction    | JavaScript                     |
| Styling        | CSS 3                          |
| Components     | shadcn/ui or custom components |
| Deployment     | GitHub                         |
| Domain         | Custom domain configuration    |
| Source Control | Git / GitHub                   |

Update this table to match the implementation in the repository.

## Key Features

* Minimal, professional portfolio layout
* Project highlights with concise descriptions
* Responsive design for mobile, tablet, and desktop
* Fast load times and optimized assets
* SEO-friendly metadata and semantic structure
* Clear contact and social links
* Easy content updates through source files or content modules

## Getting Started

### Prerequisites

Before running the project locally, make sure the following are installed:

* Node.js
* npm, pnpm, or yarn
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/aarjanadhikari.com.np.git
cd aarjanadhikari.com.np
```

Install dependencies:

```bash
npm install
```

Or, if the project uses pnpm:

```bash
pnpm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Or:

```bash
pnpm dev
```

Open the site in your browser:

```bash
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Configuration

If the project uses environment variables, create a `.env.local` file in the root directory.

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://aarjanadhikari.com.np
```

Add any additional variables required by analytics, contact forms, CMS integrations, or deployment hooks.

## Content Management

Content for the site may be stored in one of the following ways:

* Hardcoded inside page and component files
* Markdown or MDX files
* A content layer or CMS
* JSON or TypeScript data modules

Update this section based on how the site is structured in the repository.

## Project Structure

This structure is representative. Replace it with the actual repository layout if needed.

## Deployment

The site is deployed from the main branch to the production environment.

Typical deployment flow:

1. Push changes to GitHub
2. Trigger deployment through the hosting platform
3. Verify the production build
4. Confirm domain and SSL configuration

If using Vercel, the production domain should be connected to the repository and assigned as the primary domain.

## SEO

The site should include:

* Descriptive page titles
* Meta descriptions
* Open Graph metadata
* Twitter card metadata
* Canonical URLs
* Semantic heading structure

These elements help search engines and social platforms render the site correctly.

## Accessibility

The site should follow basic accessibility practices, including:

* Sufficient color contrast
* Keyboard navigability
* Semantic HTML
* Meaningful alt text
* Clear link labels
* Responsive layouts that remain usable at smaller screen sizes

## Performance Goals

The project is designed to remain lightweight and fast.

Primary goals include:

* Minimal client-side overhead
* Optimized image usage
* Reduced layout shift
* Efficient page transitions
* Clean component boundaries
* Low maintenance complexity

## Updating the Site

To update the website:

1. Edit the relevant page or content files
2. Run the project locally
3. Verify the layout and responsiveness
4. Commit and push the changes
5. Deploy to production

## Contributing

This is a personal website, so contributions may be limited. If contributions are allowed, they should follow the existing code style, component structure, and content standards.

## License

This project is licensed under the MIT License. See the LICENSE file for details.


## Contact

For professional inquiries, use the contact details listed on the website.
