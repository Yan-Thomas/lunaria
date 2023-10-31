# `@lunariajs/core`

The `@lunariajs/core` package contains the base tracking and dashboard generation systems used across its related packages. You should use this package if:

- You need fine-grained control over your dashboard
- You want to build a package over it
- There isn't a framework-specific `@lunariajs` package for your use-case

## Installation

You can install `@lunariajs/core` using your preferred package manager:

```bash
# npm
npm install @lunariajs/core

# pnpm
pnpm add @lunariajs/core

# yarn
yarn add @lunariajs/core
```

## Basic Usage

Start using `@lunariajs/core` by setting up a script to generate your translation dashboard status.

The example below contains all of the **required** options to generate a dashboard tracking the status of both the Portuguese and Spanish translations of a site:

```js
// scripts/translation-status.js
import { createTracker } from '@lunariajs/core';

const tracker = await createTracker({
  // Current repository of this script and content
  repository: 'https://github.com/me/cool-docs',
  dashboard: {
    // Generated dashboard URL used in meta tags
    url: 'https://tracker.cool-docs.com',
  },
  // Information about the source locale of your content
  defaultLocale: {
    // User-friendly label/name of the language
    label: 'English',
    // BCP-47 tag of the language
    lang: 'en',
    content: {
      // Glob pattern of where your content is
      location: 'content/en/**/*.md',
    },
  },
  // Array of objects of your translated locales.
  locales: [
    {
      label: 'Português',
      lang: 'pt',
      content: {
        location: 'content/pt/**/*.md',
      },
    },
    {
      label: 'Spanish',
      lang: 'es',
      content: {
        location: 'content/es/**/*.md',
      },
    },
  ],
  // Property to find in valid frontmatter files marking if a page should be translated or not
  translatableProperty: 'i18nReady',
});

// Generates your dashboard, by default at dist/translation-status/index.html
tracker.run();
```

To run the script, you need to add a new script to your `package.json` file and trigger it during your website's build and deploy process, for example:

```diff
"scripts": {
    "docs:dev": "vitepress dev .",
    "docs:build": "vitepress build .",
    "docs:preview": "vitepress preview .",
+   "translation-status": "node ./scripts/translation-status.js"
  },
```

Want other usage examples? Head over to the [`examples/` directory](https://github.com/Yan-Thomas/lunaria/tree/main/examples/) and inspect the source code for tips & tricks about using `@lunariajs/core` with other frameworks and environments.