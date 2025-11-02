# Learning Path

## Overview

> [!TIP]
> 60+ projects across 4 stage | HTML+CSS -> JavaScript -> React -> Next.js

### Learning Progression

This repository demonstrates a clear learning path:

1. **Fundamentals**: Vanilla CSS/JS -> DOM manipulation -> Async JavaScript
2. **Framework Basics**: React components -> Hooks -> State management
3. **Advanced Patterns**: TypeScript -> Routing -> Global state (Context/Redux) -> Server state (React Query)
4. **Production-Ready**: Next.js App Router -> Server Actions -> Authentication -> shadcn/ui + Motion animations

### Repository Structure

```
edu/
├── css/
│   ├── basic/          # Simple CSS practice
│   └── project/        # SASS-based projects
├── javascript/
│   ├── basic/          # Vanilla JS concepts & DOM projects
│   └── project/        # TypeScript & advanced JS projects
├── react/
│   ├── basic/          # React fundamentals & hooks
│   └── project/        # Full React applications
└── next/
    ├── basic/          # Next.js App Router concepts
    └── project/        # Production-grade Next.js apps
```

This repository documents my web development learning journey through various projects organized by technology stack. Each project represents hands-on practice with modern web development concepts, tools, and frameworks.

> [!CAUTION]
> Node Modules Management:
>
> - Clean `node_modules` folders after finishing each project to keep the repo size manageable.
> - Use `rimraf node_modules` instead of native Windows commands for reliable cleanup.

---

## **Next.js**

### Basic (`next/basic/`) - 8 projects

- **Tech Stack**: Next.js 14-15 (App Router) with React 19, TypeScript, Zod, React Hook Form, Biome, Lucia Auth
- Projects:
  - **app-router-01**
    - **Key Concepts**: File-based routing, layouts, server components, client components
  - **route-01**
    - **Key Concepts**: App Router fundamentals, Dynamic routes, Route groups, Middleware
  - **fetch-01**
    - **Key Concepts**: Server-side data fetching, API routes, streaming, route handlers
  - **cache-01**
    - **Key Concepts**: Data caching strategies, revalidation, cache invalidation
  - **mutation-01**
    - **Key Concepts**: Server Actions, Data mutations, Form handling
  - **optimizations-01**
    - **Key Concepts**: Image optimization, Font optimization, Code splitting, Performance best practices
  - **auth-01**
    - **Key Concepts**: Authentication patterns, session management, protected routes
  - **server-action**
    - **Key Concepts**:
      - Progressive form patterns:
        1. Basic server actions with manual state
        2. useActionState for built-in state management
        3. useActionState + client validation for real-time feedback
        4. React Hook Form + Zod for production-ready forms
      - Form validation (client & server)
      - Type-safe form handling with Zod schemas

### Project (`next/project/`) - 3 projects

#### Dashboard

- **Tech Stack**: Next.js 14 App Router
- **Key Concepts**: Official Next.js tutorial project, authentication, database integration, server components

#### Layers

- **Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui (New York style), Motion library, Radix UI, class-variance-authority, next-themes, Bun
- **Key Concepts**:
  - shadcn/ui component system with CVA variants
  - Radix UI primitives for accessibility
  - Motion animations (staggered, infinite scroll, parallax)
  - Custom motion hooks (useAnimate, useScroll, useTransform, useInView)
  - Dark/light mode with next-themes
  - CSS masking for effects

#### Self

- **Tech Stack**: Next.js 15, TypeScript, Tailwind CSS 4, shadcn/ui, Motion library, Bun, Turbopack, SplitType
- **Key Concepts**:
  - Advanced shadcn/ui customization patterns
  - Custom motion hooks for text reveal animations
  - Scroll-driven parallax effects
  - OKLCH color space theming
  - useAnimate for complex animation sequences
  - useScroll + useTransform for scroll-linked animations
  - Intersection-triggered animations with useInView
  - Performance optimization with Turbopack

---

## **React**

### Basic (`react/basic/`) - 17 projects

- **Tech Stack**: React, React Router, Redux, @reduxjs/toolkit, redux-thunk, Tanstack Query, Framer Motion, Biome
- Projects:
  - **basic-01, basic-02, basic-03**
    - **Key Concepts**: JSX, components, props, basic state
  - **component-01, component-02**
    - **Key Concepts**: Component composition patterns, Props drilling, Component architecture
  - **state-01**
    - **Key Concepts**: useState hook, State management fundamentals, Controlled components
  - **context-01, context-02**
    - **Key Concepts**: useContext, useReducer, global state management, prop drilling solutions
  - **effect-01, effect-02**
    - **Key Concepts**: useEffect hook, Side effects, Cleanup functions, Dependency arrays
  - **ref-01**
    - **Key Concepts**: useRef hook, DOM references, Uncontrolled components
  - **portal-01**
    - **Key Concepts**: React Portals, Modal patterns, DOM hierarchy escape
  - **form-01**
    - **Key Concepts**: Form handling, Validation, Controlled inputs
  - **fetching-01**
    - **Key Concepts**: Data fetching patterns, Loading states, Error handling
  - **router-01**
    - **Key Concepts**:
      - Nested routes, loaders & actions
      - Deferred loading with `<Await>` and `<Suspense>`
      - Form submissions with `<Form>` component
      - useLoaderData, useActionData, useNavigation hooks
      - Error handling with errorElement
  - **react-query-01**
    - **Key Concepts**:
      - Server state management
      - Caching
      - Automatic refetching
      - Optimistic updates
      - Devtools
  - **redux-01, redux-02, redux-03**
    - **Key Concepts**:
      - Redux store, actions, reducers
      - Redux Toolkit (createSlice)
      - Async actions with thunks
      - Redux DevTools
  - **motion-01**
    - **Key Concepts**: Declarative animations, gesture animations, layout animations, variants

