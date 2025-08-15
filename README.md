# TechCorp - World-Class IT Services Website

A modern, responsive website for TechCorp, a leading IT services company. Built with Next.js 14, TypeScript, Material-UI, and Tailwind CSS.

## 🚀 Features

### Core Features
- **Modern Design**: Beautiful, responsive design with dark/light theme support
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **Dynamic Content**: Redux state management for dynamic content updates
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
- **Redux Toolkit**: State management for application data
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
- **Redux Toolkit 2.8.2** - State management
- **React Redux 9.2.0** - React bindings for Redux
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
│   ├── contact/                  # Contact page
│   ├── hooks/                    # Custom React hooks
│   ├── services/                 # Services page
│   ├── store/                    # Redux store
│   │   └── slices/              # Redux slices
│   ├── theme/                    # MUI theme configuration
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── providers.tsx            # Redux & MUI providers
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
- **Case Studies**: Update mock data in `app/store/slices/caseStudiesSlice.ts`
- **Services**: Modify service data in `app/components/Sections/ServicesSection.tsx`
- **Team**: Update team information in `app/components/Sections/AboutSection.tsx`

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

**Built with ❤️ using Next.js, TypeScript, and Material-UI**
