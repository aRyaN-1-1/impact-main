# Local Development Setup

This project is now fully portable and can run locally outside of Replit.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database

## Quick Start

1. **Clone/Download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual database credentials
   ```

4. **Set up database**
   ```bash
   npm run db:push
   npx tsx scripts/seed.ts
   ```

5. **Start development servers**
   ```bash
   node start-local.js
   ```

   Or run servers separately:
   ```bash
   # Terminal 1 - Backend
   NODE_ENV=development npx tsx server/index.ts
   
   # Terminal 2 - Frontend  
   npx vite --config vite.local.config.ts
   ```

## Ports

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Project Structure

- `client/` - React frontend
- `server/` - Express backend  
- `shared/` - Shared types and schemas
- `vite.local.config.ts` - Local Vite configuration (no Replit dependencies)
- `start-local.js` - Development server starter