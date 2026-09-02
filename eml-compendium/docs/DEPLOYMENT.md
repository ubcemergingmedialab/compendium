# GitHub Pages Deployment Guide

This document describes how to deploy the EML Compendium to GitHub Pages using GitHub Actions.

## Overview

The EML Compendium is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment uses GitHub Actions for continuous deployment.

**Live URL:** https://ubcemergingmedialab.github.io/compendium/

## Repository Setup

**Repository:** `ubcemergingmedialab/compendium`  
**Branch:** `main`  
**App directory:** `eml-compendium/`  
**Build folder:** `eml-compendium/dist`

**Note:** The app code is in the `eml-compendium` subdirectory, but the GitHub Actions workflow is at the repository root in `.github/workflows/deploy.yml`.

## Prerequisites

Before deploying, ensure:

1. You have push access to the repository
2. GitHub Pages is enabled for the repository
3. The repository has the correct permissions set

## Initial GitHub Pages Setup

If this is the first time setting up GitHub Pages for this repository, follow these steps:

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/ubcemergingmedialab/compendium
2. Click on **Settings** (top menu)
3. In the left sidebar, click **Pages** (under "Code and automation")
4. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
   - This allows the GitHub Actions workflow to deploy automatically

### 2. Verify Workflow Permissions

1. In **Settings**, go to **Actions** → **General** (left sidebar)
2. Scroll to **Workflow permissions**
3. Ensure the following is selected:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests** (optional but helpful)
4. Click **Save** if you made changes

## Deployment Process

### Automatic Deployment (Recommended)

The site deploys automatically when you push to the `main` branch:

```bash
# 1. Make your changes
git add .
git commit -m "Your commit message"

# 2. Push to main branch
git push origin main
```

The GitHub Actions workflow will:
1. Detect the push to `main`
2. Install dependencies
3. Build the project
4. Deploy to GitHub Pages

### Manual Deployment

You can also trigger deployment manually from GitHub:

1. Go to the **Actions** tab in your repository
2. Click on **Deploy to GitHub Pages** workflow (left sidebar)
3. Click **Run workflow** button (right side)
4. Select the `main` branch
5. Click **Run workflow**

## Monitoring Deployment

### Check Deployment Status

1. Go to the **Actions** tab in your repository
2. You'll see the latest workflow runs
3. Click on a run to see detailed logs
4. ✅ Green checkmark = successful deployment
5. ❌ Red X = failed deployment (click for error details)

### View Deployment in Pages

1. Go to **Settings** → **Pages**
2. You'll see "Your site is live at https://ubcemergingmedialab.github.io/compendium/"
3. Click **Visit site** to view the deployed app

## Workflow Configuration

The deployment workflow is defined in `.github/workflows/deploy.yml` at the **repository root** (not in the `eml-compendium` subdirectory):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./eml-compendium
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: './eml-compendium/package-lock.json'
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./eml-compendium/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Key points:**
- Workflow file is at repository root: `/.github/workflows/deploy.yml`
- Sets `working-directory: ./eml-compendium` to run commands in the app directory
- Build artifact path is `./eml-compendium/dist`

## Vite Configuration

The `vite.config.ts` file is configured with the correct base path:

```typescript
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/compendium/' : '/',
}))
```

**Important:** The `base` path must match your repository name:
- Repository: `ubcemergingmedialab/compendium`
- Base path: `/compendium/`

## Troubleshooting

### Deployment Fails

1. Check the Actions tab for error messages
2. Common issues:
   - **Build errors:** Fix TypeScript/ESLint errors locally first
   - **Permission errors:** Verify workflow permissions in Settings → Actions
   - **Cache issues:** Re-run the workflow or clear Actions cache

### Site Shows 404

1. Verify GitHub Pages is enabled in Settings → Pages
2. Check that the base path in `vite.config.ts` matches your repository name
3. Wait 1-2 minutes after deployment completes (GitHub Pages needs time to propagate)

### Assets Not Loading

1. Check browser console for errors
2. Verify all asset paths are relative (not absolute)
3. Ensure `base` is correctly set in `vite.config.ts`

### Old Version Still Showing

1. Hard refresh your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Wait a few minutes for CDN to update

## Local Testing Before Deployment

Test the production build locally before pushing:

```bash
# Build the production version
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4173/compendium/` to test the production build with the correct base path.

## Development vs Production

- **Development** (`npm run dev`): Base path is `/`, runs on `http://localhost:5173/`
- **Production** (GitHub Pages): Base path is `/compendium/`, runs on `https://ubcemergingmedialab.github.io/compendium/`

## Deployment Checklist

Before pushing to deploy:

- [ ] All TypeScript errors fixed
- [ ] ESLint warnings addressed (run `npm run lint`)
- [ ] Production build tested locally (`npm run build && npm run preview`)
- [ ] All technology JSON files are valid
- [ ] Images and assets load correctly
- [ ] Commit message is descriptive

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check for code issues |
| `git push origin main` | Deploy to GitHub Pages |

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vite.dev/guide/static-deploy.html#github-pages)
- [Vite Config Reference](https://vite.dev/config/)

## Support

For issues with deployment:
1. Check the Actions tab for detailed error logs
2. Review this documentation
3. Contact the EML development team
4. Create an issue in the repository

---

**Last Updated:** September 2, 2026  
**Maintained by:** EML Development Team
