# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

USPACE WEB UI (@uspace-tech/web-ui) is a React component library built with TypeScript and Chakra UI. It provides reusable UI components for USPACE's web applications.

## Key Commands

### Development
```bash
# Start Storybook for component development
npm run storybook

# Build the library and Storybook
npm run build

# Release a new version (after building and committing)
npm run release
```

### Testing
No test framework is currently configured. The test script returns an error.

## Architecture

### Component Structure
Each component follows this pattern:
```
/src/ComponentName/
├── ComponentName.tsx        # Main component implementation
├── ComponentName.stories.tsx # Storybook stories
├── ComponentName.recipe.ts  # Chakra UI recipe for styling (if applicable)
└── index.ts                # Re-exports
```

### Styling System
- Uses Chakra UI v3 with recipe pattern for component variants
- Custom design tokens in `/src/style/`:
  - `colors/`: Color tokens and semantic colors
  - `textStyles/`: Typography definitions
  - `layers/`: Layer style definitions
- Components use Emotion for CSS-in-JS through Chakra UI

### Provider Pattern
The `Provider` component must wrap the entire application:
```tsx
import { Provider } from "@uspace-tech/web-ui"

<Provider>
  <App />
</Provider>
```

This sets up:
- Chakra UI theme provider
- Color mode management
- Default styles and tokens

## Component Guidelines

### Creating New Components
1. Create directory structure following the pattern above
2. Use TypeScript with proper type definitions
3. Add "use client" directive for Next.js compatibility
4. Create Storybook stories for documentation
5. Export from main index.ts

### Chakra UI Recipe Pattern
Components use recipes for consistent styling:
```ts
export const componentRecipe = defineRecipe({
  base: { /* base styles */ },
  variants: {
    variant: {
      primary: { /* primary variant styles */ }
    }
  }
})
```

### Key Dependencies
- React 19.0.0
- Chakra UI 3.19.1
- TypeScript 5.7.3
- date-fns 4.1.0 (for date utilities)
- react-icons 5.4.0 (for icons)

## Build Process

The build process (`npm run build`):
1. Cleans dist directory with rimraf
2. Compiles TypeScript using tsconfig.build.json
3. Builds Storybook documentation

Release process uses Auto for semantic versioning and changelog generation.

## Component Best Practices

1. **Type Safety**: Use strict TypeScript types, avoid `any`
2. **Forwarding Refs**: Support ref forwarding for DOM manipulation
3. **Chakra UI Integration**: Use Chakra's prop system for consistency
4. **Documentation**: Write comprehensive Storybook stories
5. **Accessibility**: Leverage Chakra UI's built-in accessibility features

## Common Patterns

### Form Components
- TextField, DatePicker, TimePicker follow Chakra's form control patterns
- Support error states, disabled states, and required validation

### Modal Component
- Supports header images, navigation buttons, and action buttons
- Uses Chakra's modal system with custom styling
- Accepts `bodyProps` for content customization

### Button Component
- Extends Chakra's Button with loading states
- Supports icons via react-icons
- Multiple size and color variants