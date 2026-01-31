# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with the T3 Stack (Next.js 13, tRPC, Prisma, NextAuth, Tailwind CSS, TypeScript). Uses pnpm as the package manager.

## Commands

```bash
pnpm dev              # Start development server (localhost:3000)
pnpm build            # Production build
pnpm start            # Run production server
pnpm lint             # ESLint check
pnpm lint:fix         # ESLint auto-fix
pnpm types:check      # TypeScript type checking (tsc --noEmit)
pnpm format:check     # Prettier format check
pnpm format:fix       # Prettier auto-format
```

Pre-commit hooks (Husky + lint-staged) run `lint`, `types:check`, and `format:check` on all staged `.ts`/`.tsx` files.

After installing dependencies, `prisma generate` runs automatically via the `postinstall` script.

## Environment Variables

Copy `.env.example` to `.env`. Required variables are validated at build time via Zod in `src/env.mjs`:
- `DATABASE_URL` - MySQL connection string
- `NEXTAUTH_SECRET`, `NEXTAUTH_URL` - Auth config
- `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` - GitHub OAuth
- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` - Spotify now-playing

## Architecture

### Routing & Pages
Next.js Pages Router with file-based routing in `src/pages/`. Pages use a per-page layout pattern via `getLayout` on page components, consumed by `_app.tsx`.

Routes: `/` (home), `/about`, `/guestbook`

### tRPC (Type-Safe API)
- **Client config**: `src/utils/api.ts` — creates typed React Query hooks via `createTRPCNext`
- **Server entry**: `src/server/api/root.ts` — aggregates routers into `appRouter`
- **Procedures**: `src/server/api/trpc.ts` — defines `publicProcedure` and `protectedProcedure` (session-enforced)
- **Routers**: `src/server/api/routers/` — `guestbook.route.ts` (CRUD) and `spotify.route.ts` (now-playing)

Frontend calls use `api.<router>.<procedure>.useQuery()` / `useMutation()`. Data is serialized with SuperJSON.

### Authentication
NextAuth.js with GitHub OAuth provider. Prisma adapter stores users/sessions in MySQL. Protected tRPC procedures enforce authentication via `enforceUserIsAuthed` middleware.

### Database
Prisma ORM with MySQL (`relationMode = "prisma"`). Schema at `prisma/schema.prisma`. Models: User, Account, Session, VerificationToken, GuestbookMessage.

### Directory Layout
- `src/components/` — Reusable components (Layout, Navigation, SEO, etc.)
- `src/ui/` — Page-specific UI sections (profile banner, projects, guestbook messages, timeline)
- `src/server/` — Backend: auth config (`auth.ts`), Prisma client (`db.ts`), tRPC routers
- `src/data/` — Static data (projects, tech stack, timeline)
- `src/lib/` — Utility functions (Spotify API helpers)
- `src/providers/` — React context providers (navigation state)
- `src/types/` — TypeScript type definitions

### Path Alias
`@/*` maps to `./src/*` (configured in tsconfig.json).

## Code Style

- **Prettier**: 65 char print width, single quotes, ES5 trailing commas, Tailwind class sorting plugin
- **Imports**: Enforced ordering (builtin > external > internal > parent > sibling), alphabetized. Use `type` keyword for type-only imports (`import type { ... }`)
- **Unused imports**: Automatically flagged as errors. Unused variables prefixed with `_` are allowed
- **No circular imports**: `import/no-cycle` is set to error
- **Styling**: Tailwind utilities with `clsx` for conditional classes. Dark mode via `class` strategy with custom colors (`light: #FFFEFC`, `midnight: #121212`)
- **Animations**: Framer Motion for complex animations, Tailwind transitions for simple effects
