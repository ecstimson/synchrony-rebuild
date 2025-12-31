# Synchrony Labs Website Rebuild - PRD

## Project Overview

**Project Name:** Synchrony Labs Website Rebuild  
**Repository:** `synchrony-rebuild`  
**Platform:** Next.js 14 (App Router) + Supabase + Vercel  
**Timeline:** TBD  
**Current Status:** Frontend design complete via Claude AI Studio

---

## 1. Project Goals

### Primary Objectives
- Build production-ready marketing website for Synchrony Labs preclinical CRO
- Implement "Icon Transportation" luxury aesthetic adapted for medical/research context
- Create scalable architecture for 63+ content pages (7 hubs, 6 parents, 50+ children)
- Establish backend infrastructure for lead capture (contact form, newsletter)

### Success Criteria
- ✅ Frontend matches AI Studio design specifications
- ✅ All 63 JSON content pages render dynamically
- ✅ Contact form submissions stored in Supabase
- ✅ Newsletter signups functional
- ✅ Deployed to Vercel with CI/CD
- ✅ Mobile-responsive across all breakpoints
- ✅ Lighthouse score >90 (Performance, Accessibility, SEO)

---

## 2. Technical Architecture

### 2.1 Frontend Stack

**Framework:** Next.js 14.x (App Router)
- TypeScript for type safety
- React Server Components (RSC) by default
- Client Components only where necessary (forms, interactive elements)

**Styling:** Tailwind CSS 3.x
- Custom color palette (Dark Navy, Ghost White, Vibrant Teal)
- DM Sans font family (replacing Greycliff CF)
- Luxury design system (padding, shadows, borders)

**UI Components:**
- Lucide React icons
- Custom components based on AI Studio design
- Reusable card components for content pages

**Content Management:**
- Static JSON files (63 files in `/content` directory)
- Type-safe imports with TypeScript interfaces
- Dynamic routing via file-based structure

### 2.2 Backend Stack

**Database:** Supabase (PostgreSQL)
- Contact form submissions table
- Newsletter subscribers table
- Real-time subscriptions (optional for admin dashboard)

**API Routes:** Next.js API routes (App Router)
- `/api/contact` - POST endpoint for contact form
- `/api/newsletter` - POST endpoint for newsletter signup
- Server-side validation with Zod schemas

**Authentication:** (Future Phase)
- Supabase Auth for potential admin panel
- Not required for MVP

### 2.3 Deployment & Infrastructure

**Hosting:** Vercel
- Automatic deployments from `main` branch
- Preview deployments for pull requests
- Edge Functions for API routes
- Environment variables via Vercel dashboard

**Version Control:** Git + GitHub
- Repository: `synchrony-rebuild`
- Branch strategy: `main` (production), `develop` (staging), feature branches
- Conventional commits

---

## 3. Design System

### 3.1 Color Palette

```typescript
// tailwind.config.ts
colors: {
  navy: {
    DEFAULT: '#032235', // Primary (headers, buttons, dark accents)
  },
  white: '#FFFFFF',
  ghost: '#F7F7F8', // Alternating section backgrounds
  teal: {
    DEFAULT: '#55B9BE', // Icons, highlights
  },
  red: {
    alert: '#CF0000', // Alerts/errors only
  },
  steel: '#4682b4', // Secondary accent
}
```

### 3.2 Typography

**Font Family:** DM Sans (Google Fonts)
- Loaded via `next/font/google`
- Variable font with weights: 400, 500, 700, 900

**Hierarchy:**
- **H1:** DM Sans Bold (700), Uppercase, tracking-wide, 48-64px
- **H2:** DM Sans Bold (700), Uppercase, tracking-wide, 36-48px
- **H3:** DM Sans Medium (500), Mixed case, 24-32px
- **Body:** DM Sans Regular (400), 16-18px
- **Buttons:** DM Sans Bold (700), Uppercase, tracking-wider, 14-16px

**NO Serif fonts** - completely removed from design system

### 3.3 Component Patterns

**Buttons:**
- Filled: Navy background, white text, uppercase, tracking-wider, rounded-sm
- Outline: Navy border, navy text, hover fills
- Sizes: sm, md, lg

**Cards:**
- White background on ghost sections (shadow-luxury)
- Ghost background on white sections (border-navy/10)
- Padding: p-8 to p-12
- Rounded: rounded-lg

**Sections:**
- Alternating white/ghost backgrounds
- Padding: py-24 px-6 (luxury spacing)
- Max width: max-w-7xl mx-auto

---

## 4. Content Architecture

