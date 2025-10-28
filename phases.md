# Implementation Phases for Frontend Utilities & Storybook

## Introduction

This document outlines the phased implementation plan for the `frontend-utilities` repository, which provides CSS utility classes, HTML building blocks, and optional React components that extend and complement Digdir's Designsystemet. The primary goal is to support ASP.NET Razor / HTML-first projects while also accommodating React consumers, ensuring a unified, consistent, and accessible foundation.

The phases build upon each other sequentially: starting with foundational project setup, progressing through utility and component development, documentation via Storybook, and culminating in automation for deployment. Each phase establishes the groundwork for the subsequent ones, ensuring dependencies are resolved and integrations are seamless.

## Phase 1: Project Setup and Dependencies

- Create the repository folder structure as outlined in the plan.
- Set up package.json with necessary dependencies (@staf/design, @digdir/designsystemet, etc.).
- Install dependencies and configure the project for HTML/Razor and React support.

## Phase 2: Implement Utility CSS

- Implement _tokens.css to import tokens from @staf/design.
- Create spacing.css for margin and padding utilities.
- Create flex.css for flexbox utilities.
- Create grid.css for grid system utilities.
- Create typography.css for text alignment, styles, and sizes.
- Create color.css for text and background color utilities.
- Create table.css for responsive, accessible tables.
- Create index.css to expose all utilities as a single entrypoint.

## Phase 3: Implement Components

- Create HTML components (e.g., table.html for markup patterns).
- Create React components (e.g., ResponsiveTable.tsx) that leverage the utilities and Designsystemet.

## Phase 4: Storybook Setup

- Configure Storybook for the project.
- Create stories for foundations (Colors, Spacing, Typography).
- Create stories for utilities (Flex, Grid, Table).
- Create stories for components (ResponsiveTable).
- Ensure each story includes visual previews, code examples, best practices, and accessibility notes.

## Phase 5: Automation and Deployment

- Set up GitHub Actions workflow (build-and-deploy.yml) to build utilities and Storybook.
- Configure auto-deployment of Storybook on main merges.
- Ensure auto-rebuild on @staf/design releases.