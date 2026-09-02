# Deployment Guide - GitHub Pages

This guide will help you deploy the EML Technology Compendium to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your machine
- The repository pushed to GitHub

## Setup Steps

### 1. Configure the Base Path

The `vite.config.ts` file needs to be configured with the correct base path:

**Option A: If deploying to `username.github.io/repo-name/`** (most common)
```typescript
base: '/repo-name/',  // Replace 'repo-name' with your actual repository name
```

**Option B: If deploying to a custom domain or `username.github.io`**
```typescript
base: '/',
```

**Current Configuration**: The config is set to `/eml-compendium/`. Update this in `vite.config.ts` if your repository name is different.

### 2. Initialize Git Repository (if not already done)

```bash
cd compendium/eml-compendium
git init
git add .
git commit -m "Initial commit: EML Technology Compendium"
```

### 3. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `eml-compendium`)
3. Don't initialize with README (since we already have files)
4. Copy the repository URL

### 4. Push to GitHub

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions** (not "Deploy from a branch")
5. Click **Save**

### 6. Trigger the Deployment

The workflow will automatically run when you push to the `main` branch. You can also:

1. Go to the **Actions** tab in your repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow** > **Run workflow**

### 7. Access Your Site

After the workflow completes (usually 1-2 minutes):

- Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
- The URL will also be shown in the Actions workflow output

## Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) does the following:

1. **Triggers**: Runs on every push to `main` branch or manually
2. **Build Job**:
   - Checks out code
   - Sets up Node.js 20
   - Installs dependencies
   - Builds the project (`npm run build`)
   - Uploads build artifacts
3. **Deploy Job**:
   - Deploys the built files to GitHub Pages

## Updating the Site

Every time you push changes to the `main` branch:
1. The workflow automatically runs
2. Your site is rebuilt and redeployed
3. Changes are live in 1-2 minutes

## Troubleshooting

### Workflow Fails on Build

Check the Actions tab for error messages. Common issues:
- Missing dependencies: Make sure `package-lock.json` is committed
- TypeScript errors: Run `npm run build` locally first to catch issues

### Site Shows 404 or Blank Page

1. **Check the base path** in `vite.config.ts`:
   - It should match your repository name
   - Include leading and trailing slashes: `/repo-name/`

2. **Verify GitHub Pages source**:
   - Settings > Pages > Source should be "GitHub Actions"

3. **Check browser console** for errors about loading resources

### Images Not Loading

If using relative paths for images:
- Make sure images are in the `public` folder or imported in components
- Check that paths work with your base path

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update `vite.config.ts` to use `base: '/'`
4. In GitHub Settings > Pages, add your custom domain

## Testing Locally

To test the production build locally:

```bash
npm run build
npm run preview
```

This simulates how the site will look when deployed.

## Environment Variables

If you need environment variables:

1. Add them to GitHub repository Settings > Secrets and variables > Actions
2. Reference them in the workflow file:
   ```yaml
   - name: Build
     run: npm run build
     env:
       VITE_API_KEY: ${{ secrets.VITE_API_KEY }}
   ```
3. Access in code using `import.meta.env.VITE_API_KEY`

---

For more information, see:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