### 4.1 URL Structure

```
/                           → Home
/areas-of-expertise/        → Landing page for all 7 hubs
  ├── /cardiovascular/
  │   ├── /heart-failure/
  │   │   ├── /lvad/
  │   │   ├── /cardiopulmonary-bypass/
  │   │   ├── /mechanical-circulatory-support/
  │   │   └── /myocardial-ischemia-models/
  │   ├── /structural-heart/
  │   │   ├── /tavr/
  │   │   ├── /mitraclip/
  │   │   ├── /teer/
  │   │   ├── /mitral-valve-replacement/
  │   │   ├── /tricuspid-valve-replacement/
  │   │   └── /laa-closure/
  │   ├── /neurovascular/
  │   │   ├── /liquid-embolic/
  │   │   ├── /thrombectomy/
  │   │   ├── /aspiration-thrombectomy/
  │   │   └── /neurovascular-stent/
  │   ├── /coronary-vascular/
  │   │   ├── /des/
  │   │   └── /dcb/
  │   ├── /peripheral-vascular/
  │   │   ├── /carotid-stent/
  │   │   ├── /aaa-device/
  │   │   ├── /ivc-filter/
  │   │   ├── /embolic-protection/
  │   │   ├── /des/
  │   │   └── /dcb/
  │   └── /robotics/
  │       ├── /neurovascular/
  │       ├── /endovascular/
  │       ├── /abdominal-surgery/
  │       └── /thoracic-surgery/
  ├── /dermatological/
  │   ├── /wound-healing/
  │   └── /aesthetics/
  ├── /urogenital/
  │   ├── /renal-transplantation/
  │   ├── /prosthetic-disease-treatment/
  │   └── /stone-retrieval/
  ├── /gastrointestinal/
  │   ├── /bariatric-therapies/
  │   ├── /robotics/
  │   └── /gi-sealants/
  ├── /respiratory/
  │   ├── /copd-therapies/
  │   └── /lung-lobe-sealants/
  ├── /neurological/
  │   ├── /shunts/
  │   ├── /dural-sealants/
  │   └── /spinal-nerve-stimulation/
  └── /musculoskeletal/
      ├── /osteoarthritis-models/
      └── /bone-healing/

/facility/                  → Facility page
/contact/                   → Contact page
```

### 4.2 JSON Content Files

**Location:** `/content/` directory
- `hub-pages/` (7 files)
- `parent-pages/` (6 files)
- `child-pages/` (50 files)

**Schema:** TypeScript interfaces
```typescript
interface HubPage {
  page_slug: string;
  page_title: string;
  hero: HeroSection;
  subpages_section: SubpagesSection;
  why_choose_section: WhyChooseSection;
  featured_services: FeaturedServicesSection;
  related_services: RelatedServicesSection;
  cta_section: CTASection;
}
```

### 4.3 Dynamic Routing

**File Structure:**
```
app/
├── areas-of-expertise/
│   ├── page.tsx                    → Areas landing
│   ├── [hub]/
│   │   ├── page.tsx                → Hub page
│   │   ├── [parent]/
│   │   │   ├── page.tsx            → Parent page
│   │   │   └── [child]/
│   │   │       └── page.tsx        → Child page
```

**Data Loading:**
```typescript
// app/areas-of-expertise/[hub]/[parent]/[child]/page.tsx
import childData from '@/content/child-pages/lvad-child.json';

export default function ChildPage({ params }) {
  const { hub, parent, child } = params;
  const data = await getChildPageData(child);
  return <ChildPageTemplate {...data} />;
}
```

---

## 5. Supabase Backend Setup

### 5.1 Database Schema

**Table: `contact_submissions`**
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  source_page TEXT, -- Which page form was submitted from
  status TEXT DEFAULT 'new' -- new, contacted, resolved
);

-- Add indexes
CREATE INDEX idx_contact_created ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_status ON contact_submissions(status);
```

**Table: `newsletter_subscribers`**
```sql
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active', -- active, unsubscribed
  source_page TEXT,
  confirmed BOOLEAN DEFAULT FALSE
);

-- Add indexes
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_status ON newsletter_subscribers(status);
```

### 5.2 Row Level Security (RLS)

```sql
-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: Allow inserts from API
CREATE POLICY "Allow insert from API" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow insert from API" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Policy: Restrict reads to authenticated users only (future admin)
CREATE POLICY "Admin read only" ON contact_submissions
  FOR SELECT USING (false); -- Will update when auth is added

CREATE POLICY "Admin read only" ON newsletter_subscribers
  FOR SELECT USING (false);
