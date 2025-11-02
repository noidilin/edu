# Layers - shadcn & Motion libraries

## How shadcn and motion are used in the project

### shadcn/ui Implementation

- **Component System**: Uses shadcn/ui's modular component architecture with components in `/components/ui/`
- **Styling Foundation**: Built on Radix UI primitives (`@radix-ui/react-*`) for accessibility and behavior
- **Variant System**: Leverages `class-variance-authority` (CVA) for creating component variants
- **Theme Integration**: Uses `next-themes` for dark/light mode switching
- **Style Configuration**: Configured in `components.json` with "new-york" style, TypeScript, and CSS variables

### Motion Library Usage

- **Import Patterns**: Uses both `motion/react` for client-side and `motion/react-client` for server components
- **Animation Types**: Implements entrance animations, infinite loops, and interactive drag functionality
- **Hook Usage**: Utilizes `useAnimate` hook for complex animation sequences

## How to customize shadcn components

### 1. Variant-Based Customization (CVA Pattern)

```typescript
// Example from button.tsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-styles",
        destructive: "destructive-styles",
        outline: "outline-styles"
      },
      size: {
        default: "default-size",
        sm: "small-size",
        lg: "large-size"
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)
```

### 2. Custom Component Creation

- **Follow the Pattern**: Use CVA for variants, TypeScript for props, and `cn()` utility for class merging
- **Examples**: `Keycap` and `Tag` components show how to create new shadcn-style components
- **Consistent API**: Maintain `variant`, `size`, and `className` props for consistency

### 3. Extending Existing Components

```typescript
// Example from keycap.tsx - creating new component with shadcn patterns
function Keycap({ className, variant, children, ...props }: 
  React.ComponentProps<'div'> & VariantProps<typeof keycapVariants>) {
  return (
    <div className={cn(keycapVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
}
```

## Motion effects achieved in the project

### 1. Hero Section (`hero.tsx`)

- **Staggered Animations**: Sequential appearance of design elements with delays
- **Interactive Elements**: Draggable design mockups using `drag` prop
- **Complex Sequences**: Multi-step animations using `useAnimate` hook
- **Pointer Animations**: Animated cursors with bounce effects

### 2. Logo Ticker (`logo-ticker.tsx`)

- **Infinite Scroll**: Continuous horizontal movement with `repeat: Infinity`
- **Seamless Loop**: Duplicated content for smooth infinite scrolling
- **Linear Motion**: 30-second duration with linear easing

### 3. Integrations Section (`integrations.tsx`)

- **Vertical Scrolling**: Two columns moving in opposite directions
- **Mask Effects**: CSS masking for fade-in/out at top and bottom
- **Infinite Loops**: Continuous vertical movement creating perpetual motion

### 4. Features Section (`features.tsx`)

- **Hover Animations**: CSS-based transitions on feature cards
- **Group Interactions**: Parent-child hover relationships
- **Transform Effects**: Scale and rotation animations on hover

## When and how to use motion hooks

### `useAnimate` Hook

**When to use**: Complex, multi-step animation sequences that need programmatic control

**Example from hero.tsx**:

```typescript
const [leftDesignScope, leftDesignAnimate] = useAnimate()

useEffect(() => {
  leftDesignAnimate([
    [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
    [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
  ])
}, [leftDesignScope, leftDesignAnimate])
```

**Benefits**:

- **Sequential Control**: Chain multiple animations with precise timing
- **Target Flexibility**: Animate any element within the scoped area
- **Dynamic Timing**: Programmatically control delays and durations

### Direct `motion` Components

**When to use**: Simple, declarative animations that don't need complex sequencing

**Examples**:

```typescript
// Simple infinite animation
<motion.div
  animate={{ x: '-50%' }}
  transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
>

// Interactive dragging
<motion.div drag initial={{ opacity: 0, y: 100 }}>
```

## Additional Important Concepts

### 1. Performance Optimization

- **Server-Side Considerations**: Uses `motion/react-client` for server components
- **CSS Masking**: Leverages CSS for performance-critical effects like fade gradients
- **Transform Properties**: Focuses on GPU-accelerated properties (transform, opacity)

### 2. Responsive Design Integration

- **Conditional Rendering**: Motion elements hidden on mobile (`hidden lg:block`)
- **Breakpoint Awareness**: Different layouts and animations for different screen sizes

### 3. Accessibility Considerations

- **Reduced Motion**: Should implement `prefers-reduced-motion` for accessibility
- **Focus Management**: Maintains proper focus states in shadcn components
- **ARIA Attributes**: Radix UI provides built-in accessibility features

### 4. Development Workflow

- **Type Safety**: Full TypeScript integration for both shadcn and motion
- **Hot Reload**: Works seamlessly with Next.js development server
- **Customization**: Easy theming through CSS variables and Tailwind classes

This project demonstrates a production-ready implementation combining shadcn's component system with motion's animation capabilities, showcasing best practices for both libraries in a modern React application.

