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
src/
├── components/          # Reusable UI components
│   ├── Header/         # Site header
│   ├── Navigation/     # Navigation menu
│   ├── Layout/         # Page layout wrapper
│   ├── Section/        # Content section wrapper
│   └── PageHeader/     # Page title component
├── pages/              # Page components
│   ├── Home/          # About page
│   ├── Portfolio/     # Design portfolio
│   ├── Projects/      # Coding projects
│   └── Resume/        # Resume/CV
├── App.tsx            # Main app component with routing
├── index.tsx          # App entry point
└── index.css          # Global styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `build/` directory

## 🚀 Deploying to GitHub Pages

**Important:** The build is already configured for GitHub Pages with routing support.

### Quick Deploy

Run the deployment script:

```bash
./deploy.sh
```

This will:
1. Build the React app
2. Create/update the `gh-pages` branch
3. Force push to overwrite any existing content
4. Deploy your site to GitHub Pages

You'll be prompted for your GitHub credentials when pushing.

### Alternative: Manual Deploy

```bash
npm run build
cd build
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy React app"
git push -f https://github.com/jessicataetle/jessicataetle.github.io.git gh-pages:gh-pages
cd ..
```

### After Deployment

Wait 1-2 minutes then visit https://jessicataetle.github.io

All routes will work correctly:
- `/` - Home
- `/portfolio` - Design Portfolio  
- `/projects` - Coding Projects
- `/resume` - Resume

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App (⚠️ one-way operation) |

## 🎨 Design Principles

This project follows modern React best practices:

- **Component Modularity**: Each component is self-contained with its own styles
- **Type Safety**: TypeScript ensures compile-time type checking
- **CSS Modules**: Scoped styles prevent naming conflicts
- **Responsive Design**: Mobile-first approach with media queries
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Code splitting and lazy loading ready

## 🔧 Customization

### Updating Content

- **Personal Info**: Edit `src/pages/Home/Home.tsx`
- **Portfolio Items**: Edit `src/pages/Portfolio/Portfolio.tsx`
- **Projects**: Edit `src/pages/Projects/Projects.tsx`
- **Resume**: Edit `src/pages/Resume/Resume.tsx`

### Styling

- **Global Styles**: `src/index.css`
- **Component Styles**: Each component has its own `.module.css` file
- **Theme Colors**: Update CSS custom properties in component stylesheets

### Adding New Pages

1. Create a new folder in `src/pages/`
2. Add `YourPage.tsx` and `YourPage.module.css`
3. Add route in `src/App.tsx`
4. Add navigation link in `src/components/Navigation/Navigation.tsx`

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
