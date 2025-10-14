# Development Guide - Bouckaert Face Craft

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd bouckaert-face-craft-main

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080` to see the website.

## 📁 Project Structure Deep Dive

```
bouckaert-face-craft-main/
├── public/                 # Static files served directly
│   ├── placeholder.svg    # Default image placeholder
│   └── robots.txt         # Search engine directives
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components (shadcn/ui)
│   │   │   ├── button.tsx    # Button component
│   │   │   ├── card.tsx      # Card component
│   │   │   ├── input.tsx     # Input component
│   │   │   └── ...           # Other UI components
│   │   ├── About.tsx     # About section component
│   │   ├── Contact.tsx   # Contact form component
│   │   ├── Footer.tsx    # Site footer component
│   │   ├── Header.tsx    # Navigation header component
│   │   ├── Hero.tsx      # Hero section component
│   │   ├── Services.tsx  # Services overview component
│   │   └── WhatsAppButton.tsx # WhatsApp integration
│   ├── hooks/            # Custom React hooks
│   │   ├── use-mobile.tsx    # Mobile detection hook
│   │   └── use-toast.ts      # Toast notification hook
│   ├── lib/              # Utility functions
│   │   └── utils.ts      # Common utilities (cn function, etc.)
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Home page
│   │   ├── NotFound.tsx  # 404 page
│   │   ├── PatientInfo.tsx # Patient information page
│   │   ├── Procedures.tsx   # Procedures page
│   │   └── Qualifications.tsx # Qualifications page
│   ├── assets/           # Images and media files
│   │   └── hero-medical.jpg # Hero section image
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles and CSS variables
│   └── vite-env.d.ts     # Vite environment types
├── .gitignore            # Git ignore rules
├── components.json       # shadcn/ui configuration
├── eslint.config.js      # ESLint configuration
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # TypeScript app configuration
├── tsconfig.node.json    # TypeScript node configuration
├── vite.config.ts        # Vite build configuration
└── README.md             # Project documentation
```

## 🎨 Styling Guidelines

### Tailwind CSS Configuration

The project uses Tailwind CSS with a custom medical theme. Key configurations:

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      medical: {
        blue: "hsl(var(--medical-blue))",
        yellow: "hsl(var(--medical-yellow))",
        "blue-light": "hsl(var(--medical-blue-light))",
        gray: "hsl(var(--medical-gray))",
      },
    },
    backgroundImage: {
      "gradient-primary": "var(--gradient-primary)",
      "gradient-accent": "var(--gradient-accent)",
    },
  },
}
```

### CSS Variables (src/index.css)

```css
:root {
  /* Primary colors */
  --primary: 210 83% 15%;
  --primary-foreground: 0 0% 100%;
  
  /* Medical brand colors */
  --medical-blue: 210 83% 15%;
  --medical-yellow: 48 100% 50%;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, hsl(210 83% 15%) 0%, hsl(210 60% 25%) 100%);
  
  /* Shadows */
  --shadow-md: 0 4px 6px -1px hsl(210 83% 15% / 0.1);
}
```

### Component Styling Patterns

```tsx
// Use Tailwind classes with custom CSS variables
<div className="bg-gradient-primary text-primary-foreground p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">Section Title</h2>
  <p className="text-muted-foreground">Content here</p>
</div>

// Use shadcn/ui components
<Button className="bg-gradient-primary hover:opacity-90">
  Call Now
</Button>
```

## 🧩 Component Development

### Creating New Components

1. **Create the component file**:
```tsx
// src/components/NewComponent.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface NewComponentProps {
  title: string;
  description?: string;
}

const NewComponent = ({ title, description }: NewComponentProps) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
      <Button className="mt-4">Action</Button>
    </Card>
  );
};

export default NewComponent;
```

2. **Add to the appropriate page**:
```tsx
// src/pages/Index.tsx
import NewComponent from "@/components/NewComponent";

const Index = () => {
  return (
    <div>
      {/* Other components */}
      <NewComponent 
        title="New Section"
        description="This is a new component"
      />
    </div>
  );
};
```

### Using shadcn/ui Components

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ExampleComponent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Example</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <Button className="w-full">Submit</Button>
      </CardContent>
    </Card>
  );
};
```

## 🛣️ Routing & Navigation

### Adding New Routes

1. **Create the page component**:
```tsx
// src/pages/NewPage.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NewPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">New Page</h1>
        {/* Page content */}
      </main>
      <Footer />
    </div>
  );
};

export default NewPage;
```

2. **Add the route in App.tsx**:
```tsx
// src/App.tsx
import NewPage from "./pages/NewPage";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/new-page" element={<NewPage />} />
          {/* Other routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
```

3. **Update navigation in Header.tsx**:
```tsx
// src/components/Header.tsx
const navLinks = [
  { name: "Home", path: "/" },
  { name: "New Page", path: "/new-page" },
  // Other links
];
```

## 📱 Responsive Design

### Mobile-First Approach

```tsx
// Use responsive Tailwind classes
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-4 
  p-4 
  md:p-6 
  lg:p-8
">
  {/* Content */}
</div>

// Text sizing
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>

// Spacing
<section className="py-8 md:py-12 lg:py-16">
  {/* Section content */}
</section>
```

### Breakpoint Strategy

- **Mobile**: Default styles (no prefix)
- **Tablet**: `md:` prefix (640px+)
- **Desktop**: `lg:` prefix (1024px+)
- **Large Desktop**: `xl:` prefix (1280px+)

## 🔧 Development Tools

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Git workflow
git add .            # Stage changes
git commit -m "..."  # Commit changes
git push             # Push to repository
```

### Code Quality

- **ESLint**: Code linting and formatting
- **TypeScript**: Type checking
- **Prettier**: Code formatting (if configured)

### Development Tips

1. **Use TypeScript interfaces**:
```tsx
interface ComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}
```

2. **Use custom hooks for logic**:
```tsx
// src/hooks/use-custom.tsx
import { useState, useEffect } from 'react';

export const useCustom = () => {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // Logic here
  }, []);
  
  return { state, setState };
};
```

3. **Use CSS variables for theming**:
```css
/* Define in index.css */
:root {
  --custom-color: 210 83% 15%;
}

/* Use in components */
<div className="bg-[hsl(var(--custom-color))]">
```

## 🚀 Building & Deployment

### Production Build

```bash
# Create optimized build
npm run build

# Preview the build
npm run preview
```

### Build Output

The build creates a `dist/` directory with:
- Optimized HTML, CSS, and JavaScript
- Minified and compressed assets
- Source maps for debugging
- Static assets

### Environment Variables

Create `.env` files for different environments:

```bash
# .env.development
VITE_API_URL=http://localhost:3000

# .env.production
VITE_API_URL=https://api.yourdomain.com
```

Access in code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🐛 Debugging

### Common Issues

1. **TypeScript errors**: Check imports and type definitions
2. **Styling issues**: Verify Tailwind classes and CSS variables
3. **Routing problems**: Check route definitions and navigation
4. **Build errors**: Clear node_modules and reinstall

### Debug Tools

- **Browser DevTools**: React DevTools extension
- **Console logging**: Use console.log for debugging
- **Source maps**: Available in development builds

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)

### Useful Commands

```bash
# Install new dependency
npm install package-name

# Install dev dependency
npm install -D package-name

# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Clear npm cache
npm cache clean --force
```

---

**Happy coding! 🚀**
