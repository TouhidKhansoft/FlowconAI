# FlowConAI Landing Page

A modern, responsive landing page for FlowConAI - an AI consulting and solutions company. Built with React, Vite, and Tailwind CSS, featuring a sleek design with glassmorphic elements and smooth animations.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **Yarn** package manager (required - this project uses Yarn, not npm)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd flowcon_landing
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn run dev
```

The application will start on `http://localhost:5173` (or the next available port).

## 📦 Available Scripts

```bash
# Start development server
yarn run dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run Storybook for component development
yarn storybook

# Build Storybook
yarn build-storybook
```

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Storybook** - Component development environment
- **PropTypes** - Runtime type checking

## 📁 Project Structure

```
flowcon_landing/
├── src/
│   ├── screens/
│   │   └── Desktop/
│   │       ├── Desktop.jsx    # Main landing page component
│   │       └── Desktop.css    # Component styles
│   ├── index.jsx             # Application entry point
│   └── index.css             # Global styles
├── static/
│   └── img/                  # Static images
├── public/                   # Public assets
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── tailwind.css            # Custom CSS variables and utilities
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies
```

## 🎨 Design System

### Colors
The project uses custom CSS variables defined in `tailwind.css`:
- **Primary Blue**: `#4361EE`
- **Teal Accent**: `#00BFA5`
- **Dark Backgrounds**: `#0A0E27` to `#101331`
- **Gradient Buttons**: `from-[#3B82F6] to-[#07214C]`

### Typography
- **Font Family**: Poppins (loaded via Google Fonts)
- **Responsive sizing** with mobile-first approach

### Key Features
- ✨ Glassmorphic card designs with backdrop blur
- 🎯 Responsive navigation with mobile hamburger menu
- 🌊 Animated gradient backgrounds
- 🎨 Enhanced button hover states with scale and glow effects
- 📱 Fully responsive design
- 🔧 Modular component structure

## 🏗️ Building for Production

To create a production build:

```bash
yarn build
```

This will generate optimized files in the `/dist` directory. You can preview the production build locally:

```bash
yarn preview
```

## 💻 Development Guidelines

### Port Configuration
The development server starts on port 5173 by default but will automatically find an available port if it's in use.

### Component Development
Use Storybook for isolated component development:
```bash
yarn storybook
```

### Styling
- Use Tailwind utility classes for styling
- Custom CSS variables are defined in `tailwind.css`
- Component-specific styles go in corresponding `.css` files

### State Management
The project uses React's built-in `useState` hooks for state management. No external state management library is currently implemented.

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes following the existing code style
3. Test your changes thoroughly
4. Submit a pull request with a clear description

## 📝 Notes

- This project was initially generated using Anima's design-to-code platform and has been extensively customized
- The entire landing page is contained in a single component (`Desktop.jsx`) with all sections
- Background effects use teal/blue gradient blur orbs for visual appeal
- The CTA section features a unique gradient border design

## 🐛 Known Issues

- None currently reported

## 📄 License

[Add your license information here]

---

For more technical details and development notes, see [CLAUDE.md](./CLAUDE.md).