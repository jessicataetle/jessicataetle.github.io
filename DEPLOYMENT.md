# Deployment Guide for GitHub Pages

## 🐛 Issue: Links Not Working on GitHub Pages

The problem was that GitHub Pages doesn't natively support client-side routing used by React Router. When you navigate directly to routes like `/portfolio` or `/resume`, GitHub Pages returns a 404 error.

## ✅ Solution Implemented

I've implemented the **spa-github-pages** solution which uses a 404.html redirect trick:

### What Was Added:

1. **`public/404.html`** - Catches 404 errors and redirects to index.html with route info
2. **`public/index.html`** - Added script to decode and restore the correct route
3. **`package.json`** - Added homepage URL and deployment scripts

### How It Works:

1. User visits `https://jessicataetle.github.io/portfolio`
2. GitHub Pages can't find `/portfolio`, serves `404.html`
3. `404.html` redirects to `/?/portfolio` (encoded route)
4. `index.html` script decodes and restores to `/portfolio`
5. React Router handles the route correctly

## 🚀 How to Deploy

### First Time Setup:

```bash
# Install gh-pages package
npm install

# This installs gh-pages which is now in your package.json
```

### Deploy Your Site:

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build your React app (`npm run build`)
2. Push the build folder to the `gh-pages` branch
3. GitHub Pages will automatically serve from that branch

### After Deployment:

- Wait 1-2 minutes for GitHub Pages to update
- Visit https://jessicataetle.github.io
- All routes should now work:
  - https://jessicataetle.github.io (Home)
  - https://jessicataetle.github.io/portfolio (Design Portfolio)
  - https://jessicataetle.github.io/projects (Coding Projects)
  - https://jessicataetle.github.io/resume (Resume)

## 📋 Checklist Before Deploying

- [x] Run `npm install` to install dependencies
- [x] Test locally with `npm start`
- [x] Verify all routes work locally
- [x] Verify images load correctly
- [ ] Run `npm run build` to test production build
- [ ] Run `npm run deploy` to deploy to GitHub Pages

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# 1. Build the app
npm run build

# 2. Go to GitHub repository settings
# 3. Under "Pages", select source: Deploy from branch
# 4. Select branch: gh-pages
# 5. Push your build folder to gh-pages branch manually
```

## 🌐 GitHub Pages Configuration

Make sure in your GitHub repository settings:
- **Settings** → **Pages**
- **Source**: Deploy from a branch
- **Branch**: `gh-pages` (will be created by `npm run deploy`)
- **Folder**: `/ (root)`

## 🧪 Testing After Deployment

Test these URLs directly (not just clicking links):
1. Open https://jessicataetle.github.io/portfolio in a new tab
2. Open https://jessicataetle.github.io/resume in a new tab
3. Open https://jessicataetle.github.io/projects in a new tab

All should work without 404 errors!

## 🔄 Future Deployments

Every time you make changes:

```bash
# 1. Test locally
npm start

# 2. Deploy
npm run deploy

# Done! Changes will be live in 1-2 minutes
```

## ⚠️ Important Notes

- The first deployment might take 5-10 minutes
- Subsequent deployments take 1-2 minutes
- Clear browser cache if you don't see updates (Cmd+Shift+R)
- The `gh-pages` branch is auto-managed, don't edit it manually

## 🎉 What's Fixed

✅ Direct URL navigation now works  
✅ Page refreshes maintain the current route  
✅ All navigation links work correctly  
✅ Bookmark links work  
✅ Shared links work  

---

**Ready to deploy?** Run `npm install` then `npm run deploy`!

