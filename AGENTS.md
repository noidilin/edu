# Agent Guidelines

## Commands

- **Dev**: `npm run dev` (Next.js with Turbopack)
- **Build**: `npm run build` (includes type checking)
- **Lint**: `npm run lint` (ESLint with Next.js config)
- **Format**: Use Biome (`@biomejs/biome`) or Prettier for formatting

## Code Style

- **Imports**: Use `@/` alias for project root imports, organize imports automatically
- **Quotes**: Single quotes for JS/TS, JSX single quotes enabled
- **Semicolons**: As needed (Biome config)
- **Formatting**: 2-space indentation, Tailwind classes sorted with prettier-plugin-tailwindcss
- **TypeScript**: Strict mode enabled, use `type` imports for type-only imports

## Conventions

- **Components**: Use function declarations, export at bottom with named exports
- **Props**: Define interface/type before component, use destructuring with defaults
- **Styling**: Tailwind CSS with `cn()` utility from `@/lib/utils` for conditional classes
- **UI Components**: Use Radix UI primitives with class-variance-authority for variants
- **Error Handling**: Use TypeScript strict mode, proper return types

## Architecture

- Next.js 15 with App Router, React 19, TypeScript 5
- UI components in `components/ui/`, page components in `app/`
- Theme support via `next-themes` with system preference detection
