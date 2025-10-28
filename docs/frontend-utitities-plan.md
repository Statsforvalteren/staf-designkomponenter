# Frontend Utilities & Storybook – Architecture and Implementation Plan

**Location:** `/docs/frontend-utilities-plan.md`  
**Version:** 1.0  
**Audience:** Frontend developers contributing to the utilities and Storybook  
**Dependencies:**  
- `@staf/design` STAF theme for Designsystemet (CSS variables & token definitions)  
- `@digdir/designsystemet` CLI and tooling for Designsystemet
- `@digdir/designsystemet-css` styling for components

---

## 🎯 Purpose

The `frontend-utilities` repository provides **CSS utility classes**, **HTML usage-ready building blocks**, and **optional React components** that extend and complement Digdir’s Designsystemet.

The primary goal is to support **ASP.NET Razor / HTML-first projects**, while also supporting React consumers.

This repository provides:

| Deliverable | Description |
|-------------|--------------|
| Utility CSS | A set of token-based utility classes for spacing, layout, flex, grid, typography, and color |
| Optional components | HTML + React components that use Designsystemet and tokens |
| Storybook documentation | Usage guidance showing HTML + React examples, code snippets, best practices |

Design tokens are consumed as a dependency via `@staf/design`, and utilities must **always reference token-based CSS variables** – never hardcoded values.

---

## 📦 Installation

Consumers install this package together with the design-tokens dependency:

```bash
npm install @staf/design @staf/frontend-utilities
```

In HTML/Razor:

```html
<link rel="stylesheet" href="node_modules/@staf/design/dist/tokens.css">
<link rel="stylesheet" href="node_modules/@staf/frontend-utilities/dist/index.css">
```

In React:

```ts
import "@company/design-tokens/dist/tokens.css";
import "@company/frontend-utilities/dist/index.css";
```

## 🧱 Repository Folder Structure

```bash
frontend-utilities/
├─ src/
│   ├─ utilities/
│   │   ├─ _tokens.css                  # Imports tokens from @company/design-tokens
│   │   ├─ spacing.css                  # Margin, padding
│   │   ├─ flex.css                     # Flexbox utilities
│   │   ├─ grid.css                     # Grid system
│   │   ├─ typography.css               # Text alignment, styles, sizes
│   │   ├─ color.css                    # Text and background colors
│   │   ├─ table.css                    # Responsive, accessible tables
│   │   └─ index.css                    # Exposes all utilities as a single entrypoint
│   ├─ components/
│   │   ├─ html/
│   │   │   └─ table.html               # Example markup patterns
│   │   ├─ react/
│   │   │   └─ ResponsiveTable.tsx      # Optional React abstraction
│   └─ index.css                        # Main consumer import
├─ storybook/
│   ├─ stories/
│   │   ├─ foundations/
│   │   │   ├─ Colors.stories.mdx
│   │   │   ├─ Spacing.stories.mdx
│   │   │   └─ Typography.stories.mdx
│   │   ├─ utilities/
│   │   │   ├─ Flex.stories.mdx
│   │   │   ├─ Grid.stories.mdx
│   │   │   └─ Table.stories.mdx
│   │   └─ components/
│   │       └─ ResponsiveTable.stories.mdx
├─ .github/workflows/
│   └─ build-and-deploy.yml             # Builds CSS + Storybook, deploys Storybook
├─ package.json
└─ README.md
```

## 🎛️ Utility Class Strategy

### Guiding Principles

- All utilities must reference CSS variables from @staf/design
- Class naming should be predictable and consistent
- Must work for both HTML and React users
- Utilities are opt-in (non-opinionated), modular, and composable

## 📐 Utilities: Flex System

### Goals

Provide simple but powerful flex utilities for layout composition without writing custom CSS.

### Class Naming

| Class | Meaning |
|-------|---------|
| `.u-flex` | Enables flexbox |
| `.u-flex-row` / `.u-flex-col` | Direction |
| `.u-flex-center` | Center Item(s) |
| `.u-flex-between` | space-between |
| `.u-items-center` | align-items: center |
| `.u-justify-center` | justify-content: center |
| `.u-gap-sm/md/lg` | Uses spacing tokens for gap |

### Example `flex.css`