### Project (`react/project/`) - 7 projects

#### Eat-n-split

- **Tech Stack**: React 18, Vite, SASS, Tailwind
- **Key Concepts**: State lifting, conditional rendering, form handling

#### Tictac

- **Tech Stack**: React 19, Tailwind CSS 4, Vite
- **Key Concepts**: Game state management, computed values, immutability

#### Pizza

- **Tech Stack**: React 18, Vite
- **Key Concepts**: Component composition, props, conditional rendering

#### Quiz-01, Quiz-02

- **Tech Stack**: React 18, json-server, Vite, Tailwind, SASS
- **Key Concepts**: useReducer for complex state, timer functionality, JSON Server for mock API

#### Food-order

- **Tech Stack**: React 18, Vite, SASS, Tailwind, Express backend
- **Key Concepts**: HTTP requests, context API, modal patterns, cart functionality

#### Usepopcorn

- **Tech Stack**: React 18, Vite
- **Key Concepts**: Movie search app, custom hooks, external API integration (OMDB)

#### Worldwise

- **Tech Stack**: React 18, React Router, Context API, Vite
- **Key Concepts**: SPA routing, map integration, global state, geolocation

#### Wild-oasis

- **Tech Stack**: React 19, @tanstack/react-query, Supabase, React Router 7, React Hook Form, styled-components, recharts, date-fns, react-hot-toast, Tailwind CSS 4, Biome
- **Key Concepts**:
  - Full-stack React app with Supabase backend
  - Advanced data fetching & caching with React Query
  - Form validation with React Hook Form
  - Charts with Recharts
  - Authentication & authorization
  - CSS-in-JS with styled-components + Tailwind

---

## **JavaScript**

### Basic (`javascript/basic/`) - 10 DOM projects + 14 concept files

- **Tech Stack**: Vanilla JS, Tailwind CSS, Vite, ESLint, Prettier, Stylelint
- **DOM Projects**: array-01, async, date-01, dom-manipulation-01, dom-manipulation-02, dom-dice-challenge, dom-drum-kit, dom-guess-number, dom-pig-game, dom-score-keeper
- **Key Concepts**: Destructuring (arrays & objects), Array methods, Async patterns (Promises, async/await), Classes & OOP, Date manipulation, Spread/rest operators, Optional chaining, For-of loops, DOM manipulation, event handling, async operations (XMLHttpRequest, Promises), form validation

### Projects (`javascript/project/`) - 5 projects

#### TypeScript - 3 projects

- **Tech Stack**: TypeScript, Vite
- Projects:
  - **ts-basic** (`javascript/basic/ts-basic/`)
    - **Key Concepts**: Type definitions, DOM manipulation with types, localStorage integration, strict TypeScript config, module system
  - **ts-black-jack** (`javascript/project/ts-black-jack/`)
    - **Key Concepts**: Classes & interfaces, enums, generics, OOP principles, access modifiers, static members
  - **ts-react** (`javascript/project/ts-react/`)
    - **Key Concepts**: React component typing, typed hooks (useState, useEffect), event handler typing, props interfaces, type-safe state management

#### Mapty

- **Tech Stack**: Vanilla JS, Vite, Tailwind CSS, SASS, ESLint, Prettier
- **Key Concepts**: Geolocation API, OOP, local storage, Leaflet maps integration

#### Bankist

- **Tech Stack**: Vanilla JS, Vite, Tailwind CSS, SASS, ESLint
- **Key Concepts**: Array methods, number formatting, timers, authentication flow

---

## **CSS**

### Basic (`css/basic/`) - 1 project

- **princing-panel**: Vanilla CSS layout practice with Flexbox

### Projects (`css/project/`) - 5 projects

#### Omnifood

- **Tech Stack**: Pure CSS (no frameworks)
- **Key Concepts**:
  - Responsive design with media queries
  - Layout techniques (Grid, Flexbox)
  - Modern CSS practices for landing pages

#### SASS Projects - 4 projects

- **Tech Stack**: SASS/SCSS, PostCSS, Autoprefixer, cssnano, BrowserSync, Vite
- **Projects**:
  - **natours**: Advanced SASS animations, complex layouts, nature/tourism theme
  - **nexter**: CSS Grid mastery, luxury real estate theme
  - **trillo**: Flexbox-focused, hotel booking interface
  - **pixel-rocket**: SASS basics course project, modern build tooling with Vite
- **Key Concepts**:
  - SASS features (variables, mixins, nesting, partials)
  - BEM methodology
  - Component-based CSS architecture
  - CSS Grid & Flexbox layouts
  - Responsive design patterns
  - Autoprefixing & minification
  - 7-1 SASS architecture pattern

---

## **Common Patterns & Tools**

### **Build Tools**

- **Vite**: Primary build tool for most React/JS projects
- **Turbopack**: Used in Next.js 15 projects
- **npm scripts**: For SASS compilation, asset copying, live-reload

### **Code Quality**

- **Linters**: ESLint (JavaScript/React), Stylelint (CSS/SASS), Biome (modern alternative)
- **Formatters**: Prettier
- **Type Safety**: TypeScript in advanced projects

### **Styling Approaches**

- **CSS Preprocessors**: SASS/SCSS
- **Utility-First**: Tailwind CSS (v3-4)
- **CSS-in-JS**: styled-components
- **Component Libraries**: shadcn/ui

### **State Management Evolution**

1. Local state (useState)
2. Context API (useContext + useReducer)
3. React Router (loaders/actions)
4. Redux Toolkit
5. React Query (server state)

### **Animation Libraries**

- Framer Motion → Motion library
- Custom CSS animations
- Scroll-driven animations
