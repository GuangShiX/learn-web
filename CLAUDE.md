# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js configuration

## Project Architecture

This is a Next.js 15.3.3 application using the App Router with TypeScript and Sass styling.

**Key Structure:**
- `src/app/` - App Router directory with layout.tsx and page.tsx
- Uses Sass instead of CSS (`.sass` files, not `.scss`)
- TypeScript with strict mode enabled
- Font optimization using Geist fonts from next/font/google
- Path alias `@/*` maps to `./src/*`

**Styling:**
- Global styles in `src/app/globals.sass` 
- Component styles use CSS modules with `.module.sass` extension
- Sass syntax (indented, no semicolons/braces)

**Dependencies:**
- React 19
- Next.js 15.3.3 with Turbopack for development
- ESLint with Next.js TypeScript configuration
- Geist fonts for typography