# Jessica Taetle - Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing design work, coding projects, and professional experience.

## 🚀 Technologies Used

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **React Router v6** - Client-side routing
- **CSS Modules** - Scoped styling
- **Create React App** - Zero-config build setup

## 📋 Features

- ✅ Fully responsive design
- ✅ Type-safe with TypeScript
- ✅ Component-based architecture
- ✅ CSS Modules for scoped styling
- ✅ React Router for seamless navigation
- ✅ Optimized performance
- ✅ Clean, maintainable code structure

## 🏗️ Project Structure

```
jessicataetle.github.io/
├── .react-source/          # React source code
│   ├── src/               # Components, pages, styles
│   ├── public/            # Public assets template
│   ├── package.json       # Dependencies
│   └── tsconfig.json      # TypeScript config
├── Root directory/         # Deployed build files
│   ├── index.html         # Main HTML
│   ├── 404.html          # SPA routing support
│   ├── static/           # JS and CSS bundles
│   └── media/            # Images and assets
├── archived-html-site/    # Original HTML version
└── README.md             # This file
```

## 🛠️ Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   Opens at [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   npm run build
   ```
   Creates optimized build in `build/` directory

## 🚀 Deploying Changes

This site deploys from the **master branch root** (since it's a `username.github.io` repository).

### To Deploy Updates:

1. **Make your changes** in `.react-source/src/`

2. **Build the app:**
   ```bash
   npm run build
   ```

3. **Run the deploy script:**
   ```bash
   ./deploy-simple.sh
   ```
   This copies build files to root and prepares for deployment

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update site"
   git push origin master
   ```

   Or use Cursor's Source Control panel: Click "..." → Push

5. **Wait 1-2 minutes** - Your changes will be live at https://jessicataetle.github.io

### Authentication Note

If prompted for credentials, use:
- **Username:** Your GitHub username
- **Password:** Personal Access Token (not your account password)

Create a token at: https://github.com/settings/tokens

## 📱 Live Site

Visit: **https://jessicataetle.github.io**

All routes work correctly:
- `/` - Home/About
- `/portfolio` - Design Portfolio
- `/projects` - Coding Projects
- `/resume` - Resume

## 🎨 Design Principles

- **Component Modularity:** Each component is self-contained with its own styles
- **Type Safety:** TypeScript ensures compile-time type checking
- **CSS Modules:** Scoped styles prevent naming conflicts
- **Responsive Design:** Mobile-first approach with media queries
- **Performance:** Optimized production builds

## 📦 Key Files

| File | Purpose |
|------|---------|
| `.react-source/src/` | React source code |
| `deploy-simple.sh` | Deployment helper script |
| `index.html` | Deployed app entry point |
| `404.html` | Enables client-side routing on GitHub Pages |
| `archived-html-site/` | Original HTML website backup |

## 🔧 Customization

### Updating Content

- **Personal Info:** `.react-source/src/pages/Home/Home.tsx`
- **Portfolio Items:** `.react-source/src/pages/Portfolio/Portfolio.tsx`
- **Projects:** `.react-source/src/pages/Projects/Projects.tsx`
- **Resume:** `.react-source/src/pages/Resume/Resume.tsx`

### Styling

- **Global Styles:** `.react-source/src/index.css`
- **Component Styles:** Each component has its own `.module.css` file
- **Theme Colors:** Search for `#BB86FC` (purple) and `#7c7c7c` (gray)

### Adding New Pages

1. Create folder in `.react-source/src/pages/`
2. Add `YourPage.tsx` and `YourPage.module.css`
3. Add route in `.react-source/src/App.tsx`
4. Add navigation link in `.react-source/src/components/Navigation/Navigation.tsx`

## 📄 License

This project is for personal use.

## 👤 Author

**Jessica Taetle**
- GitHub: [@jessicataetle](https://github.com/jessicataetle)
- LinkedIn: [Jessica Taetle](https://www.linkedin.com/in/jessica-taetle-32b390163/)

## 🙏 Acknowledgments

- Georgia Institute of Technology - Computational Media Program
- All mentors and collaborators from internships at Intuit, Red Canary, and FullStory