```

### 5.3 Supabase Environment Variables

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key # Server-only
```

---

## 6. API Routes

### 6.1 Contact Form API

**Endpoint:** `POST /api/contact`

**Request Schema:**
```typescript
interface ContactFormData {
  name: string;        // Required, 2-100 chars
  email: string;       // Required, valid email
  phone?: string;      // Optional, phone format
  company?: string;    // Optional
  message: string;     // Required, 10-2000 chars
  sourcePage: string;  // Auto-captured from referrer
}
```

**Response:**
```typescript
// Success
{ success: true, message: "Thank you for contacting us!" }

// Error
{ success: false, error: "Validation error" }
```

**Implementation:**
```typescript
// app/api/contact/route.ts
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10).max(2000),
  sourcePage: z.string(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const validated = contactSchema.parse(body);
  
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // Server-side only
  );
  
  const { error } = await supabase
    .from('contact_submissions')
    .insert(validated);
  
  if (error) throw error;
  
  return Response.json({ success: true });
}
```

### 6.2 Newsletter API

**Endpoint:** `POST /api/newsletter`

**Request Schema:**
```typescript
interface NewsletterData {
  email: string;       // Required, valid email
  sourcePage: string;  // Auto-captured
}
```

**Implementation:** Similar to contact form, inserts into `newsletter_subscribers`

---

## 7. Component Architecture

### 7.1 Reusable Components

**Layout Components:**
- `Header.tsx` - Fixed navigation
- `Footer.tsx` - Dark navy footer
- `Container.tsx` - Max-width wrapper
- `Section.tsx` - Alternating backgrounds

**UI Components:**
- `Button.tsx` - Primary/secondary variants
- `Card.tsx` - Service/capability cards
- `HeroSection.tsx` - Full-width hero
- `IconCard.tsx` - Icon + title + description
- `CTASection.tsx` - Call-to-action banner

**Form Components:**
- `ContactForm.tsx` - Client component
- `NewsletterForm.tsx` - Client component
- `Input.tsx` - Styled input field
- `Textarea.tsx` - Styled textarea
- `FormError.tsx` - Error message display

### 7.2 Page Templates

**Template Files:**
```
components/templates/
├── HubPageTemplate.tsx       → Renders hub page JSON
├── ParentPageTemplate.tsx    → Renders parent page JSON
└── ChildPageTemplate.tsx     → Renders child page JSON
```

Each template:
- Accepts JSON data as props
- Renders appropriate sections
- Handles missing/optional fields
- Uses reusable components

---

## 8. Development Workflow

### 8.1 Initial Setup Steps

**1. Repository Setup**
```bash
# Create Next.js project
npx create-next-app@latest synchrony-rebuild
cd synchrony-rebuild

# Initialize git
git init
git add .
git commit -m "feat: initial Next.js setup"

# Create GitHub repo and push
gh repo create synchrony-rebuild --public --source=. --remote=origin
git push -u origin main
```

**2. Install Dependencies**
```bash
npm install @supabase/supabase-js zod lucide-react
npm install -D @types/node
```

**3. Supabase Project Setup**
- Go to supabase.com
- Create new project
- Note: URL and anon key
- Run SQL migrations for tables
- Configure RLS policies

**4. Environment Variables**
```bash
# Create .env.local
echo "NEXT_PUBLIC_SUPABASE_URL=your-url" >> .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key" >> .env.local
echo "SUPABASE_SERVICE_ROLE_KEY=your-service-key" >> .env.local

# Add to .gitignore
echo ".env*.local" >> .gitignore
```

**5. Vercel Deployment**
- Connect GitHub repo to Vercel
- Add environment variables in Vercel dashboard
- Enable automatic deployments

### 8.2 Development Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

### 8.3 Git Workflow

**Branch Strategy:**
- `main` - Production (auto-deploys to Vercel)
- `develop` - Staging branch
- `feature/*` - Feature branches

**Commit Convention:**
```
feat: add contact form component
fix: correct mobile navigation overflow
docs: update README with setup instructions
style: apply navy color to buttons
refactor: extract hero section to component
```

---

## 9. Feature Implementation Plan

### Phase 1: Foundation (Week 1)
- ✅ AI Studio design downloaded
- ⏳ Next.js project scaffolding
- ⏳ Tailwind configuration (colors, fonts)
- ⏳ Component library setup
- ⏳ JSON content integration

### Phase 2: Core Pages (Week 2)
- ⏳ Home page
- ⏳ Navigation header
- ⏳ Footer
- ⏳ Services hub
- ⏳ Contact page

