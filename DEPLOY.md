# Deploy to GitHub Pages

## Quick Setup

### Option 1: Use GitHub Actions (Recommended - No Manual Push Needed!)

This is the easiest way - GitHub will automatically deploy when you push to master.

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

2. Commit and push this workflow file
3. GitHub will automatically build and deploy on every push to master!

### Option 2: Manual Deploy Script

Run the script, then follow the instructions:

```bash
./deploy.sh
```

This will build your app and prepare it. Then manually push:

```bash
cd build
git push -f https://github.com/jessicataetle/jessicataetle.github.io.git gh-pages:gh-pages
cd ..
```

You'll need to enter your GitHub credentials (use Personal Access Token if you have 2FA).

### Option 3: Direct Command Line

```bash
npm run build
cd build
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy"
git push -f https://github.com/jessicataetle/jessicataetle.github.io.git gh-pages:gh-pages
cd ..
```

## After Deployment

1. Go to your GitHub repo → Settings → Pages
2. Make sure source is set to "Deploy from branch"
3. Select branch: `gh-pages` and folder: `/ (root)`
4. Wait 1-2 minutes
5. Visit https://jessicataetle.github.io

All routes should work! (/portfolio, /resume, /projects, etc.)

