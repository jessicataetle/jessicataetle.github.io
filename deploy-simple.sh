#!/bin/bash

# One-command deploy for username.github.io repos
# This copies build files to root for master branch deployment

echo "🏗️  Building React app..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "📦 Preparing files..."

# Move current source to src-backup
mkdir -p .react-source
cp -r src public package.json tsconfig.json .react-source/ 2>/dev/null

# Copy build contents to root
cp -r build/* .

echo "✅ Ready to deploy!"
echo ""
echo "Run these commands:"
echo "  git add ."
echo "  git commit -m 'Deploy React app'"
echo "  git push origin master"
echo ""
echo "Your site will be live at https://jessicataetle.github.io in 1-2 minutes!"

