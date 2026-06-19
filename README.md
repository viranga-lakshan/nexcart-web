# NexCart Web

Production-ready React + TypeScript e-commerce frontend for the existing `nexcart-api` backend.

## Why this architecture

- **Feature-first structure** keeps auth, products, cart, orders, users, seller, and admin concerns easy to find.

- **Redux Toolkit + RTK Query** separates client state from server state, adds caching/invalidation, and avoids manual loading boilerplate.

- **Axios base query** centralizes credentials, bearer token attachment, refresh-token retry, and backend error handling.

- **Role-protected routes** keep USER, SELLER, and ADMIN workspaces explicit and interview-friendly.

- **Reusable UI primitives** keep the app consistent without over-engineering a design system.

## Setup

```bash

cd nexcart-web

npm install

cp .env.example .env

npm run dev

```

Start the backend from the sibling folder:

```bash

cd ../nexcart-api

npm run dev

```

Vite proxies `/api` to `http://localhost:5000`, so the frontend can use `/api/v1` in development and stay deployment-ready for Vercel or Netlify rewrites.

## Environment

```env

VITE_API_BASE_URL=/api/v1

VITE_APP_NAME=NexCart

```

## Scripts

- `npm run dev` - local development

- `npm run build` - TypeScript check and production build

- `npm run lint` - ESLint

- `npm run test:run` - Vitest + React Testing Library

- `npm run format` - Prettier

## Implemented foundation

- Public storefront: home, products, product details, categories, auth pages

- User flows: cart, checkout, orders, profile, wishlist placeholder

- Seller workspace: dashboard, product management, inventory, orders

- Admin workspace: dashboard, users, products, orders

- JWT auth shape with HTTP-only refresh cookie support

- Dark/light/system theme support

- Loading, empty, and error states

- TanStack Table examples for management screens

## Deployment notes

### Vercel + AWS backend

This repo is configured to proxy API and upload requests to the AWS backend via `vercel.json`:

- `/api/*` → `http://13.60.211.231:5000/api/*`
- `/uploads/*` → `http://13.60.211.231:5000/uploads/*`

In the Vercel project settings, set:

```env
VITE_API_BASE_URL=/api/v1
VITE_APP_NAME=NexCart
```

Then deploy the repo. No CORS changes are needed on the backend when using the Vercel proxy.

If you prefer calling the backend directly, set `VITE_API_BASE_URL=http://13.60.211.231:5000/api/v1` in Vercel and allow your Vercel domain in the backend CORS config.
