# Migration Guide: HTML to React

This guide explains the conversion from the static HTML website to the modern React application.

## 🔄 What Changed

### Architecture
- **Before**: Static HTML files with shared CSS
- **After**: React components with CSS Modules and routing

### File Structure Comparison

#### Old Structure
```
/
├── index.html
├── portfolio.html
├── projects.html
├── resume.html
├── lmc-3402.html
├── aframe.html
├── css/
│   └── stylesheet.css
└── media/
    └── [images]
```

#### New Structure
```
/
├── public/
│   ├── index.html
│   └── media/          # Keep existing media files
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app with routing
│   └── index.tsx      # Entry point
├── package.json
└── tsconfig.json
```

## 📝 Key Improvements

### 1. **Component-Based Architecture**
- Pages split into reusable components
- Shared layouts (Header, Navigation)
- CSS Modules for scoped styling

### 2. **Type Safety**
- TypeScript for compile-time error checking
- Better IDE support and autocomplete
- Reduced runtime errors

### 3. **Modern Routing**
- React Router for client-side navigation
- No page reloads when navigating
- Better user experience

### 4. **Responsive Design**
- Mobile-first approach
- Flexible layouts with flexbox/grid
- Media queries for different screen sizes

### 5. **Performance**
- Single Page Application (SPA)
- Code splitting ready
- Optimized builds

## 🔧 How to Migrate Content

### Adding New Content

#### Old Way (HTML):
```html
<section>
    <div class="section">
        <h2 class="section-header">Title</h2>
        <p>Content...</p>
    </div>
</section>
```

#### New Way (React):
```tsx
<Section>
  <h2 className={styles.sectionHeader}>Title</h2>
  <p>Content...</p>
</Section>
```

### Updating Styles

#### Old Way (Global CSS):
```css
.section-header {
    font-size: 1.5em;
    color: white;
}
```

#### New Way (CSS Modules):
```css
/* ComponentName.module.css */
.sectionHeader {
    font-size: 1.5em;
    color: white;
}
```

### Adding Links

#### Old Way:
```html
<a href="portfolio.html">Portfolio</a>
```

#### New Way:
```tsx
import { Link } from 'react-router-dom';
<Link to="/portfolio">Portfolio</Link>
```

## 📦 Dependencies Management

### Installing Packages
```bash
npm install package-name
```

### Updating Dependencies
```bash
npm update
```

### Checking for Outdated Packages
```bash
npm outdated
```

## 🚀 Deployment

### GitHub Pages Deployment

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   {
     "homepage": "https://jessicataetle.github.io",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Other Hosting Options
- **Vercel**: Connect GitHub repo, auto-deploy
- **Netlify**: Drag & drop build folder
- **AWS S3**: Upload build folder to S3 bucket

## 🎯 Next Steps

### Recommended Enhancements

1. **Add State Management** (if needed)
   ```bash
   npm install redux react-redux @reduxjs/toolkit
   ```

2. **Add Animation Library**
   ```bash
   npm install framer-motion
   ```

3. **Add Form Validation**
   ```bash
   npm install react-hook-form
   ```

4. **Add Testing**
   - Unit tests with Jest (included)
   - E2E tests with Cypress

5. **Add SEO**
   ```bash
   npm install react-helmet-async
   ```

## 🐛 Troubleshooting

### Common Issues

**Issue**: Images not loading
**Solution**: Ensure images are in `public/media/` folder

**Issue**: Styles not applying
**Solution**: Check CSS Module import syntax

**Issue**: Navigation not working
**Solution**: Ensure using `<Link>` from react-router-dom

**Issue**: Build fails
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Router Docs](https://reactrouter.com)
- [CSS Modules Guide](https://github.com/css-modules/css-modules)

## 🔒 Keeping Old Site

The original HTML files are preserved. You can:
1. Keep both versions
2. Create a branch for the HTML version
3. Archive the HTML version in a separate folder

```bash
# Create a backup branch
git checkout -b html-backup
git add .
git commit -m "Backup HTML version"
git checkout master
```

## ✅ Migration Checklist

- [x] Install Node.js and npm
- [x] Set up React project structure
- [x] Convert all pages to React components
- [x] Set up routing
- [x] Migrate styles to CSS Modules
- [x] Test all navigation
- [x] Test responsive design
- [ ] Deploy to hosting platform
- [ ] Update DNS (if applicable)
- [ ] Monitor for issues

---

**Need Help?** Open an issue on GitHub or refer to the README-REACT.md file.

