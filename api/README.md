# Travel Price Tracker API

Simple Express server for the Travel Price Tracker application.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

## Endpoints

- `GET /api/trips` - Get all trips
- `GET /api/trips/:id` - Get one trip by ID
- `POST /api/trips` - Create a new trip
- `PUT /api/trips/:id` - Update a trip
- `DELETE /api/trips/:id` - Delete a trip
- `GET /api/health` - Health check

## Data

Uses in-memory storage (array). Data resets when server restarts.
