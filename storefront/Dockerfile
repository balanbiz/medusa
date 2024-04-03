# FROM node:latest
# WORKDIR /app/storefront
# COPY package*.json .
# COPY .env .
# RUN npm install
# COPY . .
# ENTRYPOINT [ "npm", "run", "dev" ]

FROM node:20.8.0-alpine as deps
WORKDIR /app/storefront

# copy required files
COPY package.json .
COPY yarn.lock .

# install deps
RUN yarn install --frozen-lockfile

# intermediate build stage
FROM node:20.8.0-alpine as runner
WORKDIR /app/storefront

# copy node_modules from deps
COPY --from=deps /app/storefront/node_modules /app/storefront/node_modules

# run storefront in dev mode
ENTRYPOINT [ "yarn", "dev" ]