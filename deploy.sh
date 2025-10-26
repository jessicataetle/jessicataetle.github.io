#!/bin/bash

# Super simple deploy - one command does everything!

echo "🏗️  Building..."
npm run build

echo "🚀 Deploying..."
git add build -f
git commit -m "Deploy build"
git push origin `git subtree split --prefix build master`:gh-pages --force

echo "✅ Done! Visit https://jessicataetle.github.io in 1-2 minutes"