```css
.u-flex { display: flex; }
.u-flex-row { flex-direction: row; }
.u-flex-col { flex-direction: column; }

.u-items-center { align-items: center; }
.u-items-start { align-items: flex-start; }
.u-items-end { align-items: flex-end; }

.u-justify-center { justify-content: center; }
.u-justify-between { justify-content: space-between; }

.u-gap-xs { gap: var(--spacing-xs); }
.u-gap-sm { gap: var(--spacing-sm); }
.u-gap-md { gap: var(--spacing-md); }
.u-gap-lg { gap: var(--spacing-lg); }
```

## 🧩 Utilities: Grid System

### Goals

- Provide a responsive mobile-first grid using CSS Grid
- Easy column control with utility classes
- Use token-based spacing for gaps

### Class Naming

| Class | Meaning |
|-------|---------|
| `.u-grid` | Initializes grid layout |
| `.u-grid-2`, `.u-grid-3`, `.u-grid-4` | Fixed number of equal-width columns |
| `.u-grid-gaps-sm/md/lg` | Token-based gap utilities |
| `.u-grid-auto` | Auto-fill responsive grid |

### Example `grid.css`

```css
.u-grid {
  display: grid;
  gap: var(--spacing-md);
}

.u-grid-2 { grid-template-columns: repeat(2, 1fr); }
.u-grid-3 { grid-template-columns: repeat(3, 1fr); }
.u-grid-4 { grid-template-columns: repeat(4, 1fr); }

.u-grid-gap-xs { gap: var(--spacing-xs); }
.u-grid-gap-sm { gap: var(--spacing-sm); }
.u-grid-gap-md { gap: var(--spacing-md); }
.u-grid-gap-lg { gap: var(--spacing-lg); }

/* Responsive auto-fit system */
.u-grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

## ♿ Accessible + Mobile-First Tables

### Requirements
✔ Accessible via screen readers  
✔ Works without JavaScript  
✔ Mobile first: collapses into a stacked card layout on smaller screens  
✔ Works with utility classes + tokens

### Approach

- Default table → scrollable horizontally on small screens
- Optional: “Stacked card mode” converts table rows into card-like blocks on mobile
- Use semantic `<table>`, `<th>`, `<caption>`, and correct ARIA attributes

### Planned CSS Behavior

| Screen Size | Rendering |
|-------------|-----------|
| Mobile (default) | Stacked or scrollable single column layout |
| Tablet+ | Standard table layout |

### Example `table.css` (simplified version)

```css
.u-table {
  width: 100%;
  border-collapse: collapse;
}

.u-table th,
.u-table td {
  padding: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border-subtle);
}

.u-table-responsive {
  display: block;
  overflow-x: auto;
}

/* Mobile stacked layout */
@media (max-width: 600px) {
  .u-table-stack thead {
    display: none;
  }

  .u-table-stack tr {
    display: block;
    margin-bottom: var(--spacing-md);
    border: 1px solid var(--color-border-subtle);
    border-radius: var(--radius-md);
    padding: var(--spacing-sm);
  }

  .u-table-stack td {
    display: flex;
    justify-content: space-between;
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  .u-table-stack td::before {
    content: attr(data-label);
    font-weight: bold;
  }
}
```

> **Note**: Developers will be instructed to add `data-label="Column Name"` attributes to `<td>` in stacked mode for accessibility.

## 📚 Storybook Documentation Plan

Storybook will include:

| Category | Topics |
|----------|--------|
| **Foundations** | Tokens, colors, spacing, typography |
| **Utilities** | Flex, Grid, Spacing, Colors, Tables |
| **Patterns** | Page layout examples, HTML templates |
| **Components** | Optional React wrappers |

Each page will provide:

- Visual preview
- HTML example
- Razor usage example (when applicable)
- React usage example (when applicable)
- Best practices, do/don't
- Accessibility notes

## 🤖 Automation Plan

GitHub Action: /.github/workflows/build-and-deploy.yml

### Automations

- Build utilities on PR + main branch
- Build and deploy Storybook on main merges
- Auto rebuild when @staf/design releases a new version

## ✅ Summary

This repository:

- Provides token-based utilities focused on HTML-first consumption
- Supports React with optional components
- Uses a mobile-first, accessible approach for tables
- Ships with a fully documented Storybook

This structure ensures developers across different tech stacks use a unified, consistent, accessible foundation that scales.
