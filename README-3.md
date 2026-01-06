# README-3: Hero Content Architecture & Global Spacing

**Date:** January 6, 2026  
**Change:** "Why Choose Us" Section Migrated to Hero Value Content

---

## Overview

This document explains how the "Why Choose Us" section content has been restructured as value-driven paragraphs within the hero sections across Hub, Parent, and Child page templates. This change creates a more impactful hero experience while eliminating redundancy.

---

## 1. Architecture Change: Why Choose → Hero

### Before (Original Design)
The original design had two separate sections:
1. **Hero Section** - Short headline and 1-2 sentence description
2. **"Why Choose Synchrony" Section** - Title, description, and 3 feature cards with icons

```
┌─────────────────────────────────────────┐
│  HERO SECTION (Navy background)         │
│  ├── H1: "Cardiovascular"               │
│  └── Short description (1-2 sentences)  │
└─────────────────────────────────────────┘
           ↓ (scroll)
┌─────────────────────────────────────────┐
│  WHY CHOOSE SECTION (White/Ghost bg)    │
│  ├── Title                              │
│  ├── Description                        │
│  └── 3 Cards with icons                 │
│      • Dual Cath Labs                   │
│      • Duke University Heritage         │
│      • Regulatory Track Record          │
└─────────────────────────────────────────┘
```

### After (Current Design)
The "Why Choose" card descriptions are now embedded as value-driven paragraphs directly in the hero:

```
┌─────────────────────────────────────────┐
│  HERO SECTION (Navy background)         │
│  ├── H1: "Cardiovascular"               │
│  ├── Hero description                   │
│  └── VALUE PARAGRAPHS:                  │
│      • Paragraph 1: Cards[0] + Cards[1] │
│      • Paragraph 2: Cards[2] or desc    │
└─────────────────────────────────────────┘
           ↓ (scroll)
┌─────────────────────────────────────────┐
│  SUBPAGES/SERVICES SECTION              │
│  (No separate "Why Choose" section)     │
└─────────────────────────────────────────┘
```

---

## 2. Template Implementation

### HubPageTemplate.tsx

```tsx
// Hero Section - pulls why_choose_section cards as paragraphs
<section className="relative overflow-hidden bg-navy py-16 md:py-24">
    <Container className="relative z-10">
        <H1 className="text-white mb-6 uppercase tracking-wider">
            {hero.headline}
        </H1>
        <Paragraph className="text-gray-200 max-w-2xl mb-8 text-xl leading-relaxed">
            {hero.description}
        </Paragraph>
        
        {/* Value Propositions - Content from why_choose_section.cards */}
        {why_choose_section?.cards?.length >= 2 && (
            <div className="max-w-2xl space-y-4 mt-8">
                <Paragraph className="text-gray-300 text-base leading-relaxed">
                    {why_choose_section.cards[0].description} {why_choose_section.cards[1].description}
                </Paragraph>
                <Paragraph className="text-gray-300 text-base leading-relaxed">
                    {why_choose_section.cards[2]?.description || why_choose_section.description}
                </Paragraph>
            </div>
        )}
    </Container>
</section>
```

### ParentPageTemplate.tsx & ChildPageTemplate.tsx

Both templates follow the same pattern, pulling `why_choose.cards` content into the hero section.

---

## 3. JSON Data Structure

The JSON files maintain the original structure for backwards compatibility:

```json
{
  "hero": {
    "headline": "Cardiovascular",
    "description": "Comprehensive preclinical validation across..."
  },
  "why_choose_section": {
    "title": "Why Choose Synchrony for Cardiovascular Devices",
    "description": "Four decades of exclusive cardiovascular focus...",
    "cards": [
      {
        "icon_name": "Microscope",
        "title": "Dual Catheterization Laboratories",
        "description": "Two fully-equipped cath labs with high-resolution..."
      },
      {
        "icon_name": "Users",
        "title": "Duke University Heritage",
        "description": "Founded by interventional cardiologists who pioneered..."
      },
      {
        "icon_name": "CheckCircle",
        "title": "Regulatory Track Record",
        "description": "Hundreds of successful FDA submissions across 510(k)..."
      }
    ]
  }
}
```

