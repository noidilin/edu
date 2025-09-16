# Learning shadcn/ui and Motion - Portfolio Project

## Overview

This is a [Next.js](https://nextjs.org) project demonstrating advanced patterns for integrating **shadcn/ui** design system with **motion** animation library.

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (New York style)
- **Animation**: Motion library
- **Package Manager**: Bun
- **Development**: Turbopack for fast builds

### Project Structure

```
├── app/
│   ├── (home)/          # Home page components
│   ├── globals.css      # Global styles and theme
│   └── layout.tsx       # Root layout
├── components/
│   └── ui/              # shadcn/ui components
├── hooks/
│   └── useTextRevealAnimation.ts  # Custom motion hook
└── lib/
    └── utils.ts         # Utility functions
```

---

## Key Insights

This project demonstrates advanced patterns for integrating **shadcn/ui** design system with **motion** animation library in a Next.js application.

### 🎨 How shadcn/ui is Used

**Component Architecture:**

- **Base Components**: Button, Accordion, Carousel, Typography, Hover Card, Sheet, Dropdown Menu
- **Configuration**: New York style with neutral base color, CSS variables enabled (`components.json:9`)
- **Theme System**: Custom OKLCH color space with comprehensive dark/light mode support (`app/globals.css:8-122`)
- **Custom Fonts**: Merriweather Sans, Fraunces (serif), and Fira Code (mono) integrated via CSS variables

**Component Usage Examples:**

- `Button` with variants (outline, ghost) and custom dark mode styling (`app/(home)/hero.tsx:47-53`)
- `Carousel` with custom positioning for navigation buttons (`app/(home)/testimonials.tsx:104-105`)
- `Typography` components (H1, H2, Blockquote) with responsive sizing (`components/ui/typography.tsx`)

### 🎛️ How to Customize shadcn Components

**1. Variant System with CVA (Class Variance Authority):**

```typescript
// Example from Button component
const buttonVariants = cva(baseStyles, {
  variants: {
    variant: { default: '...', destructive: '...', outline: '...' },
    size: { default: '...', sm: '...', lg: '...' },
  },
});
```

**2. CSS Variable Theming:**

- Customize colors in `app/globals.css` using OKLCH color space
- Override default shadows, fonts, and spacing via CSS custom properties
- Dark mode automatically handled through CSS variable switching

**3. Component Extension:**

- Use `cn()` utility to merge Tailwind classes with component defaults
- Add custom styling via `className` prop while preserving base functionality
- Typography components demonstrate extending HTML elements with consistent styling

### ✨ Motion Effects Achieved

**1. Text Reveal Animations:**

- **Word-by-word staggered entrance** using SplitType + motion (`hooks/useTextRevealAnimation.ts:12-18`)
- **Custom hook pattern** for reusable text animations with entrance/exit states
- **Intersection-triggered animations** using `useInView` (`app/(home)/intro.tsx:10-14`)

**2. Scroll-Driven Parallax:**

- **Image scaling** based on scroll progress (`app/(home)/hero.tsx:17-22`)
- **Text sliding effects** with bidirectional movement (`app/(home)/testimonials.tsx:54-55`)
- **Transform mapping** from scroll progress to CSS properties

**3. Component Animations:**

- **Entrance animations** with opacity and transform properties
- **Staggered delays** for sequential element reveals
- **Responsive behavior** with mobile/desktop animation variations

### 🪝 When and How to Use Motion Hooks

**useAnimate + stagger (Custom Text Animation):**

```typescript
// Best for: Complex text animations with precise control
const { scope, entranceAnimation } = useTextRevealAnimation();
// Usage: One-time setup, trigger on mount or intersection
```

**useScroll + useTransform (Scroll Parallax):**

```typescript
// Best for: Scroll-driven animations with smooth interpolation
const { scrollYProgress } = useScroll({ target, offset });
const scale = useTransform(scrollYProgress, [0, 1], ['100%', '240%']);
// Usage: Continuous scroll tracking with performance optimization
```

**useInView (Intersection Triggers):**

```typescript
// Best for: Trigger animations when elements enter viewport
const inView = useInView(scope, { once: true });
// Usage: One-time triggers, scroll-based reveals
```

**motion Components (Declarative Animations):**

```typescript
// Best for: Simple entrance/exit animations
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
// Usage: Component-level animations with props-based control
```

### 🎯 Important Learning Points

**Performance Patterns:**

- **SplitType integration** for text manipulation before animation (`hooks/useTextRevealAnimation.ts:9`)
- **Scroll optimization** using specific target elements and offset ranges
- **Animation cleanup** in useEffect for memory management

**Responsive Design:**

- **Mobile-first animations** with desktop enhancements
- **Conditional animation behavior** using Tailwind responsive prefixes (`app/(home)/hero.tsx:62-64`)
- **Viewport-specific transform values** to prevent layout issues

**Code Organization:**

- **Custom hooks** for reusable animation logic
- **Component composition** combining shadcn + motion seamlessly
- **Type safety** with proper TypeScript integration throughout

This project showcases production-ready patterns for building sophisticated, accessible, and performant user interfaces with modern animation techniques.

---

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [shadcn/ui Documentation](https://ui.shadcn.com/) - learn about the component system
- [Motion Documentation](https://motion.dev/) - learn about animation library
- [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework
