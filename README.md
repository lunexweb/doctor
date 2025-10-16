# Bouckaert Face Craft - Professional Maxillofacial Surgery Website

A modern, professional website for Prof. M Bouckaert - Maxillofacial & Oral Surgeon. Built with cutting-edge web technologies to provide an exceptional user experience for patients and medical professionals.

## 🏥 About

This website showcases the professional services and expertise of Prof. M Bouckaert, a renowned Maxillofacial & Oral Surgeon. The site provides comprehensive information about qualifications, procedures, patient information, and contact details.

## ✨ Features

- **Modern Design**: Clean, professional medical aesthetic with responsive design
- **Multi-page Navigation**: Home, Qualifications, Procedures, Patient Info, and Contact sections
- **Mobile Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Structured data and meta tags for better search visibility
- **Contact Integration**: Direct phone calling and WhatsApp integration

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom medical theme
- **UI Components**: shadcn/ui with Radix UI primitives
- **Routing**: React Router DOM
- **State Management**: React Query for server state
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript strict mode

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bouckaert-face-craft-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the website

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
bouckaert-face-craft-main/
├── public/                 # Static assets
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components (shadcn/ui)
│   │   ├── About.tsx      # About section
│   │   ├── Contact.tsx    # Contact form and info
│   │   ├── Footer.tsx     # Site footer
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Services.tsx   # Services overview
│   │   └── WhatsAppButton.tsx # WhatsApp integration
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page
│   │   ├── Qualifications.tsx
│   │   ├── Procedures.tsx
│   │   ├── PatientInfo.tsx
│   │   └── NotFound.tsx
│   ├── assets/            # Images and media
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles and CSS variables
├── .gitignore             # Git ignore rules
├── components.json        # shadcn/ui configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # This file
```

## 🎨 Design System

The website uses a custom medical design system with:

- **Primary Colors**: Professional blue (#1e3a5f) for trust and reliability
- **Secondary Colors**: Medical yellow (#ffd700) for warmth and approachability
- **Typography**: Inter font family for excellent readability
- **Spacing**: Consistent 8px grid system
- **Components**: Fully customizable shadcn/ui components

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with professional introduction
- About section highlighting expertise
- Services overview
- Contact information and call-to-action

### Qualifications (`/qualifications`)
- Educational background
- Professional certifications
- Specializations and expertise areas

### Procedures (`/procedures`)
- Comprehensive list of surgical procedures
- Detailed explanations of treatments
- Before/after information

### Patient Information (`/patient-info`)
- Pre-operative instructions
- Post-operative care guidelines
- FAQ section
- Insurance and payment information

### Contact (`/#contact`)
- Contact form with validation
- Office location and hours
- Emergency contact information
- WhatsApp integration for quick communication

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

### Modifying Styles

- Global styles: `src/index.css`
- Component styles: Use Tailwind classes
- Custom CSS variables: Defined in `:root` section of `index.css`

### Adding Components

- Place reusable components in `src/components/`
- Use shadcn/ui components from `src/components/ui/`
- Follow TypeScript interfaces for type safety

## 🚀 Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Options

- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: Cloudflare, AWS CloudFront
- **Traditional Hosting**: Any web server supporting static files

### Environment Variables

Create a `.env` file for environment-specific configurations:

```env
VITE_SITE_URL=https://your-domain.com
VITE_PHONE_NUMBER=0119703320
VITE_WHATSAPP_NUMBER=your-whatsapp-number
```

## 📞 Contact Information

- **Phone**: 011 970 3320
- **WhatsApp**: Available through the floating button
- **Website**: Professional maxillofacial surgery services

## 🤝 Contributing

This is a professional medical website. For updates or modifications:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🔒 Security

- No sensitive patient data is stored
- Contact forms use client-side validation
- HTTPS recommended for production deployment
- Regular dependency updates for security patches

---

**Built with ❤️ for Prof. M Bouckaert - Maxillofacial & Oral Surgeon**
**Built with ❤️ for Prof. M.M.R Bouckaert - Maxillofacial & Oral Surgeon**