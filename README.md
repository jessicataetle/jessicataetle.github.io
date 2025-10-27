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
- ✅ GitHub Pages SPA routing support
- ✅ Clean, maintainable code structure

## 🏗️ Project Structure

```
jessicataetle.github.io/
├── src/                    # React source code
│   ├── components/        # Reusable UI components
│   │   ├── Header/       # Site header
│   │   ├── Navigation/   # Navigation menu
│   │   ├── Layout/       # Page layout wrapper
│   │   ├── Section/      # Content section wrapper
│   │   └── PageHeader/   # Page title component
│   ├── pages/            # Page components
│   │   ├── Home/        # About page
│   │   ├── Portfolio/   # Design portfolio
│   │   ├── Projects/    # Coding projects
│   │   └── Resume/      # Resume/CV
│   ├── App.tsx          # Main app with routing
│   └── index.tsx        # App entry point
├── public/               # Public assets
│   ├── media/           # Images and files
│   ├── 404.html         # SPA routing support
│   └── index.html       # HTML template
├── docs/                 # Production build (deployed to GH Pages)
├── archived-html-site/   # Original HTML version
├── package.json          # Dependencies and scripts
└── README.md            # This file
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
   Creates optimized build in `docs/` directory

## 🚀 Deployment

This site uses GitHub Pages with the `docs/` folder strategy for deployment.

### One-Command Deploy

```bash
npm run deploy
```

This will:
1. Build the React app
2. Move build to `docs/` folder
3. Commit the changes
4. Push to master

**OR manually:**

```bash
npm run build
git add .
git commit -m "Deploy updates"
git push origin master
```

### GitHub Pages Settings

Make sure your repository settings are configured:
1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **master**
4. Folder: **/docs**

After pushing, your site will be live at **https://jessicataetle.github.io** in 1-2 minutes.

## 🌐 Live Site

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
- **Accessibility:** Semantic HTML and proper ARIA labels
- **Performance:** Code splitting and lazy loading ready

## 🔧 Customization

### Updating Content

- **Personal Info:** `src/pages/Home/Home.tsx`
- **Portfolio Items:** `src/pages/Portfolio/Portfolio.tsx`
- **Projects:** `src/pages/Projects/Projects.tsx`
- **Resume:** `src/pages/Resume/Resume.tsx`

### Styling

- **Global Styles:** `src/index.css`
- **Component Styles:** Each component has its own `.module.css` file
- **Theme Colors:** Search for `#BB86FC` (purple) and `#7c7c7c` (gray)

### Adding New Pages

1. Create a new folder in `src/pages/`
2. Add `YourPage.tsx` and `YourPage.module.css`
3. Add route in `src/App.tsx`
4. Add navigation link in `src/components/Navigation/Navigation.tsx`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app and moves to docs/ |
| `npm test` | Launches the test runner |
| `npm run deploy` | Builds and deploys to GitHub Pages |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for personal use.

## 👤 Author

**Jessica Taetle**
- GitHub: [@jessicataetle](https://github.com/jessicataetle)
- LinkedIn: [Jessica Taetle](https://www.linkedin.com/in/jessica-taetle-32b390163/)

## 🙏 Acknowledgments

- Georgia Institute of Technology - Computational Media Program
- All mentors and collaborators from internships at Intuit, Red Canary, and FullStory

## 📚 Additional Information

- **[archived-html-site/](archived-html-site/)** - Original HTML version of the website
