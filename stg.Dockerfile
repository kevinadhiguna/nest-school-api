FROM node:16-alpine as builder

WORKDIR /builder-app

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

COPY . .

# Generate 'dist' directory
CMD [ "yarn", "build" ]

FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

COPY --from=builder /builder-app/dist /app/dist

EXPOSE 5000

CMD [ "yarn", "start" ]
