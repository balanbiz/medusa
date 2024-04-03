#!/bin/bash
echo "Executing migrations..."
npx medusa migrations run
echo "Creating test user..."
npx medusa user -e test@test.com -p test
echo "Starting server..."
npm run dev
