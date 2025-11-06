# Dependencies in this project

This document explains why each dependency is used in the project and what role it plays.  
It is intended for maintainers and contributors.

---

## Designsystemet @digdir

- **@digdir/designsystemet**
    - CLI tool for designsystemet.
- **@digdir/designsystemet-css**
    - CSS for designsystemet componenets.
- **@Statforvalteren/designsystemet-theme**
    - Theme for designsystemet for the norwegian county governors.

## Build tools

- **vite**
    - Frontend build tool that enables building and packaging for web applications.
- **typescript**
    - Enables using TypeScript - the strongly typed JavaScript language.


### Processing React

- **@vitejs/plugin-react**
    - Enables building React in Vite.


### Processing CSS

- **postcss**
    - Enables post processing of CSS, for instance through different plugins.
- **postcss-import**
    - Enables @import statements in css, enabling tying together different CSS files.
- **cssnano**
    - Enables CSS minification.
- **stylelint**
    - Enables linting and fixing of CSS.
- **stylelint-config-standard**
    - Adds a standard set of lint rules for CSS.
- **@stylistic/stylelint-plugin**
    - Adds support for lint rules that are deprecated in `stylelint`, but still useful.
- **@stylistic/stylelint-config**
    - Adds default configuration for stylistic linting.


### Additional type support

When using typescript, some packages provides additional typing for the editor etc.

- **@types/node**
    - TypeScript types for node. Used by editor to validate TypeScript code.
- **@types/postcss-import**
    - Enables type support for postcss-import.


## Storybook

- **storybook**
    - Display how to use components and utilities.
- **@storybook/addon-docs**
    - Adds improved support for component documentation.
- **@storybook/react-vite**
    - Enables easier development and testing of UI components.
