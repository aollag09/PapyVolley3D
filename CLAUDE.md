# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

PapyVolley3D is a 3D volleyball game built with React, TypeScript, Three.js, and npm.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (Vite)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # Run tsc --noEmit
npm test             # Run tests (Vitest)
npm test -- --run <path>  # Run a single test file
```

## Stack

- **React** — UI shell, menus, HUD overlays
- **Three.js** — 3D rendering and scene management
- **TypeScript** — strict mode enabled
- **Vite** — bundler and dev server
- **Vitest** — unit testing

## Architecture

The project separates React (UI layer) from Three.js (game loop/scene):

- `src/game/` — pure Three.js game logic: scene setup, physics, entities (ball, players, court)
- `src/components/` — React components for menus, HUD, and overlays
- `src/hooks/` — custom React hooks that bridge the game loop into React state
- `src/App.tsx` — mounts the canvas and renders the React UI on top
- `src/main.tsx` — entry point

The Three.js canvas is managed outside React's render cycle. The game loop runs via `requestAnimationFrame` and communicates with React through refs or an event emitter — never direct state mutation from within the loop.
