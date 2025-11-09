# GitHub Pages Setup Guide for Lumora Template Showcase

This guide will help you deploy your Lumora Template Showcase to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your machine
- Your project ready to deploy

## Step-by-Step Setup

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `template-showcase`
3. Choose "Public" (required for free GitHub Pages)
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

### 2. Initialize Git in Your Project

```bash
cd C:\Users\91974\Projects\static-sites\template-showcase
git init
git add .
git commit -m "Initial commit: Lumora Template Showcase"
```

### 3. Add Remote Repository

Replace `yourusername` with your GitHub username:

```bash
git remote add origin https://github.com/yourusername/template-showcase.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### 5. Automatic Deployment (GitHub Actions)

The `.github/workflows/deploy.yml` file is already configured to:
- Automatically deploy when you push to `main` branch
- Build the project (if needed)
- Deploy to `gh-pages` branch
- Publish to GitHub Pages

**No additional setup needed!** Just push your code and GitHub Actions will handle the rest.

### 6. Verify Deployment

1. Go to your repository **Settings** → **Pages**
2. Look for the deployment URL: `https://yourusername.github.io/template-showcase`
3. Click the link to view your live site
4. Wait 1-2 minutes for the first deployment to complete

## Custom Domain Setup (Optional)

If you want to use a custom domain (e.g., `lumora.dev`):

### 1. Update package.json

```json
"homepage": "https://lumora.dev"
```

### 2. Create CNAME File

Create a file named `CNAME` in the root directory with your domain:

```
lumora.dev
```

### 3. Configure DNS

Add these DNS records to your domain registrar:

**For apex domain (lumora.dev):**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**For www subdomain (www.lumora.dev):**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

### 4. Update GitHub Pages Settings

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter: `lumora.dev`
3. Check "Enforce HTTPS"
4. Click **Save**

## Troubleshooting

### Site Not Deploying

1. Check GitHub Actions:
   - Go to **Actions** tab
   - Look for failed workflows
   - Check error messages

2. Verify branch name:
   - Make sure you're pushing to `main` (not `master`)
   - Check `.github/workflows/deploy.yml`

### 404 Errors on Subpages

If you see 404 errors when navigating to subpages:

1. Check that all file paths are relative (not absolute)
2. Verify all image paths use `images/` prefix
3. Ensure all links use `.html` extension

### Images Not Loading

1. Verify image files exist in `images/` folder
2. Check file names match exactly (case-sensitive)
3. Use relative paths: `images/filename.png`

### SVG Icon Not Showing

1. Ensure `lumora-icon.svg` exists in `images/` folder
2. Check that `index.html` references: `images/lumora-icon.svg`
3. Verify SVG file is valid XML

## Deployment Status

Check deployment status:

1. Go to your repository
2. Click **Actions** tab
3. View workflow runs and their status
4. Each push to `main` triggers a new deployment

## Update Your Site

After setup, to update your site:

```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push origin main
```

GitHub Actions will automatically deploy your changes within 1-2 minutes.

## Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Support

For issues or questions:
1. Check GitHub Pages documentation
2. Review GitHub Actions logs
3. Verify all file paths and URLs
4. Ensure all required files are committed to git

---

**Your site will be live at:** `https://yourusername.github.io/template-showcase`

Replace `yourusername` with your actual GitHub username.
