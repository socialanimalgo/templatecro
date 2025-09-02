# Claude Code Session Guide - Webshop Project

## Project Overview
This is a "fusion-starter" project showcasing multiple website templates/demos for different business types (restaurant, hairstylist, lawyer, farm, etc.). It's a fullstack TypeScript application with React frontend and Express backend.

## Project Structure
```
webshop/
├── client/          # React frontend (SPA)
├── server/          # Express backend
├── shared/          # Shared TypeScript types/utilities
├── public/          # Static assets
└── dist/           # Build output (spa/ and server/)
```

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS
- **Backend**: Express + Node.js
- **UI Components**: Radix UI + shadcn/ui components
- **Styling**: TailwindCSS + Tailwind Typography
- **State**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Build**: Vite (dual config for client/server)
- **Testing**: Vitest
- **Package Manager**: pnpm

## Key Scripts
```bash
npm run dev          # Start development server (port 8080)
npm run build        # Build both client and server
npm run build:client # Build client only
npm run build:server # Build server only
npm start           # Run production server
npm test            # Run tests
npm run typecheck   # TypeScript checking
npm run format.fix  # Prettier formatting
```

## Development Setup
- Dev server runs on port 8080
- Vite config includes Express middleware for API routes
- Path aliases: `@/*` → `client/*`, `@shared/*` → `shared/*`
- TypeScript strict mode is disabled (relaxed config)

## Architecture Notes
- Client-side routing with React Router
- All business template pages in `client/pages/`
- Express API routes in `server/routes/`
- Shared types/utilities in `shared/`
- UI components follow shadcn/ui patterns
- Full-stack type safety with shared schemas

## Before Starting Work
1. Always kill existing Vite servers: `lsof -i :8080` then `kill <PID>`
2. Check TypeScript: `npm run typecheck`
3. Run tests if modifying logic: `npm test`
4. Format code when done: `npm run format.fix`

## Current Pages/Routes
- `/` - Index/home page
- `/vacation-house` - Vacation rental demo
- `/hairstylist-site` - Hair salon demo
- `/restaurant-site` - Restaurant demo  
- `/lawyers-site` - Law firm demo
- `/farm-site` - Farm business demo
- `/employment-agency-site` - Job agency demo
- `/news-portal-site` - News site demo
- `/electrician-site` - Electrician demo
- `/musician-site` - Musician demo
- `/*` - 404 Not Found page

## Common Tasks
- **New page**: Add route in `App.tsx`, create component in `client/pages/`
- **New component**: Add to `client/components/` following shadcn/ui patterns
- **API route**: Add to `server/routes/`
- **Shared types**: Define in `shared/api.ts` or new files
- **Styling**: Use TailwindCSS classes, extend in `tailwind.config.ts`