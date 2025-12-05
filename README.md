# STAF Designkomponentar

A React component library for Statsforvalteren that extends `@digdir/designsystemet-react` with custom components and adaptations for internal use across multiple applications.

## What's Included

This library provides reusable React components that **do not already exist** in the DigDir Design System. It serves as a shared component library between STAF applications, ensuring consistency and reducing duplication.

### Available Components

- **Toast**: A notification system for displaying temporary messages
- **Stepper**: Multi-step process navigation with horizontal and vertical layouts

## Getting Started

### Prerequisites

This project uses private GitHub packages. You need a **GitHub Personal Access Token (Classic)** with `read:packages` scope.

#### Local Development Setup

1. Generate a GitHub Personal Access Token:
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Select the `read:packages` scope
   - If you need to publish, select the `write:packages` scope (this automatically includes read access).
   - Generate and copy the token


2. Add the token to your environment:

- This project contains a `.npmrc` file that reads the token from your environment. You do not need to create this file manually, but you must set the variable.

   **macOS/Linux** using Zsh or Bash (add to `~/.zshrc` or `~/.bashrc`):
```bash
   export STAF_COMPONENTS_GITHUB_TOKEN="your_token_here"
```

   **macOS/Linux** using Fish (add to `~/.config/fish/config.fish`):
```bash
    set -gx STAF_COMPONENTS_GITHUB_TOKEN "your_token_here"
```

   **Windows** (PowerShell):
```powershell
   [System.Environment]::SetEnvironmentVariable('STAF_COMPONENTS_GITHUB_TOKEN','your_token_here','User')
```


#### CI/CD Setup

Add `STAF_COMPONENTS_GITHUB_TOKEN` to repository secrets/variables in GitHub Actions or CI/CD platform.

### Installation
```bash
npm install @statsforvalteren/staf-designkomponentar
```

### Peer Dependencies

Ensure you have these peer dependencies installed:
```bash
npm install @digdir/designsystemet-css @digdir/designsystemet-react @statsforvalteren/designsystemet-theme react react-dom
```

### Commands
```bash
# Start Storybook for development
npm run storybook

# Build the component library
npm run build:components

# Build Storybook static site
npm run build:storybook

# Build everything
npm run build
```

### Adding a New Component

1. Create a new folder in `src/components/ui/` with PascalCase naming:
```
   src/components/ui/MyComponent/
   ├── MyComponent.tsx
   ├── MyComponent.module.css
   ├── MyComponent.types.ts
   ├── MyComponent.stories.tsx
   └── index.ts
```

2. Export the component from `src/components/ui/index.ts`:
```typescript
   export { MyComponent } from './MyComponent';
   export type { MyComponentProps } from './MyComponent';
```

3. Add Storybook stories for documentation and testing
4. Update this README to include your new component