### Phase 3: Dynamic Content (Week 3)
- ⏳ Hub page template
- ⏳ Parent page template
- ⏳ Child page template
- ⏳ Dynamic routing setup
- ⏳ All 63 pages rendering

### Phase 4: Backend Integration (Week 4)
- ⏳ Supabase setup
- ⏳ Contact form API
- ⏳ Newsletter API
- ⏳ Form validation
- ⏳ Success/error states

### Phase 5: Polish & Launch (Week 5)
- ⏳ Mobile responsiveness
- ⏳ Performance optimization
- ⏳ SEO metadata
- ⏳ Accessibility audit
- ⏳ Production deployment

---

## 10. Technical Requirements

### 10.1 Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS 14+
- Chrome Mobile Android 10+

### 10.2 Performance Targets
- Lighthouse Performance: >90
- First Contentful Paint (FCP): <1.5s
- Time to Interactive (TTI): <3.0s
- Cumulative Layout Shift (CLS): <0.1

### 10.3 Accessibility
- WCAG 2.1 Level AA compliance
- Semantic HTML
- ARIA labels where appropriate
- Keyboard navigation
- Screen reader tested

---

## 11. File Structure

```
synchrony-rebuild/
├── app/
│   ├── layout.tsx                 → Root layout
│   ├── page.tsx                   → Home page
│   ├── globals.css                → Global styles
│   ├── api/
│   │   ├── contact/route.ts       → Contact API
│   │   └── newsletter/route.ts    → Newsletter API
│   ├── services/page.tsx
│   ├── facilities/page.tsx
│   ├── team/page.tsx
│   ├── contact/page.tsx
│   └── areas-of-expertise/
│       ├── page.tsx
│       └── [hub]/
│           ├── page.tsx
│           └── [parent]/
│               ├── page.tsx
│               └── [child]/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── CTASection.tsx
│   │   └── ...
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   └── NewsletterForm.tsx
│   └── templates/
│       ├── HubPageTemplate.tsx
│       ├── ParentPageTemplate.tsx
│       └── ChildPageTemplate.tsx
├── content/
│   ├── hub-pages/           → 7 JSON files
│   ├── parent-pages/        → 6 JSON files
│   └── child-pages/         → 50 JSON files
├── lib/
│   ├── supabase.ts          → Supabase client
│   ├── schemas.ts           → Zod schemas
│   └── utils.ts             → Helper functions
├── types/
│   └── content.ts           → TypeScript interfaces
├── public/
│   └── images/
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .env.local
```

---

## 12. Success Metrics

### Launch Criteria
- ✅ All 63 content pages accessible
- ✅ Contact form submissions storing in Supabase
- ✅ Newsletter signups functional
- ✅ Mobile responsive (tested on 3 devices)
- ✅ No console errors
- ✅ Lighthouse scores >90

### Post-Launch Monitoring
- Form submission success rate
- Page load times
- Error tracking (Sentry integration optional)
- Analytics (Google Analytics optional)

---

## 13. Open Questions / Decisions Needed

1. **Email notifications:** Should contact form submissions trigger email alerts? (Future phase with SendGrid/Resend)
2. **Newsletter provider:** Integrate with Mailchimp/ConvertKit or manage in Supabase? (Future phase)
3. **Admin dashboard:** Need UI to view contact submissions? (Future phase with Supabase Auth)
4. **Image hosting:** Use Vercel blob storage or external CDN? (TBD based on image count)
5. **Analytics:** Google Analytics 4 integration? (Optional)

---

## 14. Next Steps for Developer

### Step 1: Download & Extract Design
```bash
# Extract the AI Studio design files
unzip [downloaded-design].zip -d synchrony-rebuild
cd synchrony-rebuild
```

### Step 2: Initialize Project
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Step 3: Configure Supabase
- Create account at supabase.com
- Create new project
- Run SQL migrations (provided in setup guide)
- Copy environment variables

### Step 4: Content Integration
```bash
# Copy JSON files to content directory
cp -r [path-to-json-files]/* ./content/
```

### Step 5: Build & Test
```bash
# Test build
npm run build

# Deploy to Vercel
vercel deploy
```

---

## Appendix: Supabase Setup Guide

**Full setup instructions will be provided separately**, covering:
- Account creation
- Project initialization
- Database table creation (SQL scripts)
- RLS policy configuration
- API key management
- Environment variable setup
- Testing with Postman/curl

---

**Document Version:** 1.0  
**Last Updated:** December 30, 2025  
**Owner:** Eric (with Claude assistance)
