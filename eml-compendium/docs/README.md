# EML Compendium Documentation

This folder contains documentation for the EML Technology Compendium project.

## Available Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete guide for deploying to GitHub Pages using GitHub Actions

## Quick Links

- **Live Site:** https://ubcemergingmedialab.github.io/compendium/
- **Repository:** https://github.com/ubcemergingmedialab/compendium
- **EML Website:** https://eml.ubc.ca

## Project Overview

The EML Compendium is an interactive web application showcasing the technologies used by the UBC Emerging Media Lab. Built with React, TypeScript, and Vite, it provides an engaging way to explore EML's technology stack and projects.

## Adding New Technologies

To add a new technology to the compendium:

1. Create a new JSON file in `src/data/technologies/`
2. Follow the structure of existing files:
   ```json
   {
     "id": "technology-id",
     "title": "Technology Name",
     "category": "Category",
     "thumbnail": "thumbnail-url",
     "image": "full-image-url",
     "description": "Description of how EML uses this technology",
     "documentation": [
       {
         "title": "Official Documentation",
         "url": "https://docs.example.com"
       }
     ],
     "projects": [
       {
         "name": "Project Name",
         "description": "Brief description",
         "documentationUrl": "optional-url"
       }
     ]
   }
   ```
3. The technology will automatically appear in the compendium on the next build

## Technology Categories

Current categories used in the compendium:
- Game Engine
- Web 3D Library
- Web Framework
- 3D Modeling
- Learning Management
- Publishing Platform
- Interactive Content
- Build Tool
- Programming Language
- CSS Framework
- Version Control
- Hosting Platform
- Cloud Platform
- Infrastructure as Code
- Runtime Environment
- Design Tool
- Vector Graphics
- Animation Tool
- XR Standard
- XR Platform
- Unity Package
- Package Manager

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Contributing

When contributing to the compendium:

1. Ensure all technology information is accurate
2. Use official documentation links
3. Reference real EML projects when applicable
4. Test locally before pushing
5. Follow the existing code style

---

For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
