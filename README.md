# Client Web App 1 - Tangerine Navigator

A modern Next.js web application featuring the **Tangerine Navigator** theme, secured with Azure Entra External ID (Azure AD B2C) authentication.

## 🧭 Overview

Client Web App 1 is part of a multi-tenant IaaS proof of concept, demonstrating enterprise-grade authentication with custom branding. This application runs on **port 3002** and features the vibrant Tangerine Navigator theme with orange-to-teal gradients and compass-inspired design elements.

## 🎨 Tangerine Navigator Theme

The Tangerine Navigator theme embodies **exploration, direction, and precision**:

- **Primary Colors**: Tangerine Orange (#FF8C42) to Navigator Teal (#00D9C0)
- **Design Language**: Compass and navigation elements
- **Visual Identity**: Warm orange gradients transitioning to cool teal
- **Brand Assets**: Compass logos, navigator icons, directional imagery

### Color Palette

```css
--navigator-orange: #FF8C42
--navigator-tangerine: #FFB366
--navigator-teal: #00D9C0
--navigator-cyan: #00FFF5
--navigator-dark: #1A1A2E
--navigator-charcoal: #16213E
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Azure AD B2C tenant configured
- Azure AD application registration

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Copy `.env.example` to `.env.local` and fill in your Azure AD B2C details:
   ```bash
   NEXT_PUBLIC_AZURE_AD_CLIENT_ID=your-client-id
   NEXT_PUBLIC_AZURE_AD_AUTHORITY=https://yourtenantname.b2clogin.com/yourtenantname.onmicrosoft.com/B2C_1_susi
   NEXT_PUBLIC_AZURE_AD_KNOWN_AUTHORITY=yourtenantname.b2clogin.com
   NEXT_PUBLIC_AZURE_AD_REDIRECT_URI=http://localhost:3002
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3002](http://localhost:3002)

## 🔐 Azure AD B2C Setup

### Create B2C Tenant

1. Go to [Azure Portal](https://portal.azure.com)
2. Create an Azure AD B2C tenant
3. Note your tenant name (e.g., `yourtenantname.onmicrosoft.com`)

### Register Application

1. In your B2C tenant, go to **App registrations**
2. Click **New registration**
3. Set **Redirect URI**: `http://localhost:3002` (for development)
4. After creation, copy the **Application (client) ID**

### Configure User Flows

Create these B2C user flows:

- **Sign up and sign in**: `B2C_1_susi`
- **Password reset**: `B2C_1_reset`
- **Profile editing**: `B2C_1_edit_profile`

## 📁 Project Structure

```
client-web-app-1/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Tangerine Navigator theme
│   │   ├── page.tsx             # Home/landing page
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Protected dashboard
│   │   └── profile/
│   │       └── page.tsx         # User profile management
│   ├── lib/
│   │   ├── authConfig.ts        # MSAL configuration
│   │   ├── AuthProvider.tsx    # Auth provider component
│   │   └── useAuth.ts           # Custom auth hook
│   └── styles/
│       └── tangerine-navigator-theme.css  # Theme styles
├── public/
│   ├── navigator-compass-full.svg         # Full logo
│   ├── navigator-compass-icon.svg         # Icon logo
│   ├── favicon.png                        # Favicon
│   └── [other theme assets]
├── package.json
├── tsconfig.json
├── next.config.js
├── vercel.json
└── .env.example
```

## 🎯 Key Features

### Authentication
- **Azure AD B2C integration** via MSAL
- **Popup and redirect** sign-in flows
- **Protected routes** (dashboard, profile)
- **Password reset** and profile editing
- **Silent token refresh**

### Theme Implementation
- **Tangerine Navigator custom CSS** with orange-to-teal gradients
- **Compass-themed UI components**
- **Responsive design** with Tailwind CSS
- **Custom navigation elements** with directional iconography
- **Smooth animations** and transitions

### Pages
- **Home**: Landing page with theme showcase and authentication
- **Dashboard**: Protected route with navigation metrics and route management
- **Profile**: User account management with Azure profile editing

## 🛠️ Available Scripts

```bash
npm run dev        # Start development server on port 3002
npm run build      # Build for production
npm run start      # Start production server on port 3002
npm run lint       # Run ESLint
npm run type-check # Run TypeScript type checking
```

## 🌐 Deployment

### Vercel Deployment

1. **Push to GitHub** (or GitLab, Bitbucket)

2. **Import to Vercel**:
   - Connect your repository
   - Vercel auto-detects Next.js

3. **Configure environment variables** in Vercel dashboard:
   - Add all `NEXT_PUBLIC_AZURE_AD_*` variables
   - Update `NEXT_PUBLIC_AZURE_AD_REDIRECT_URI` to your Vercel domain

4. **Update Azure AD B2C**:
   - Add Vercel domain to redirect URIs in app registration

### Environment Variables for Production

```bash
NEXT_PUBLIC_AZURE_AD_CLIENT_ID=your-production-client-id
NEXT_PUBLIC_AZURE_AD_AUTHORITY=https://yourtenantname.b2clogin.com/yourtenantname.onmicrosoft.com/B2C_1_susi
NEXT_PUBLIC_AZURE_AD_KNOWN_AUTHORITY=yourtenantname.b2clogin.com
NEXT_PUBLIC_AZURE_AD_REDIRECT_URI=https://your-vercel-domain.vercel.app
```

## 🎨 Customizing the Theme

The Tangerine Navigator theme is defined in `styles/tangerine-navigator-theme.css`. Key customization points:

### Colors
Modify CSS variables in `:root`:
```css
--navigator-orange: #FF8C42;
--navigator-teal: #00D9C0;
```

### Gradient Angle
Adjust gradient angles in `.navigator-gradient`:
```css
background: linear-gradient(120deg, var(--navigator-orange), var(--navigator-teal));
```

### Component Styles
Theme provides these utility classes:
- `.navigator-btn-primary` - Primary action buttons
- `.navigator-card` - Content cards with border accents
- `.navigator-nav` - Navigation bars
- `.navigator-badge` - Status badges
- `.navigator-gradient` - Background gradients

## 🔍 Differences from Reader Web Apps

Client Web App 1 differs from Reader Web Apps 1 & 2:

1. **Branding**: "Client" vs "Reader" terminology
2. **Theme**: Tangerine Navigator (orange/teal) vs Guardian MedKit (pink/blue) or Emerald Ronin (green/mint)
3. **Port**: 3002 vs 3000 (App 1) or 3001 (App 2)
4. **Use Case**: Business/enterprise navigation vs content reading
5. **Iconography**: Compass/navigation vs shield/crest

All apps share the same authentication architecture but demonstrate multi-tenant capability through distinct branding.

## 📚 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS + Custom CSS
- **Authentication**: MSAL React (@azure/msal-browser, @azure/msal-react)
- **Identity Provider**: Azure AD B2C (Entra External ID)
- **Deployment**: Vercel

## 🤝 Multi-Tenant Architecture

This application is part of a multi-tenant IaaS POC:

- **App 1** (Reader Web App 1): Guardian MedKit theme on port 3000
- **App 2** (Reader Web App 2): Emerald Ronin theme on port 3001
- **App 3** (Client Web App 1): Tangerine Navigator theme on port 3002

Each app demonstrates:
- Independent branding with theme packs
- Shared authentication infrastructure
- Isolated runtime environments
- Scalable multi-tenant patterns

## 📄 License

This is a proof of concept application for demonstration purposes.

## 🆘 Support

For issues with:
- **Azure AD B2C**: Check Azure Portal → Azure AD B2C → User flows
- **MSAL errors**: Review browser console and `.env.local` configuration
- **Theme not loading**: Verify `layout.tsx` imports `tangerine-navigator-theme.css`
- **Port conflicts**: Ensure port 3002 is available

## 🧭 Navigation Terminology

The Tangerine Navigator theme uses directional/navigation terminology:
- **Routes**: Projects or initiatives
- **Voyages**: Completed projects
- **Milestones**: Key achievements
- **On Course**: On track with goals
- **Harbor**: Secure state/safe zone

This creates a cohesive narrative around business navigation and strategic direction.

---

**Client Web App 1** • Tangerine Navigator Theme • Azure Entra External ID • Port 3002
