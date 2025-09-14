# Agent Guidelines for Layers Project

## Project Goal: Learning

This is a project for learning shadcn and motion (animation library). My main goal is to write code that is performant, easy to maintain and can scale without issue. Please remind me if there is any code pattern or important concept that can makes me a better developer.

## Tech Stack

- language: typescript
- package manager: bun
- framework: Next.js
- design system: shadcn/ui (tailwind + custom theme)
- animation library: motion

## Build/Lint/Test Commands

- `bun dev` - Start development server with Turbopack
- `bun build` - Build production bundle
- `bun lint` - Run lint checks
- No test command configured

## Code Style Guidelines

### Formatting & Linting

- Use Biome for linting and formatting (configured in `biome.json`)
  - default biome formatting option except indentation (use space not tabs)
- Prettier with Tailwind CSS plugin for sorting classes

### TypeScript & Imports

- Strict TypeScript mode enabled
- Use `@/` path alias for imports (e.g., `@/components/ui/button`)
- Organize imports automatically (Biome config)
- Import types with `type` keyword when needed

### React & Next.js Patterns

- Use function declarations for components (not arrow functions)
- Export components and utilities at bottom of file
- Prefer `type` over `interface` for props
- Use `className` prop with `cn()` utility for conditional classes

### Naming Conventions

- camelCase for variables and functions
- PascalCase for components and types
- kebab-case for file names
- Use descriptive names (e.g., `buttonVariants` not `variants`)

No Cursor or Copilot rules found in this repository.
