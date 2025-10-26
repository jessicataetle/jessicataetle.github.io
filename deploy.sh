#!/bin/bash

# Simple deployment script for GitHub Pages
# This version creates the branch locally for you to push manually

echo "🏗️  Building React app..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "📦 Creating gh-pages branch from build..."

# Remove old build git if exists
rm -rf build/.git

cd build

# Initialize git
git init
git checkout -b gh-pages

# Add all files
git add -A

# Commit
git commit -m "Deploy React app - $(date)"

echo ""
echo "✅ Build is ready for deployment!"
echo ""
echo "📋 Next steps:"
echo "1. cd build"
echo "2. git push -f https://github.com/jessicataetle/jessicataetle.github.io.git gh-pages:gh-pages"
echo ""
echo "You'll be prompted for your GitHub username and password."
echo "Note: Use a Personal Access Token instead of password if you have 2FA enabled."
echo ""
echo "🌐 After pushing, your site will be live at https://jessicataetle.github.io in 1-2 minutes"

cd ..