The template dynamically combines `cards[0].description + cards[1].description` for paragraph 1, and `cards[2].description` for paragraph 2.

---

## 4. Global Spacing & Alignment System

### Container Component
All horizontal alignment uses the shared `Container` component:

```tsx
// components/layout/Container.tsx
export function Container({ children, className }: ContainerProps) {
    return (
        <div className={cn("max-w-7xl mx-auto px-6 md:px-8", className)}>
            {children}
        </div>
    );
}
```

**Key Properties:**
- `max-w-7xl` (1280px) - Maximum content width
- `mx-auto` - Centers the container
- `px-6` (24px) - Horizontal padding on mobile
- `md:px-8` (32px) - Horizontal padding on tablet/desktop

### Section Component
Vertical spacing uses the `Section` component:

```tsx
// components/layout/Section.tsx
export function Section({ children, className, background = "white" }: SectionProps) {
    return (
        <section className={cn(
            "py-24", // 96px vertical padding
            background === "ghost" ? "bg-ghost" :
                background === "navy" ? "bg-navy" : "bg-white",
            className
        )}>
            {children}
        </section>
    );
}
```

### Hero Section Spacing

The hero sections now use padding-based layout instead of flexbox centering:

```tsx
// OLD (caused centering issues):
<section className="relative min-h-[60vh] flex items-center justify-start">

// NEW (consistent alignment):
<section className="relative overflow-hidden bg-navy py-16 md:py-24">
```

**Key Change:** Removed `min-h-[60vh] flex items-center` which was centering content vertically. Now uses `py-16 md:py-24` for consistent padding that matches the Section component pattern.

---

## 5. Alignment Verification

### Horizontal Alignment
All content aligns to the same left edge because:
1. Header uses `Container` → content starts at same left edge
2. Hero uses `Container` → content aligns with header
3. Sections use `Container` → content aligns with hero

### Vertical Alignment
Hero content is top-aligned:
1. Hero section: `py-16 md:py-24` (64px/96px top padding)
2. Main element: `pt-16` (64px) accounts for fixed header
3. Content flows naturally from top, no vertical centering

---

## 6. Page Status Summary

### ✅ Completed Pages
| Page Type | Count | Template |
|-----------|-------|----------|
| Home | 1 | Custom |
| Areas of Expertise Landing | 1 | Custom |
| Hub Pages | 7 | HubPageTemplate |
| Parent Pages | 6 | ParentPageTemplate |
| Child Pages | ~50 | ChildPageTemplate |
| Facility | 1 | Custom |

### ⚠️ Needs Work
| Page | Status |
|------|--------|
| Contact | Has placeholder content, needs full form |

### 🔲 Not Yet Implemented (Per PRD)
| Feature | Status |
|---------|--------|
| Supabase Database | Not started |
| Contact Form API (`/api/contact`) | Not started |
| Newsletter API (`/api/newsletter`) | Not started |
| Form Validation (Zod) | Not started |

---

## 7. Files Modified for Hero Changes

1. `components/templates/HubPageTemplate.tsx`
   - Changed hero from flex-based to padding-based layout
   - Added why_choose_section.cards as value paragraphs

2. `components/templates/ParentPageTemplate.tsx`
   - Same hero layout changes
   - Same value paragraph integration

3. `components/templates/ChildPageTemplate.tsx`
   - Same hero layout changes
   - Same value paragraph integration

---

## 8. Design Rationale

### Why This Change?
1. **Immediate Impact** - Visitors see the key value propositions immediately without scrolling
2. **Reduced Redundancy** - No separate "Why Choose" section competing for attention
3. **Better UX** - Hero tells a complete story: What we do + Why choose us
4. **Consistent Branding** - All page types follow the same hero pattern

### Content Flow
```
Hero:
├── HEADLINE (What area)
├── Description (What we do)
└── Value Paragraphs (Why choose us)
    ├── Paragraph 1: Infrastructure + Heritage
    └── Paragraph 2: Track Record

↓ (scroll to action)

Portfolio Section:
├── Sub-service cards
└── Call-to-actions
```

---

**Document Version:** 1.0  
**Last Updated:** January 6, 2026

