# EML Technology Compendium

An interactive web application showcasing the technologies used at EML (Educational Media Lab) for creating innovative learning experiences. Built with React, TypeScript, and Vite.

## Overview

The EML Technology Compendium provides an engaging way for employees and students to explore the various technologies, frameworks, and platforms we use. The interface is inspired by the Unreal Engine Fab store design, featuring a modern card-based layout with detailed technology views.

## Features

- **Interactive Card Grid**: Browse technologies through visually appealing cards showing thumbnails and brief descriptions
- **Detailed Technology Views**: Click any card to open a full-screen modal with comprehensive information including:
  - Full description of the technology
  - Links to official documentation
  - List of EML projects using the technology
  - Project documentation links
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatically adapts to system color scheme preferences
- **Data-Driven**: All content is managed through a JSON configuration file for easy updates

## Project Structure

```
eml-compendium/
├── src/
│   ├── components/           # React components
│   │   ├── TechnologyCard.tsx
│   │   ├── TechnologyCard.css
│   │   ├── TechnologyGrid.tsx
│   │   ├── TechnologyGrid.css
│   │   ├── TechnologyDetail.tsx
│   │   └── TechnologyDetail.css
│   ├── data/                 # Data configuration
│   │   └── technologies.json
│   ├── types/                # TypeScript type definitions
│   │   └── Technology.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd compendium/eml-compendium
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Deployment

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

**Quick Start:**
1. Update the `base` path in `vite.config.ts` to match your repository name
2. Push your code to a GitHub repository
3. Enable GitHub Pages in repository Settings > Pages > Source: "GitHub Actions"
4. The site will automatically build and deploy on every push to `main`

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Adding New Technologies

To add a new technology to the compendium, edit `src/data/technologies.json` and add a new entry following this structure:

```json
{
  "id": "unique-id",
  "title": "Technology Name",
  "category": "Category Name",
  "thumbnail": "url-to-thumbnail-image",
  "image": "url-to-full-size-image",
  "description": "Detailed description of the technology and how EML uses it",
  "documentation": [
    {
      "title": "Documentation Link Title",
      "url": "https://example.com/docs"
    }
  ],
  "projects": [
    {
      "name": "Project Name",
      "description": "Brief project description",
      "documentationUrl": "https://example.com/project-docs" // optional
    }
  ]
}
```

### Data Fields

- **id**: Unique identifier (lowercase, hyphenated)
- **title**: Display name of the technology
- **category**: Technology category (e.g., "Game Engine", "Web Framework", "3D Modeling")
- **thumbnail**: Image URL for card display (recommended: 400x300px)
- **image**: Image URL for detail view (recommended: 800x600px or larger)
- **description**: Comprehensive description including EML use cases
- **documentation**: Array of documentation links with title and URL
- **projects**: Array of projects using this technology
  - **name**: Project name
  - **description**: Brief project description
  - **documentationUrl**: (Optional) Link to project documentation

## Technologies Used

- **React 19**: UI framework
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with CSS custom properties for theming

## Design Philosophy

The compendium's design is inspired by the Unreal Engine Fab store, emphasizing:

- Clean, modern card-based layouts
- Smooth animations and transitions
- High-quality imagery
- Clear information hierarchy
- Intuitive navigation

## Contributing

When adding new technologies or updating existing ones:

1. Ensure images are optimized for web delivery
2. Write clear, concise descriptions focusing on EML use cases
3. Include relevant documentation links
4. Add project references where applicable
5. Test the display on both desktop and mobile devices

## License

This project is intended for internal use at EML.

---

Built with ❤️ by the EML team
