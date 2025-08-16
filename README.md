# TechCorp - World-Class IT Services Website

A modern, responsive website for TechCorp, a leading IT services company. Built with Next.js 14, TypeScript, Material-UI, and Tailwind CSS.

## 🚀 Features

### Core Features
- **Modern Design**: Beautiful, responsive design with dark/light theme support
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **Dynamic Content**: React Context-based state management for dynamic content updates
- **Form Handling**: Contact form with validation using React Hook Form and Yup
- **Performance Optimized**: Next.js Image optimization and code splitting

### Pages & Sections
- **Home**: Hero section with animated particles and service highlights
- **About**: Company overview, team profiles, and expertise showcase
- **Services**: Comprehensive service offerings with detailed descriptions
- **Case Studies**: Portfolio of successful projects with interactive modals
- **Contact**: Contact form with validation and company information

### Technical Features
- **App Router**: Next.js 14 App Router for modern routing
- **TypeScript**: Full TypeScript support for type safety
- **Material-UI**: Professional UI components with custom theming
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Context**: Lightweight state management using React Context API
- **Form Validation**: Client-side validation with Yup schemas
- **Responsive Design**: Mobile-first responsive design
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Tech Stack

### Frontend
- **Next.js 14.2.31** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.9.2** - Type safety
- **Material-UI 5.15.19** - UI component library
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library

### State Management & Forms
- **React Context API** - Lightweight state management
- **React Hook Form 7.61.1** - Form handling
- **Yup 1.6.1** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
project/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── case-studies/             # Case studies page
│   ├── components/               # Reusable components
│   │   ├── Layout/              # Header, Footer
│   │   └── Sections/            # Page sections
│   ├── contexts/                 # React Context providers
│   │   ├── ThemeContext.tsx     # Theme state management
│   │   └── CaseStudiesContext.tsx # Case studies state management
│   ├── contact/                  # Contact page
│   ├── services/                 # Services page
│   ├── theme/                    # MUI theme configuration
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── providers.tsx            # Context & MUI providers
├── public/                       # Static assets
├── .gitignore                   # Git ignore rules
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.cjs           # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Theme Configuration
The application uses Material-UI theming with light and dark mode support. Customize themes in `app/theme/theme.ts`:

```typescript
export const lightTheme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    // ... other theme options
  },
});
```

### Styling
- **Tailwind CSS**: Use Tailwind utilities for custom styling
- **Material-UI**: Leverage MUI components and sx prop for styling
- **Global Styles**: Modify `app/globals.css` for global styles

### Content Updates
- **Case Studies**: Update mock data in `app/contexts/CaseStudiesContext.tsx`
- **Services**: Modify service data in `app/components/Sections/ServicesSection.tsx`
- **Team**: Update team information in `app/components/Sections/AboutSection.tsx`
- **Theme**: Customize theme settings in `app/contexts/ThemeContext.tsx`

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Next.js Configuration
Modify `next.config.js` for:
- Image domains
- Emotion compiler settings
- Other Next.js options

### Tailwind Configuration
Customize `tailwind.config.js` for:
- Custom colors
- Font families
- Spacing scales
- Component styles

## 🏗️ State Management Architecture

### React Context Implementation
The application uses React Context API for lightweight state management:

#### **Theme Context (`app/contexts/ThemeContext.tsx`)**
- **Purpose**: Manages light/dark theme state
- **Features**: 
  - localStorage persistence
  - System preference detection
  - TypeScript support
- **Usage**: `const { isDark, toggleTheme } = useTheme();`

#### **Case Studies Context (`app/contexts/CaseStudiesContext.tsx`)**
- **Purpose**: Manages case studies data and UI state
- **Features**:
  - Async data loading with loading states
  - Pagination support
  - Error handling
  - Modal state management
- **Usage**: `const { studies, loading, loadMoreCaseStudies } = useCaseStudies();`

### Benefits of Context API
- **Simplified Architecture**: No complex Redux setup required
- **Better Performance**: Reduced bundle size and faster state updates
- **Easier Maintenance**: More straightforward than Redux
- **TypeScript Support**: Full type safety with custom hooks
- **Same Functionality**: All features work exactly as before

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: hello@techcorp.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ using Next.js, TypeScript, Material-UI, and React Context**
